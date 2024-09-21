// eslint-disable-next-line react/prop-types
const Offer = ({ handleClose, handleAccepted }) => {
  const handleOutsideClick = (event) => {
    console.log(event.target.id);

    if (event.target.id === "offer-modal") {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      id="offer-modal"
      className="from-neutral-500 top-0 left-0 w-full h-screen fixed flex justify-center items-center z-10 bg-black bg-opacity-70"
    >
      <div className="bg-white rounded-lg p-4" id="offer-container">
        <div id="close-button-container">
          <button
            onClick={handleClose}
            className="rounded-lg font-semibold py-1"
            id="close-button"
          >
            ❌
          </button>
        </div>
        <div className="flex flex-col items-center" id="offer-content">
          <div className="text-lg my-8 w-72 text-center " id="offer">
            Click the button below to accept our amazing offer!
          </div>
          <button
            onClick={handleAccepted}
            id="accept-button"
            className="bg-indigo-500 text-white rounded-lg font-semibold py-1 px-2 w-1/2 text-lg hover:bg-indigo-700"
          >
            Accept offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
