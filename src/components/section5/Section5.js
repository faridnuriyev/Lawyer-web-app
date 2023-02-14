import React from "react";
import './Section5.css'

function Section5() {
  return (
    <section className="sec-5">
      <div className="container">
        <div className="sec-5-content">
          <div className="sec-5-text">
            <h2>Get In Touch</h2>
            <p>
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="s-5-cards">
            <div className="s-5-card-1">
              <img src="assets/img/Vectorphone.png" alt="Phone" />
              <h6 className="s-5-card1-h6">georgia.young@example.com</h6>
              <h6 className="s-5-card1-h6">georgia.young@ple.com</h6>
              <h5>Get Support</h5>
              <button type="button" className="sec-5-btn-1">Submit Request</button>
            </div>
            <div className="s-5-card-2">
              <img src="assets/img/location.png" alt="Location" />
              <h6 className="s-5-card1-h6">georgia.young@example.com</h6>
              <h6 className="s-5-card1-h6">georgia.young@ple.com</h6>
              <h5>Get Support</h5>
              <button type="button" className="sec-5-btn-2">Submit Request</button>
            </div>
            <div className="s-5-card-3">
              <img src="assets/img/paperPlane.png" alt="Paper Plane" />
              <h6 className="s-5-card1-h6">georgia.young@example.com</h6>
              <h6 className="s-5-card1-h6">georgia.young@ple.com</h6>
              <h5>Get Support</h5>
              <button type="button" className="sec-5-btn-3">Submit Request</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
