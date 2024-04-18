import React from "react";

import "./DisplayCard.css";
import data from "../../Assets/Data/Data";
import Actionbar from "../Actionbar/Actionbar";

const DisplayCard = () => {
  return (
    <div className="displaycard">
      <div className="displaycard-banner">
        <img src={data[0].img_url} alt="displaycard banner" />
      </div>
      <div className="watching-now">{data[0].watching_now} people watching</div>
      <div className="displaycard-year-and-title">
        <div className="displaycard-title">{data[0].title}</div>
        <div className="displaycard-year">{data[0].year}</div>
      </div>
      <Actionbar />
    </div>
  );
};

export default DisplayCard;
