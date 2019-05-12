import React from "react";
import { connect } from "react-redux";

import { getAccount } from "../../../../store/actions/InstagramActions.js";
import DataTable from "../../../../components/table";

export class InstagramPostsTable extends React.Component {
  componentDidMount(){
    this.props.getAccount(this.props.match.params.username);
  }

  render() {
    const { instagramAccount } = this.props;
    const { posts } = instagramAccount;
    return (
      <div>
        {typeof posts !== "undefined" && <DataTable posts={posts} rows="10000"/>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  instagramAccount: state.instagramReducer.instagramAccount,
})

export default connect(
    mapStateToProps,
    {
        getAccount
    }
)(InstagramPostsTable)
