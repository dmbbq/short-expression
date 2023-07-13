import React, { useState, useEffect } from 'react';
import s from './ShortExpression.module.css'; 

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
    <div className={s.quoteContainer}> 
      <h1>Random Quote</h1>
      <p className={s.quoteText}>{quote}</p>
      <button className={s.quoteButton} onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>
  );
};

export default ShortExpression;
