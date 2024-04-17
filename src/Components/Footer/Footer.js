import React from "react";

import android_icon from "../../Assets/android icon.jpg";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-menu w-7/8">
          <ul>
            <li>About</li>
            <li>Activate Device</li>
            <li>Blog</li>
            <li>Forums</li>
            <li>Branding</li>
            <li>API</li>
            <li>Create an app</li>
            <li>Import Movie</li>
            <li>Import Tv Show</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-contact-us w-1/8">
          <div className="android1">
            <img src={android_icon} alt="android icon1" />
          </div>
          <div className="android2">
            <img src={android_icon} alt="android icon2" />
          </div>
          <div className="android3">
            <img src={android_icon} alt="android icon3" />
          </div>
          <div className="android4">
            <img src={android_icon} alt="android icon4" />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© Gihantha Kaveen, inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
