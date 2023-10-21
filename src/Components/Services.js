import React from "react";
import "../Components/Services.css";

function Services() {
  return (
    <div>
      <div className="Services-container">
        <div className="Title">
          <h1>Our Services</h1>
        </div>

        <div className="Images">
          
          <img
            className="plant"
            src={require("../Assets/Pics/Plantation.png")}
            alt="Plantation"
          ></img>
         

          <img
            className="recycle"
            src={require("../Assets/Pics/Recycle.png")}
            alt="Recycling"
          ></img>

          <img
            className="planttwo"
            src={require("../Assets/Pics/Plantation.png")}
            alt="Decarbon"
          ></img>
        </div>
        <div className="image-text">
          <p className="textone">Plantation Drives</p>
          <p className="textone">Recycling</p>
          <p className="textone" >Decarbonization</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
