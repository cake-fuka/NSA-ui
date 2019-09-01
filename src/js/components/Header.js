import React from "react";

export default class Header extends React.Component {
  handleChange(e) {
    var title = e.target.value;
    this.props.changeTitle(title.toUpperCase());
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export class Title extends React.Component {
  render() {
      return (
        <h1>{this.props.title}</h1>
      );
    }
}