import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}
