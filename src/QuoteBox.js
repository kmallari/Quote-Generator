import Quote from "./Quote";
import Author from "./Author";
import Buttons from "./Buttons";
import React, { useState, useEffect } from "react";
import OtherAuthorQuotes from "./OtherAuthorQuotes";

const QuoteBox = () => {
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
    loading: true,
  });

  const [quoteArr, setQuoteArr] = useState([]);
  const [displayQuotes, setDisplayQuotes] = useState(false);

  useEffect(
    () =>
      fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
        .then((res) => res.json())
        .then((res) => {
          setQuote({
            quoteText: res.data[0].quoteText,
            quoteAuthor: res.data[0].quoteAuthor,
            quoteGenre: res.data[0].quoteGenre,
          });
        }),
    []
  );

  useEffect(
    () =>
      fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quote.quoteAuthor.replace(
          / /g,
          "+"
        )}`
      )
        .then((res) => res.json())
        .then((res) => {
          setQuoteArr(res.data);
        }),
    [quote.quoteAuthor]
  );

  const generateQuote = () => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`)
      .then((res) => res.json())
      .then((res) => {
        setQuote({
          quoteText: res.data[0].quoteText,
          quoteAuthor: res.data[0].quoteAuthor,
          quoteGenre: res.data[0].quoteGenre,
        });
      });
  };

  const tweetText = quote.quoteText.replace(/ /g, "%20");
  const tweetAuthor = quote.quoteAuthor.replace(/ /g, "%20");

  let tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22${tweetText}%22%20-%20${tweetAuthor}`;

  return (
    <div id="quote-box" className="">
      <div className="absolute top-0 left-0 w-4/5 lg:w-1/2">
        {displayQuotes ? (
          <OtherAuthorQuotes
            author={quote.quoteAuthor}
            quoteArr={quoteArr}
            displayQuotes={() => setDisplayQuotes(!displayQuotes)}
          />
        ) : (
          ""
        )}
      </div>
      {displayQuotes ? (
        ""
      ) : (
        <div>
          <div id="text">
            <Quote text={!quote.quoteText ? "loading..." : quote.quoteText} />
          </div>
          <div id="author">
            <Author
              author={quote.quoteAuthor}
              genre={quote.quoteGenre}
              displayQuotes={() => setDisplayQuotes(!displayQuotes)}
            />
          </div>
          <Buttons generateQuote={generateQuote} tweetLink={tweetLink} />
        </div>
      )}
    </div>
  );
};

export default QuoteBox;
