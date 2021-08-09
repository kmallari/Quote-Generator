import { FiTwitter } from "react-icons/fi";

const Buttons = ({ generateQuote, tweetLink }) => {
  return (
    <div className="relative left-7 md:left-12 lg:left-22 mt-4 flex flex-row">
      <button
        id="new-quote"
        onClick={generateQuote}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-normal py-2 px-4 mt-5 rounded-none transition-all ease-in-out transform hover:-translate-y-1"
      >
        Generate
      </button>
      <a href={tweetLink} rel="noreferrer" target="_blank">
        <button
          id="tweet-quote"
          className="bg-transparent border-2 text-yellow-400 border-yellow-400 font-normal py-2 px-4 mt-5 rounded-none transition-all ease-in-out hover:bg-yellow-600 hover:bg-opacity-5 transform hover:-translate-y-1   hover:text-yellow-500 ml-5 flex flex-row items-center"
        >
          <span className="mr-2">
            <FiTwitter />
          </span>
          Twitter
        </button>
      </a>
    </div>
  );
};

export default Buttons;
