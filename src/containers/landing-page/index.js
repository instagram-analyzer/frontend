import React from 'react'

export class LandingPage extends React.Component {
  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  render() {
    return (
      <div>
        <button onClick={this.login}>Log In</button>
      </div>
    )
  }
}

export default LandingPage
