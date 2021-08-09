import { IoClose } from "react-icons/io5";

const OtherAuthorQuotes = ({ author, quoteArr, displayQuotes }) => {
  const styles = {
    position: "absolute",
    right: "2.5rem",
    top: "0px",
  };
  return (
    <div className="shadow-2xl p-12 bg-white">
      <h2 className="text-xl font-bold mb-5">Quotes by {author}</h2>
      <div className="" style={styles}>
        <button
          onClick={displayQuotes}
          className="flex items-center justify-center absolute bg-yellow-400 h-10 w-10 hover:bg-yellow-700 transition hover:text-white"
        >
          <IoClose />
        </button>
      </div>
      <div
        className="overflow-y-scroll h-96"
      >
        <ul>
          {quoteArr.map((quote, i) => {
            return (
              <li key={i} className="mb-5 ml-5">
                "{quote.quoteText}"
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OtherAuthorQuotes;
