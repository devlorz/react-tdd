import React from "react";

export default class JokeGenerator extends React.Component {
  state = { joke: null, loading: false };

  loadJoke = async () => {
    this.setState({
      loading: true
    });
  };

  render() {
    const { joke, loading } = this.state;
    return (
      <div>
        <React.Fragment>
          {!joke && !loading && <div>You haven't loaded jokes yet</div>}
          {loading && <div>Loading...</div>}
        </React.Fragment>
        <button onClick={this.loadJoke} type="button">
          Load a random joke
        </button>
      </div>
    );
  }
}
