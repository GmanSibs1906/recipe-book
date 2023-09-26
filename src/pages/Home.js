import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
      <Link to="/recipieList" >
      <div className="buttonContainer">
        <button>View Recipies</button>
      </div>
      </Link>
    </div>
  );
}

export default Home;
