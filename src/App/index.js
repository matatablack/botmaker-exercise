import React, { Component } from "react";
import moment from "moment";
import "./styles.css";
import lines from "./store";
import { LineButton } from "./components/LineButton";
import Fetch from "./components/Fetch";
import LineStatus from "./components/LineStatus";

class App extends Component {
  state = {
    clickedLine: null,
    lastUpdate: null
  };

  handleClick = lineName => {
    this.setState({
      clickedLine: lineName
    });
  };

  handleCompleteFetch = res => {
    this.setState({ lastUpdate: moment().calendar() });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title"> Estado de las lineas de subte </h1>
        <hr />
        <ul>
          {lines.map(line => (
            <LineButton {...line} key={line.lineName} onClick={this.handleClick} />
          ))}
        </ul>

        {this.state.clickedLine && (
          <Fetch
            key={this.state.clickedLine}
            endpoint="https://jsonplaceholder.typicode.com/comments"
            onComplete={this.handleCompleteFetch}
          >
            {({ isLoading, data, error }) => (
              <LineStatus
                isLoading={isLoading}
                data={data}
                error={error}
                line={this.state.clickedLine}
              />
            )}
          </Fetch>
        )}
        <div className="last-update">
          {this.state.lastUpdate && `Última actualización: ${this.state.lastUpdate}`}
        </div>
      </div>
    );
  }
}

export default App;
