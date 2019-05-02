import React from "react";

class Callback extends React.Component {
  componentDidMount = () => {
    window.location.href = "/dashboard/instagram";
  };

  render() {
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  }
}

export default Callback;
