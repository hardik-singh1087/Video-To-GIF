import React from "react";
import Header from "./Header";
import Inputfile from "./Inputfile";
import Convert from "./Convert";

function Home() {
  
  return (
    <div className="grid gap-6 align-center">
      <Header></Header>
      <Inputfile></Inputfile>
      <Convert></Convert>
    </div>
  );
}

export default Home;
