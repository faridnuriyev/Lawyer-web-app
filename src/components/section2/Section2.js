import React from "react";
import AdviceBox from "../AdviceBox";
import "./Section2.css";

function Section2() {
  return (
    <section className="sec-2">
      <div className="container">
        <div className="sec-2-content">
          <div className="sec2-text">
            <h2>Practice Advice</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="s-2-cards">
            <AdviceBox
              title={"Frauds or Mislead"}
              desc={
                "Newton thought that light was made up of particles, but then it was discovered "
              }
              img={"assets/img/sec2-card1.jpg"}
              imgAlt={"Family Law"}
            />
            <AdviceBox
              title={"Bailes & Warrants"}
              desc={
                "“Quantum mechanics” is the description of the behaviour of matter"
              }
              img={"assets/img/sec2-card2.jpg"}
              imgAlt={"Family Law"}
            />
            <AdviceBox
              title={"Federal Drug Crimes"}
              desc={"They describe a universe consisting of bodies moving"}
              img={"assets/img/sec2-card3.jpg"}
              imgAlt={"Family Law"}
            />
            <AdviceBox
              title={"Traffic Related Crimes"}
              desc={
                "They finally obtained a consistent description of the behaviour"
              }
              img={"assets/img/sec2-card4.jpg"}
              imgAlt={"Family Law"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;

// import React from "react";
// import "./Section2.css";

// function Section2() {
//   return (
//     <div className="sec-2">
//       <div className="sec-2-content">

//         <AdviceBox text={""} img={""} />
//         <AdviceBox text={""} img={""} />
//         <AdviceBox text={""} img={""} />
//         <AdviceBox text={""} img={""} />

//         <div className="sec2-text">
//           <h2>Practice Advice</h2>
//           <p>
//             Problems trying to resolve the conflict between the two major realms
//             of Classical physics: Newtonian mechanics
//           </p>
//         </div>
//         <div className="s-2-cards">
//           <div className="s-2-card-1">
//             <h5 className="s-2-card1-h5">Frauds or Mislead</h5>
//             <p>
//               Newton thought that light was made up of particles, but then it
//               was discovered
//             </p>
//             <img src="assets/img/sec2-card1.jpg" alt="Family Law" />
//           </div>
//           <div className="s-2-card-2">
//             <h5 className="s-2-card2-h5">Bailes & Warrants</h5>
//             <p>
//               “Quantum mechanics” is the description of the behaviour of matter
//             </p>
//             <img src="assets/img/sec2-card2.jpg" alt="Family Law" />
//           </div>
//           <div className="s-2-card-3">
//             <h5 className="s-2-card3-h5">Federal Drug Crimes</h5>
//             <p>They describe a universe consisting of bodies moving</p>
//             <img src="assets/img/sec2-card3.jpg" alt="Family Law" />
//           </div>
//           <div className="s-2-card-4">
//             <h5 className="s-2-card4-h5">Traffic Related Crimes</h5>
//             <p>
//               They finally obtained a consistent description of the behaviour
//             </p>
//             <img src="assets/img/sec2-card4.jpg" alt="Family Law" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section2;
