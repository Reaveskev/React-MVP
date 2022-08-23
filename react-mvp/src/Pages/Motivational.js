import React, { useEffect, useState } from "react";
const url = "http://localhost:3001";

function Motivational() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    fetch(`${url}/api/quotes/`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let dataQ = response;
        let ranNum = Math.floor(Math.random() * dataQ.length);
        let ranQ = dataQ[ranNum];
        setQuote(ranQ.quote);
        setAuthor(ranQ.author);
      })
      .catch((err) => console.error(err));
  };

  const NextQuote = () => {
    getQuote();
  };

  return (
    <div className="motivational">
      <h1>Motivational</h1>
      <div className="quote">{quote}</div>
      <div className="author">-{author}</div>
      <div className="text-center my-3">
        <button id="btn" className="py-2 px-3" onClick={NextQuote}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Motivational;
