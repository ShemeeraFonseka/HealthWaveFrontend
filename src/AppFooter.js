import { Typography, Row, Col } from "antd";
import { YoutubeOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import './AppFooter.css';
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function AppFooter() {
  return (
    <div className="AppFooter">

      <div className="left">
        <p><strong>Health Wave Private Limited</strong></p>
        <p>@ All Rights Reserved</p>

      </div>

      <div className="middle">
        <p><strong>Know Us</strong></p>
        <ul className="unorderlist">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
        </ul>
      </div>

      <div className="middle">
        <p><strong>Services</strong></p>
        <ul className="unorderlist">
          <li>Medical History</li>
          <li>Chat with doctor</li>
          <li>View Reports</li>
        </ul>
      </div>


      <div className="right">

        <p><strong>Get in Touch</strong></p>
        <ul className="unorderlist">
          <li>Contact Us: 077935325425</li>
          <li>Email:healthwave@gmail.com</li>
        </ul>
      </div>

      <div className="last">
        <FaYoutube className="youtube" />
        <FaFacebookSquare className="facebook" />
        <FaInstagram className="instagram" />
      </div>


    </div>
  );
}

export default AppFooter;