import React from "react";
import "./Header.css";
import Nav from "../nav/Nav";

function Header() {
  let path = 'assets/img/'
  let img = 'agent.png'
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Nav />
          <div className="header-container">
            <div className="header-left-sec">
              <h1>Help to reclaim your life and freedom </h1>
              <h4>
                We know how large objects will act,but things on a small scale.
              </h4>
              <div className="header-btn-group">
                <button className="h-first-btn">Get Quote Now</button>
                <button className="h-second-btn">Learn More</button>
              </div>
            </div>
            <div className="header-right-sec">
              <img src={path + img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
