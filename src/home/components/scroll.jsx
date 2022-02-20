import React, { PureComponent } from "react";
import { ToTop } from "./style";

export default class Scroll extends PureComponent {
  state = {
    show: false,
  };
  reset() {
    window.scrollTo(0, 0);
  }
  render() {
    return this.state.show ? (
      <ToTop onClick={() => this.reset()}>
        <span className="iconfont">&#xeb0a;</span>
      </ToTop>
    ) : (
      ""
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      if (top >= 100) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    });
  }

  componentWillUnmount() {
    this.setState = () => {}
    window.removeEventListener("scroll", () => {
      const top = window.scrollY;
      if (top >= 100) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    });
  }
}
