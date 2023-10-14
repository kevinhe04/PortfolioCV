import React from "react";

function Buttonf({ buttonText, onClick }) {
  return (
    <button className="bg-white hover:bg-sky-700 border-blue-500 border-4 font-sans text-black font-semibold text-4xl p-4" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Buttonf;