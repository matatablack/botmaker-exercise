import React, { Component } from "react";
import PropTypes from "prop-types";

export class LineButton extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    lineName: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    backgroundColor: "#555",
    color: "#fff",
    lineName: "A",
    onClick: () => {}
  };

  render() {
    const { backgroundColor, color, lineName, onClick } = this.props;

    return (
      <li>
        <div
          onClick={() => onClick(lineName)}
          className="circle"
          style={{ backgroundColor, color }}
        >
          {lineName}
        </div>
      </li>
    );
  }
}
