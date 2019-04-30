import React from 'react';
import { connect } from 'react-redux';

import { getAccount, getAccountGrowth } from '../../../../store/actions/InstagramActions.js';
import ProfileCard from '../../../../components/profile-card';
import AverageCards from '../../../../components/profile-card/average-cards';
// import LineGraph from '../../../../components/graphs/line-graph';

export class InstagramStats extends React.Component {
  componentDidMount(){
    this.props.getAccount(this.props.match.params.username);
    this.props.getAccountGrowth(this.props.match.params.username)
  }

  render() {
    const { instagramAccount } = this.props;

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
      average_views
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
})

export default connect(
  mapStateToProps,
  {
    getAccount,
    getAccountGrowth
  }
)(InstagramStats)
