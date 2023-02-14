import React from "react";
import "./Section3.css";

function Section3() {
  return (
    <section className="sec-3">
      <div className="container" >
        <div className="sec-3-content" >
          <div className="sec-3-text" >
            <h2>Who We Are</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="sec-3-article">
            <div className="sec-3-video" >
              <div className="videoBG" >
                <span className="playCircle">
                  <img src="assets/img/playBtn.png" alt="" />
                </span>
              </div>
            </div>

            <div className="sec-3-card-text" >
              <h2>Most trusted in our field</h2>
              <p>
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </p>
              <div className="sec-3-card-icon1">
                <img src="assets/img/vector1.png" alt="icon1" />
                <div className="sec-3-icon-1-text">
                  <h5>the quick fox jumps over the lazy dog</h5>
                  <h6>Things on a very small scale ...</h6>
                </div>
              </div>
              <div className="sec-3-card-icon2">
                <img src="assets/img/vector2.png" alt="icon2" />
                <div className="sec-3-icon-2-text">
                  <h5>the quick fox jumps over the lazy dog</h5>
                  <h6>Things on a very small scale ...</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
