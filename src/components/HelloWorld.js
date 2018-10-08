import React, { Component } from 'react';
class HelloWorld extends Component {
  render() {
    return (
      <div className="App">
       {this.props.tech}
      </div>
    );
  }
}

export default HelloWorld;
