import React from "react";
import "../Components/Banner.css";

function Banner() {
  return (
    <div>
      <div className="Hero">
        <div className="name">
          <h1 className="name-text">Saving Nature</h1>
          <p className="Bpara">
            There is no place to live other than Earth, <b>save the Earth!</b>
          </p>
          <button className="Learn-button">Learn More</button>
        </div>
        <div className="image-div">
          <img
            className="Banner"
            src={require("../Assets/Pics/Nature.png")}
            alt="Banner"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Banner;
