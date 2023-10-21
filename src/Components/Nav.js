import React, { useState } from "react";
import "../Components/Nav.css";

export default function Nav() {
  const [box, setBox] = useState(false);

  const menuButton = () => {
    setBox(!box);
  };

  return (
    <div className="body">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <h3>Saving Nature</h3>
          </div>

          <div className="nav-elements">
            <ul>
              <li>
                <a className="active" href="/Home">
                  Home
                </a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>

            <div className="Menu-button">
              <button className="M-button" onClick={menuButton}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={box ? "display-inline" : "display-none"}>
        <div className="main-box">
          <div className="nav-menu">
            <ul>
              <li>
                <a className="active" href="/Home">
                  Home
                </a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Services">Services</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
