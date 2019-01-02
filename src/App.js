import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import posed, { PoseGroup } from 'react-pose';
import { tween, keyframes } from 'popmotion';

const ExpandingBox = posed.div({
  hidden: { opacity: 0 }, // Defining states: css for states
  visible: { opacity: 1 }
  // Can also pass cubic bezier values too
  // transition: {
  //   ease: [.01, .64, .99, .56]
  // }
  // https://popmotion.io/pose/learn/custom-transitions/#custom-transitions-transitions-tween
});

const FadingTitleSpan = posed.span({
  init: {
    opacity: 1
  },
  loading: {
    opacity: 0.4,
    transition: {
      type: 'keyframes',
      values: [1, 0.4, 1],
      times: [0, 0.5, 1],
      duration: 1000,
      loop: Infinity
    }
  },

});

class App extends Component {
  state = {
    loading: true,
    items: [{ no: 1, title: 'Shipping Address' }, { no: 2, title: 'Shipping Options' }, { no: 3, title: 'Packaging Options' }, { no: 4, title: 'Payment Options' }],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

  }
  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <h1>For fading animations</h1>
          <PoseGroup>
            {this.state.items.map(({ no, title }) => (
              <ExpandingBox className="box" data-key={no} key={no}>
                <FadingTitleSpan initialPose="init" pose={loading ? 'loading' : 'init'} className='text'>{no} {title}</FadingTitleSpan>
                {/* <FadingForm> */}
              </ExpandingBox>
            ))}
          </PoseGroup>
        </header>
      </div>
    );
  }
}

// Not important, some array shuffle code
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default App;
