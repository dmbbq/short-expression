import React, { useState, useEffect } from 'react';

const ShortExpression = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  };

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default ShortExpression;
