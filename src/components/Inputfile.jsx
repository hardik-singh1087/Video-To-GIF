import React from "react";
import { useState } from "react";

function Inputfile() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className=" flex justify-center ">
      <div className="grid gap-2">
        <div className="outline-dashed w-96 p-2 rounded-md flex gap-2">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="bg-green-600 text-white font-medium w-22 p-0.5 h rounded-md hover:bg-green-700 transition"
          ></input>

          <p className="text-green-600 truncate max-w-[250px] p-0.5 overflow-hidden whitespace-nowrap">
            {videoFile ? videoFile.name : "No file choosen"}
          </p>
        </div>
        <div className="flex justify-center">
          {videoPreview ? (
            <video key={videoPreview} controls width="200" h="100">
              <source src={videoPreview} type={videoFile.type} />
            </video>
          ) : (
            "No preview available!"
          )}
        </div>
      </div>
    </div>
  );
}

export default Inputfile;
