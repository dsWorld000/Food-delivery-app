import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            fugiat doloremque, accusantium rerum illo atque culpa possimus
            deleniti quam inventore! Inventore!
          </p>
          <div className="footer-social-icons">
            <Link to="https://www.facebook.com/share/b8ne1KfX8MUYczyy/?mibextid=qi2Omg">
              <img src={assets.facebook_icon} alt="" />
            </Link>
            <Link to="https://x.com/dsrajput01?t=hJPAmKrYNuRlK8n1oWm7_w&s=08">
              {" "}
              <img src={assets.twitter_icon} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/in/deepaksingh14th?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9306487410</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
