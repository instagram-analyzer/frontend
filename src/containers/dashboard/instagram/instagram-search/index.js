import React from 'react';

import {} from './containerStyles.js';
import Search from '../../../../components/instagram-search';
import Footer from '../../../../components/footer';

export class InstagramSearch extends React.Component {
  state={
    searchQuery: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/dashboard/instagram/${this.state.searchQuery}`)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { searchQuery } = this.state;

    return (
      <> 
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={searchQuery}
        /> 
        <Footer
          fixed
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
            },
          ]}
        />
      </>
    )
  }
}

export default InstagramSearch
