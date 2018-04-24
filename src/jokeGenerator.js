import React from "react";

export default class JokeGenerator extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     joke: null
  //   };
  // }

  state = { joke: null };

  render() {
    const { joke } = this.state;
    return (
      <React.Fragment>
        {!joke && <div>You haven't loaded jokes yet</div>}
      </React.Fragment>
    );
  }
}
