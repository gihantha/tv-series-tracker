import React from "react";

import "./Sidebar.css";
import next_page_button_icon from "../../Assets/next page.png";
import filter_button_icon from "../../Assets/filter button.png";
import advanced_button_icon from "../../Assets/advanced icon.png";
import sidebar_poster from "../../Assets/joker.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p>TV Shows</p>
        {/* <div className="sidebar-action-buttons"> */}
          <div className="next-page-button">
            <img src={next_page_button_icon} alt="Next Page Button Icon" />
          </div>
          <div className="filter-button">
            <img src={filter_button_icon} alt="Filter Button Icon" />
          </div>
          <div className="advanced-button">
            <img src={advanced_button_icon} alt="Advanced Button Icon" />
          </div>
        {/* </div> */}
      </div>
      <p>There are 4,021 people watching 1,336 shows right now!</p>
      <div className="sidebar-menu">
        <ul>
          <li>Trending</li>
          <li>Popular</li>
          <li>Favourited</li>
          <li>Watched</li>
          <li>Collected</li>
          <li>Anticipated</li>
        </ul>
      </div>
      <div className="sidebar-img">
        <img src={sidebar_poster} alt="sidebar poster" />
      </div>
    </div>
  );
};

export default Sidebar;
