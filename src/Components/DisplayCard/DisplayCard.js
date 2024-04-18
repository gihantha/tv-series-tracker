import React from "react";

import "./DisplayCard.css";
import data from "../../Assets/Data/Data";
import Actionbar from "../Actionbar/Actionbar";

const DisplayCard = () => {
  return (
    <div className="displaycard">
      {data.map((data) => (
        <>
          <div className="displaycard-banner">
            <img src={data.img_url} alt="displaycard banner" />
          </div>
          <div className="watching-now">
            {data.watching_now} people watching
          </div>
          <div className="displaycard-year-and-title">
            <div className="displaycard-title">{data.title}</div>
            <div className="displaycard-year">{data.year}</div>
          </div>
          <Actionbar  rating={data.rating}/>
        </>
      ))}
    </div>
  );
};

export default DisplayCard;
