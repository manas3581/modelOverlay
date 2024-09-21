import Offer from "./Offer";
import { useState } from "react";

function App() {
  const [showOffer, setShowOffer] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const handleClick = () => {
    setShowOffer(true);
  };

  const handleClose = () => {
    setShowOffer(false);
};

  const handleAccepted = () => {
    setAccepted(true);
    setShowOffer(false);
  };

  const handleOuter = () => {setAccepted(false);}

  return (
    <div>
      <div className="h-screen flex justify-center items-center" id="app-container">
      {!accepted && <button
         
          onClick={handleClick}
          className="h-16 w-40 bg-indigo-500 text-white rounded-lg font-semibold text-xl"
        >
          Show Offer
        </button>}

        {accepted && 
        <div 
        id="offer-accepted"
        onClick={handleOuter}
        className="bg-cyan-200 text-gray-900 rounded-lg font-semibold text-3xl py-2 px-3">Offer Accepted!</div>}
      </div>

      {showOffer && <Offer handleClose={handleClose} handleAccepted={handleAccepted}/>}
    </div>
  );
}

export default App;
