import React from "react";
import "../Components/Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-heading">
          <h1 className="save">Save Nature</h1>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">About</a>
            </li>
            <li>
              {" "}
              <a href="/">Services</a>
            </li>
            <li>
              {" "}
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="icons">
          <SocialIcon bgColor="black" fgColor="	#1877F2" className="Sicon" url="https://facebook.com" />
          <SocialIcon bgColor="black" fgColor="#E1306C" className="Sicon" url="https://instagram.com" />
          <SocialIcon bgColor="black" className="Sicon" url="https://x.com" />
          <SocialIcon bgColor="black" fgColor="#FF0000" className="Sicon" url="https://youtube.com" />
          <SocialIcon bgColor="black" fgColor="#24A1DE" className="Sicon" url="https://telegram.com" />
          <SocialIcon bgColor="black" className="Sicon" url="https://savenature.com" />
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
