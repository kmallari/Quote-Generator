const Quote = ({ text }) => {
  return (
    <div>
      <h1 className="text-gray-900 text-2xl leading-relaxed lg:text-3xl xl:text-4xl xl:leading-relaxed lg:leading-normal md:leading-relaxed font-work-sans font-semibold pl-5 md:pl-10 lg:pl-20 border-l-6 border-yellow-400">
        "{text}"
      </h1>
    </div>
  );
};

export default Quote;
