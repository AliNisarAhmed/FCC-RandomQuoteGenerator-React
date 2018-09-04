import React, { Component } from 'react';
import { render } from 'react-dom';
import quotes from './seed/quotes';
import QuoteBox from './components/QuoteBox';

import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes,
      currentQuote: 0,
      color1: "",
      color2: ""
    };
  }

  componentDidMount() {
    this.generateNewQuote();
  }

  randomNumberGenerator = () => {
    let max = this.state.quotes.length - 1;
    return Math.floor(Math.random() * (max)) + 1;
  }

  randomInt = () => {
    return Math.floor(Math.random() * 256) + 1;
  }

  randomHex = () => {
    let hex = this.randomInt().toString(16);
    if (hex.length <= 1) {
      hex = "0" + hex;
    }
    return hex;
  }

  randomColor = () => {
    return `#${this.randomHex()}${this.randomHex()}${this.randomHex()}`;
  }

  generateNewQuote = () => {
    this.setState(() => ({ 
      currentQuote: this.randomNumberGenerator(),
      color1: this.randomColor(),
      color2: this.randomColor() 
    }));
  }

  render() {
    const style = {
      backgroundImage: `linear-gradient(to right, ${this.state.color1}, ${this.state.color2}`
    }

    return (
      <div className="app" style={style}>
        <QuoteBox
          quote={this.state.quotes[this.state.currentQuote]}
          generateNewQuote={this.generateNewQuote}
          color1={this.state.color1}
          color2={this.state.color2}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// App
  // QuoteBox
    // Text
    // Author
    // New quote Button
    // Tweet Quote Button

