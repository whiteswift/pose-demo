import React, { Component, Fragment } from "react";
import {
  PackagingOptions,
  PaymentOptions,
  ShippingAddress,
  ShippingOptions,
  StepContainer
} from "./components";
import "./App.css";

class App extends Component {
  state = {
    currentStep: 1,
    loading: true
  };

  componentDidMount() {
    this.simulateLoad();
  }

  goToNextStep = () => {
    const { currentStep } = this.state;

    this.setState({ currentStep: currentStep + 1 });

    setTimeout(() => {
      document
        .getElementById(`step-${this.state.currentStep}`)
        .scrollIntoView({ block: "start", behavior: "smooth" }); // Smooth only for chrome - how does scroll to top component do this for other browsers?
    }, 1000);
  };

  simulateLoad = () => {
    this.setState({ loading: true }, () => {
      setTimeout(() => this.setState({ loading: false }), 2000);

      setTimeout(() => {
        document
          .getElementById("step-1")
          .scrollIntoView({ block: "start", behavior: "smooth" });
      }, 3000);
    });
  };

  render() {
    const { currentStep, loading } = this.state;

    return (
      <Fragment>
        <header>
          <p>MR PORTER</p>
        </header>
        <div className="App">
          <h1>Checkout</h1>

          <StepContainer
            id="step-1"
            title="1. Shipping Address"
            loading={loading}
          >
            <ShippingAddress
              loading={loading}
              isComplete={currentStep > 1}
              isCurrentStep={currentStep === 1}
              onComplete={this.goToNextStep}
            />
          </StepContainer>

          <StepContainer
            id="step-2"
            title="2. Shipping Options"
            loading={loading}
          >
            <ShippingOptions
              loading={loading}
              isCurrentStep={currentStep === 2}
              isComplete={currentStep > 2}
              onComplete={this.goToNextStep}
            />
          </StepContainer>

          <StepContainer
            id="step-3"
            title="3. Packaging Options"
            loading={loading}
          >
            <PackagingOptions
              loading={loading}
              isCurrentStep={currentStep === 3}
              isComplete={currentStep > 3}
              onComplete={this.goToNextStep}
            />
          </StepContainer>

          <StepContainer
            id="step-4"
            title="4. Payment Options"
            loading={loading}
          >
            <PaymentOptions
              loading={loading}
              isCurrentStep={currentStep === 4}
              isComplete={currentStep > 4}
              onComplete={this.goToNextStep}
            />
          </StepContainer>
          <StepContainer
            id="order-details"
            title="Your Order Details"
            loading={loading}
          >
            {!loading && (
              <Fragment>
                <h2>Prada Shorts</h2>
                <p>Quantity: 1</p>
                <p>Total £500</p>

                <h2>Gucci Sandals</h2>
                <p>Quantity: 2</p>
                <p>Total £798</p>
              </Fragment>
            )}
          </StepContainer>
          <StepContainer
            id="step-5"
            title="Review and Purchase"
            loading={loading}
          >
            {!loading && currentStep === 5 && (
              <Fragment>
                <p>Click below to buy!</p>
                <div style={{ textAlign: "center" }}>
                  <input type="button" value="Continue" onClick={() => null} />
                </div>
              </Fragment>
            )}
          </StepContainer>
        </div>
        <footer />
      </Fragment>
    );
  }
}

export default App;
