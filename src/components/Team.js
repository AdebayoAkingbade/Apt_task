import React from "react";
import "./Team.css";
import Fade from "react-reveal/Fade";
import CoinPort from "../assets/coin-pot.svg";
import Group from "../assets/Group2.svg";
import Vector from "../assets/vector.png";
import Left from "../assets/coin-left.svg";
import Right from "../assets/coin-right.svg";
import White from "../assets/white_star.png";
import Yellow from "../assets/yellow_star.png";
import Stars from "../assets/stars.png";
import Calender from "../assets/calender.png";
import Logo from "../assets/logo.png"



function Team() {
  return (
    <div className="team-body">
      <div className="icon-container">
        <div className="left-icon">
          <img src={Logo} alt="" />
        </div>
        <div className="right-icon">
          <img src={Calender} alt="" />
        </div>
      </div>
      <div className="star-icon">
        <img src={Stars} alt="" />
      </div>

      <div className="container">
        <Fade bottom>
          <div className="text-body">
            <h3>Unlock to</h3>
            <h2>Power your dreams!</h2>
          </div>
        </Fade>
        <Fade bottom>
          <div className="text-container">
            <p className="team-para">
              stand a chance to win
              <br />
              N3,000,000 everyday for the next 5days
            </p>
          </div>
        </Fade>
        <img src={White} alt="" className="yellow-star"  />
            <img src={Yellow} alt="" />

        <div className="card">
          <h3>🚀 How To Play</h3>
          <ol>
            <li>Guess the right combination of numbers </li>
            <li>Win N3,000,000 instantly</li>
          </ol>
          <p>Sound unbelievable? well guess right & see for yourself!</p>
          <div className="card2">
            <p>
              💡Think well before you guess, You can only have 2 attempts per
              <br />
              day and even after you win, you can come back the next day
              <br />
              to try for another jackpot
            </p>
          </div>
        </div>
        <img src={Right} alt="" className="coin-right" />
        <img src={Left} alt="" className="coin-left" />
        <button className="button">
          Play The Game{" "}
          <img src={Vector} alt="" className="arrow-image" />
        </button>
        <div className="image-container">
          <div className="star-image">
          </div>
          <figure className="coin-pot">
            <img src={CoinPort} alt="" className="pot-image"  />
          </figure>
          <div
            className=""
            style={{
              position: "absolute",
              bottom: "0",
              overflow: "hidden",
            }}
          >
            <img className="rotateLightBeam" src={Group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
