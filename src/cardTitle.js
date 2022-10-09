import React, { Component } from 'react';
export class CardTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grettingTime: 'night',
    };
    this.onGretting = () => {
      this.setState({ ...this.state, grettingTime: 'morning' });
    };
  }
  render() {
    const buttonStyle = {
      backgroundColor: 'red',
      color: this.props.color,
    };
    return (
      <>
        <button style={buttonStyle} onClick={this.onGretting}>
          change gretting
        </button>
        <h1>
          hi {this.props.name} good {this.state.grettingTime}
        </h1>
      </>
    );
  }
}
