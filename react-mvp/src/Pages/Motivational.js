import React, { useState } from "react";
const url = "http://localhost:3001";

function Motivational() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [showQuote, setShowQuote] = useState(false);

  const getQuote = () => {
    fetch(`${url}/api/quotes/`)
      .then((response) => response.json())
      .then((response) => {
        let dataQ = response;
        //Random number times the length of quotes in order to grab a random quote.
        let ranNumber = Math.floor(Math.random() * dataQ.length);
        let ranQ = dataQ[ranNumber];
        setQuote(ranQ.quote);
        setAuthor(ranQ.author);
        setShowQuote(true);
      });
  };
  //Get another random quote
  const NextQuote = () => {
    getQuote();
  };

  return (
    <div className="motivational">
      <h1 className="motivationHeader">Motivational</h1>
      <span className="moto-span">
        Need a little push or burst of wisdom to get your focus back, or get you
        motivated? We got you covered!
      </span>
      {showQuote ? (
        <div className="fullQuote">
          <div style={{ margin: "10px" }} className="quote">
            {quote}
          </div>
          <div style={{ fontWeight: "bold" }} className="author">
            {author}
          </div>
        </div>
      ) : null}
      <div className="text-center my-3">
        <button className="motoBTN" onClick={NextQuote}>
          Get quote
        </button>
      </div>
    </div>
  );
}

export default Motivational;
