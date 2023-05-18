import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <header
        style={{
          backgroundImage:
            `url('${require('../assets/paladins.b44d33d6e7ee1ba8.png')}')`,
        }}
      >
        <div className="layer " style={{backgroundColor:'#1c1e223d'}}>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="main-title p-5">
            <h1>
              Find & track the best{" "}
              <span className="text-primary">free-to-play</span> games!
            </h1>
            <p className="text-center">
              Track what you've played and search for what to play next! Plus
              get free premium loot!
            </p>
            <Link
              to="/all"
              className="btn btn-outline-secondary text-white d-block m-auto w-25"
            >
              Browse Games
            </Link>
          </div>
        </div>
        </div>
      </header>

     
    </>
  );
}

export default Home;
