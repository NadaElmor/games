import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactSlider from "react-slider";
import Slider from "react-slick";
import Loadindscreen from "../LoadingScreen/Loadindscreen";

function GameDetails(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [game, setgame] = useState(null);
  const [screenshots, setScreenshots] = useState(null);
  const { id } = useParams();
  
  async function getGameDetails() {
    try {
      const { data } = await axios.get(
        " https://free-to-play-games-database.p.rapidapi.com/api/game",
        {
          headers: {
            "X-RapidAPI-Key":
              "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
          params: {
            id: id,
          },
        }
       
      );
      console.log(data);
      setgame(data);
      setScreenshots(data.screenshots);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(function () {
    getGameDetails(1);
  }, []);
  return (
    <>
      {game ? (
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <div className="card-body">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-100  rounded-2"
                  />
                  <Link
                    role="button"
                    to={game.freetogame_profile_url}
                    target="_blank"
                    className=" btn btn-primary my-3 text-white w-100  text-center"
                  >
                    Play Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="item">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="py-3">
                  {game.minimum_system_requirements ? (
                    <>
                      {" "}
                      <h3>Minimum System Requirements</h3>
                      <ul className="list-unstyled">
                        <li>os : {game.minimum_system_requirements?.os}</li>
                        <li>
                          processor:{" "}
                          {game.minimum_system_requirements?.processor}
                        </li>
                        <li>
                          memory : {game.minimum_system_requirements?.memory}{" "}
                        </li>
                        <li>
                          Graphics :{" "}
                          {game.minimum_system_requirements?.graphics}{" "}
                        </li>
                        <li>
                          Graphics :{" "}
                          {game.minimum_system_requirements?.graphics}{" "}
                        </li>
                      </ul>{" "}
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="py-3">
                  <h3>{game.title} screenshots</h3>
                  <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
         {screenshots?screenshots.map(function(screenshot,indx){
            return <div className="image" key={indx}>
                <img src={screenshot.image} alt="screen shots of games" className="w-100" />
            </div>
         }):''}
        </Slider>
      </div>
                </div>
                <div className="py-3">
                  <h3>Additional Information</h3>
                  <div className="row py-2">
                    <div className="col-md-4">
                      <div className="item">
                        <h5>Title</h5>
                        <p>{game.title}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <h5>Developer</h5>
                        <p>{game.developer}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <h5>Publisher</h5>
                        <p>{game.publisher}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <h5>release Date</h5>
                        <p>{game.release_date}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <h5>Genre</h5>
                        <p>{game.genre}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <h5>Platform</h5>
                        <p>{game.platform}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loadindscreen/>
      )}
    </>
  );
}

export default GameDetails;
