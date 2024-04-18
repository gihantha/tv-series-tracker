import React from "react";

import "./Actionbar.css";
import data from "../../Assets/Data/Data";
import add_to_watch from "../../Assets/add_to_watch.png";
import add_to_collection from "../../Assets/add_to_collection.png";
import add_to_list from "../../Assets/add_to_list.jpg";
import add_to_favourite from "../../Assets/star.png";
import watch_now from "../../Assets/play.png";
import rate_this from "../../Assets/heart.png";

const Actionbar = ({rating}) => {
  return (
    <div className="actionbar">
      <>
      <div className="add-to-watch">
        <img src={add_to_watch} alt="add to watch icon" />
      </div>
      <div className="add-to-collection">
        <img src={add_to_collection} alt="add to collection icon" />
      </div>
      <div className="add-to-list">
        <img src={add_to_list} alt="add to list icon" />
      </div>
      <div className="add-to-favourite">
        <img src={add_to_favourite} alt="add to favourite icon" />
      </div>
      <div className="watch-now">
        <img src={watch_now} alt="watch now icon" />
      </div>
      </>
      <div className="rate-this">
        <div className="rate-this-info">
          <img src={rate_this} alt="rate this icon" />
          {rating}
        </div>
      </div>
    </div>
  );
};

export default Actionbar;
