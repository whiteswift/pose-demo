import React, { Component } from "react";
import { PoseGroup } from "react-pose";
import { ExpandingBox, FadingTitle, FadeInContent } from "./components";
import {
  shippingAddress,
  shippingOptions,
  packagingOptions,
  completedPackagingOptions
} from "./content";
import "./App.css";

class App extends Component {
  state = {
    loading: true,
    steps: [
      {
        key: 1,
        title: "Shipping Address",
        content: shippingAddress
      },
      { key: 2, title: "Shipping Options", content: shippingOptions },
      { key: 3, title: "Packaging Options", content: packagingOptions },
      { key: 4, title: "Payment Options" }
    ]
  };

  componentDidMount() {
    const { steps } = this.state;
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    setTimeout(() => {
      this.setState({
        steps: [
          ...steps.slice(0, 2),
          {
            key: 3,
            title: "Packaging Options",
            content: completedPackagingOptions
          },
          ...steps.slice(3)
        ]
      });
    }, 5000);
  }

  render() {
    const { loading, steps } = this.state;

    return (
      <div className="App">
        <h1>Checkout</h1>
        <PoseGroup>
          {steps.map(({ key, title, content }) => (
            <ExpandingBox className="box" data-key={key} key={key}>
              <FadingTitle
                initialPose="init"
                pose={loading ? "loading" : "init"}
                className="text"
                style={!content && !loading ? { color: "grey" } : {}}
              >
                {key} {title}
              </FadingTitle>
              <FadeInContent pose={loading ? "closed" : "open"}>
                {content}
              </FadeInContent>
            </ExpandingBox>
          ))}
        </PoseGroup>
      </div>
    );
  }
}

export default App;
