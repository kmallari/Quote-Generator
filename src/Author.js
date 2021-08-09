import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Author = ({ author, genre, displayQuotes }) => {
  const [visibility, setVisibility] = useState(0);

  genre = genre.charAt(0).toUpperCase() + genre.slice(1);
  return (
    <div
      className="relative -ml-6 left-7 md:left-12 lg:left-22 mt-10 hover:bg-gray-700 hover:text-white transition-all p-5 cursor-pointer transform hover:translate-x-6 flex flex-row items-center justify-between"
      onMouseEnter={() => setVisibility(100)}
      onMouseLeave={() => setVisibility(0)}
      onClick={displayQuotes}
    >
      <div>
        <h2 className="font-semibold text-xl">{author}</h2>
        <h3 className="font-normal">{genre}</h3>
      </div>

      <div
        className={`flex flex-row items-center text-white transition-all opacity-${visibility}`}
      >
        <h3 className="font-normal mr-2">Other quotes</h3>
        <FiArrowRight />
      </div>
    </div>
  );
};

export default Author;
