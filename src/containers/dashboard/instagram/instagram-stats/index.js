import React from 'react';
import { connect } from 'react-redux';

import { PostsContainer } from './containerStyles.js';
import { 
  getAccount, 
  getAccountGrowth, 
  getServices,
  sendServices
} from '../../../../store/actions/InstagramActions.js';
import ProfileCard from '../../../../components/profile-card';
import AverageCards from '../../../../components/profile-card/average-cards';
import Post from '../../../../components/instagram-post';
import Modal from '../../../../components/modal';
import InstagramServiceForm from '../../../../components/instagram-service-form';
// import LineGraph from '../../../../components/graphs/line-graph';

export class InstagramStats extends React.Component {
  state = {
    servicesModalOpen: false,
    currentPost: '',
    serviceForm: {
      action: 'add',
      service: '',
      quantity: ''
    }
  }

  componentDidMount(){
    this.props.getAccount(this.props.match.params.username);
    this.props.getAccountGrowth(this.props.match.params.username);
    this.props.getServices();
  }

  handleServiceFormChange = (e) => {
    this.setState({
      serviceForm:{
        ...this.state.serviceForm,
        [e.target.name]: e.target.value
      }
    })
  }

  handleServiceFormSubmit = e => {
    e.preventDefault();
    
    this.props.sendServices({
      ...this.state.serviceForm,
      link: `https://instagram.com/p/${this.state.currentPost}`
    })
  }

  toggleModal = (e) => {
    e.preventDefault();
    this.setState({
      servicesModalOpen: !this.state.servicesModalOpen
    })
  }

  selectPost = (e, shortcode) => {
    e.preventDefault();
    this.setState({
      currentPost: shortcode
    })
  }

  render() {
    const { instagramAccount, services } = this.props;
    const { servicesModalOpen } = this.state;

    const { 
      account_bio,
      account_bio_url,
      account_image_url,
      account_username,
      full_name,
      is_verified,
      follower_count,
      following_count,
      posts_count,
      average_likes,
      average_comments,
      average_views,
      posts
    } = instagramAccount;

    return (
      <>
        <div>
          <ProfileCard
            user_name={account_username}
            full_name={full_name}
            bio={account_bio}
            bio_url={account_bio_url}
            account_img={account_image_url}
            follower_count={follower_count}
            following_count={following_count}
            posts_count={posts_count}
            is_verified={is_verified}
          />
          <AverageCards 
            average_likes={average_likes}
            average_comments={average_comments}
            average_views={average_views}
          />
        </div>
        
        {typeof posts !== "undefined" &&
          <PostsContainer>
            {posts.map(p => {
              return(
                <Post 
                  key={p.id}
                  post={p} 
                  toggleModal={this.toggleModal}
                  selectPost={this.selectPost}
                />
              )
            })}
          </PostsContainer>
        }

        {servicesModalOpen && 
          <Modal
            header="Select Options"
            Component={InstagramServiceForm}
            props={{
              services: services,
              toggleModal: this.toggleModal,
              handleChange: this.handleServiceFormChange,
              handleSubmit: this.handleServiceFormSubmit
            }}
          />
        }

        {/* <div>
          <LineGraph
            data={this.props.accountStats.map(d => ({
              name: d.created_at,
              pv: d.follower_count,
              uv: d.posts_count
            }))}
          />
        </div> */}
      </>
    )
  }
}

const mapStateToProps = state => ({
  instagramAccount: state.instagramReducer.instagramAccount,
  accountStats: state.instagramReducer.stats,
  services: state.instagramReducer.services
})

export default connect(
  mapStateToProps,
  {
    getAccount,
    getAccountGrowth,
    getServices,
    sendServices
  }
)(InstagramStats)
