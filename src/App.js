import QuoteBox from "./QuoteBox";
import "./App.css";
import { bgStyle } from "./bgStyle";

function App() {
  return (
    <div style={bgStyle} className="w-full h-screen">
      <div className="flex justify-center item-center flex-col w-4/5 lg:w-1/2 m-auto pt-10 lg:pt-28 font-work-sans">
        <QuoteBox />
      </div>
    </div>
  );
}

export default App;
