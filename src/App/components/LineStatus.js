import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LineStatus extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        LineStatus: PropTypes.string.isRequired,
        LineName: PropTypes.string.isRequired,
        LineFrequency: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const { isLoading, error, data } = this.props;

    const lineData = data.find(line => this.props.line === line.LineName);
    const lineStatus = lineData && lineData.LineStatus;
    console.log(lineData);

    const message = isLoading
      ? "Loading..."
      : error
        ? "There was an error while fetching"
        : lineStatus;

    const allGood = message === "Normal";

    return (
      <div className={`status ${isLoading || (allGood ? "status--ok" : "status--bad")}`}>
        {message}
      </div>
    );
  }
}
