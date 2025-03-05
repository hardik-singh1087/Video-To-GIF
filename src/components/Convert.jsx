import React from "react";
import { useNavigate } from "react-router-dom";

function Convert() {
  const navigate = useNavigate(); 

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-600 transition"
        onClick={() => navigate("/result")} 
      >
        Convert To GIF
      </button>
    </div>
  );
}

export default Convert;