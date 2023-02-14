import React from "react";
import "./Section4.css";

function Section4() {
  return (
    <>
      <section className="sec-4">
        <div className="container">
          <div className="sec-4-content">
            <div className="sec-4-icons">
              <img src="assets/img/hooli.png" alt="hooli" />
              <img src="assets/img/lyft.png" alt="lyft" />
              <img src="assets/img/piper-hat.png" alt="piper-hat" />
              <img src="assets/img/stripe.png" alt="stripe" />
              <img src="assets/img/aws.png" alt="aws" />
              <img src="assets/img/alien.png" alt="alien" />
            </div>
            <div className="sec-4-subscribe-container">
              <div className="sec-4-subscribe">
                <h3>Subscribe For Latest Newsletter</h3>
                <div className="subscribe-inpt">
                  <input type="text" placeholder="Your Email" />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sec-4-subscribe-desktop-bg"></div>
    </>
  );
}

export default Section4;
