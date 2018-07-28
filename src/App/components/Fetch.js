import { Component } from "react";
import PropTypes from "prop-types";
import mock from "../laApiNoSoportaCors";

export default class Fetch extends Component {
  static propTypes = {
    endpoint: PropTypes.string,
    children: PropTypes.func.isRequired
  };

  static defaultProps = {
    endpoint: "https://www.metrovias.com.ar/Subterraneos/Estado?site=Metrovias",
    children: () => {}
  };

  state = {
    isLoading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    // fetch(this.props.endpoint)
    //   .then(res => res.ok && res.json())
    new Promise(resolve => {
      setTimeout(() => resolve(mock), 1000);
    })
      .then(data => {
        console.log(data);
        this.setState({ data, isLoading: false });
        this.props.onComplete(data);
      })
      .catch(err => {
        this.setState({ isLoading: false, error: true });
        throw new Error(`Fetch fail: ${err}`);
      });
  }

  render() {
    return this.props.children({ ...this.state });
  }
}
