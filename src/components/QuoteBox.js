import React from 'react';

const QuoteBox = ({ quote, generateNewQuote, color1, color2 }) => {

  if (!quote) {
    return <div>Loading...</div>;
  }

  const style = {
    backgroundColor: `${color1}` 
  }

  return (
    <div id="quote-box">
      <div className="quote">
        <div id="text">{quote.text}</div>
        <div id="author">- {quote.author}</div>
      </div>
      <div className="buttons">
        <button className="btn tweet" style={style}><a id="tweet-quote" href="twitter.com/intent/tweet">Tweet!</a></button>
        <button className="btn fb" style={style}>Share on Facebook!</button>
        <button onClick={generateNewQuote} id="new-quote" className="btn" style={style}>New quote</button>
      </div>
    </div>
  );
};

export default QuoteBox;