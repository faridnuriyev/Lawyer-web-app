import React from "react";

function AdviceBox({title, desc, img, imgAlt}) {
  return (
    <div className="s-2-card-1">
      <h5 className="s-2-card1-h5">{title}</h5>
      <p>
        {desc}
      </p>
      <img src={img} alt={imgAlt} />
    </div>
  );
}

export default AdviceBox;
