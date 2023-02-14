import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <section className="sec-1">
      <div className="container">
        <div className="sec-1-content">
          <div className="sec1-text">
            <h2>Our Practice Areas</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="s-1-cards">
            <div className="s-1-card-1">
              <img src="assets/img/scales-icn.png" alt="Family Law" />
              <h5 className="s-1-card1-h5">Family Law</h5>
            </div>
            <div className="s-1-card-2">
              <img src="assets/img/hammer-icn.png" alt="Business Law" />
              <h5 className="s-1-card2-h5">Business Law</h5>
            </div>
            <div className="s-1-card-3">
              <img src="assets/img/list-icn.png" alt="Trust & Estates" />
              <h5 className="s-1-card3-h5">Trust & Estates</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
