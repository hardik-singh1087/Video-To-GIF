import React from "react";
import Download from "./Download";

function Resultgif() {
  return (
    <div className="flex justify-center p-20">
      <div className="grid gap-4">
        <div className="outline-dashed w-96 h-100">this is the result box.</div>
        <Download></Download>
      </div>
    </div>
  );
}

export default Resultgif;
