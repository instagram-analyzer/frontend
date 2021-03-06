import React from "react";
import { connect } from "react-redux";
import moment from 'moment';

import { 
  PostsContainer, 
  ProfileContainer, 
  PostsTable,
  GraphContainer
} from "./containerStyles.js";
import {
  getAccount,
  getAccountGrowth,
  getServices,
  sendServices
} from "../../../../store/actions/InstagramActions.js";
import ProfileCard from "../../../../components/profile-card";
import AverageCards from "../../../../components/profile-card/average-cards";
import DataTable from "../../../../components/table";
import Post from "../../../../components/instagram-post";
import Modal from "../../../../components/modal";
import InstagramServiceForm from "../../../../components/instagram-service-form";
import LineGraph from "../../../../components/graphs/line-graph";
import AreaChart from "../../../../components/graphs/area-chart";
import Footer from "../../../../components/footer";

export class InstagramStats extends React.Component {
  state = {
    servicesModalOpen: false,
    currentPost: "",
    serviceForm: {
      action: "add",
      service: "",
      quantity: ""
    }
  };

  componentDidMount() {
    this.props.getServices();
    this.props.getAccount(this.props.match.params.username);
    // this.startUpdatingStats();
  }

  componentWillUnmount() {
    clearInterval(this.dataInterval);
  }

  startUpdatingStats = () => {
    this.dataInterval = setInterval(() => {
      this.props.getAccount(this.props.match.params.username);
      this.props.getAccountGrowth(this.props.match.params.username);
    }, 2500);
  };

  handleServiceFormChange = e => {
    this.setState({
      serviceForm: {
        ...this.state.serviceForm,
        [e.target.name]: e.target.value
      }
    });
  };

  handleServiceFormSubmit = e => {
    e.preventDefault();
    this.toggleModal();
    this.props.sendServices({
      ...this.state.serviceForm,
      link: `https://instagram.com/p/${this.state.currentPost}`
    });
  };

  toggleModal = e => {
    this.setState({
      servicesModalOpen: !this.state.servicesModalOpen
    });
  };

  selectPost = (e, shortcode) => {
    e.preventDefault();
    this.setState({
      currentPost: shortcode
    });
  };

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
      posts,
      overTimeData
    } = instagramAccount;

    return (
      <>
        <ProfileContainer>
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
              username={this.props.match.params.username}
            />
          </div>
          <PostsTable>
            {typeof posts !== "undefined" && <DataTable posts={posts} rows="5"/>}
          </PostsTable>
        </ProfileContainer>

        {typeof overTimeData !== "undefined" &&
        <>
        <GraphContainer>
          <div className="graph-header">
            <h2>Followers<span>(growth over time)</span></h2>
          </div>
          <AreaChart
            data={
              overTimeData.map(d => ({
              name: moment(d.created_at).format("MM/DD/YYYY"),
              follower_growth: d.follower_growth
            }))
          }
            datakey="follower_growth"
          />
        </GraphContainer>

        <GraphContainer>
          <div className="graph-header">
            <h2>Following<span>(growth over time)</span></h2>
          </div>
          <AreaChart
            data={overTimeData.map(d => ({
              name: moment(d.created_at).format("MM/DD/YYYY"),
              following_growth: d.following_growth
            }))}
            datakey="following_growth"
          />
        </GraphContainer>
       
        <GraphContainer>
          <div className="graph-header">
            <h2>Posts<span>(growth over time)</span></h2>
          </div>
          <LineGraph
              data={overTimeData.map(d => ({
                name: moment(d.created_at).format("MM/DD/YYYY"),
                posts_growth: d.posts_growth
              }))}
              datakey="posts_growth"
            />
        </GraphContainer>
        </>}

        {typeof posts !== "undefined" && (
          <PostsContainer>
            <div className="posts-header">
              <h2>Viral Posts</h2>
            </div>
            <div className="posts-container">
              {posts.filter(p => {
                console.log(p)
                return p.engagment > 3
              }).map(p => {
                  return (
                    <Post
                      key={p.id}
                      post={p}
                      toggleModal={this.toggleModal}
                      selectPost={this.selectPost}
                    />
                  );
              })}
            </div>
          </PostsContainer>
        )}
        {servicesModalOpen && (
          <Modal
            header="Select Options"
            Component={InstagramServiceForm}
            props={{
              services: services,
              handleClose: this.toggleModal,
              handleChange: this.handleServiceFormChange,
              handleSubmit: this.handleServiceFormSubmit
            }}
          />
        )}
        <div />
        <Footer
          links={[
            {
              exact: false,
              path: "/",
              text: "Home"
            },
            {
              exact: false,
              path: "/dashboard/instagram",
              text: "Search"
            },
            {
              exact: false,
              path: "/dashboard/instagram/tracked-accounts",
              text: "Tracked Accounts"
            },
            {
              exact: false,
              path: "/dashboard/instagram/saved-accounts",
              text: "Saved Accounts"
            }
          ]}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  instagramAccount: state.instagramReducer.instagramAccount,
  accountStats: state.instagramReducer.stats,
  services: state.instagramReducer.services
});

export default connect(
  mapStateToProps,
  {
    getAccount,
    getAccountGrowth,
    getServices,
    sendServices
  }
)(InstagramStats);
