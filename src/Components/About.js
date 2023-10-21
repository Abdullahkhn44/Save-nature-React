import React from "react";
import "../Components/About.css";

function About() {
  return (
    <div>
      <div className="About-container">
        <div className="About-image">
          <img
            className="image"
            src={require("../Assets/Pics/About.png")}
            alt="About"
          ></img>
        </div>
        <div className="About-text">
          <h1 className="heading">About Us</h1>
          <p className="para">
            Welcome to our site! we are a fast growing <b>NGO</b> working for
            the <b>betterment</b> of the Earth and Nature, you can see more
            about our activities and our services on our services section or by
            just clicking the below button
          </p>
          <button className="Services-button">Services</button>
        </div>
      </div>
    </div>
  );
}

export default About;
