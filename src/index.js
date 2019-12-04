import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// React

class Term extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}

class Evaluation extends React.Component {
  constructor(props) {
    super(props);
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button value={this.props.caption} onClick={this.props.handleButton}>
        {this.props.caption}
      </button>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(event) {
    this.setState({
      term: this.state.term.concat(event.target.value)
    });
    console.log(
      "term: " + this.state.term + ", eval(term): " + eval(this.state.term)
    );
  }

  render() {
    return (
      <div>
        <Button caption="1" handleButton={this.handleButton} />
        <Button caption="+" handleButton={this.handleButton} />
        <Button caption="eval" />
        <br />
        <Term value={this.state.term} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
