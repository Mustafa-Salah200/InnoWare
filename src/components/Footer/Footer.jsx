import "./Footer.css";
import facebook from "../../assets/facebook2.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul>
          <h2>
            <img src={logo} alt="" />
          </h2>
          <p>2025 innoWare, India, inc.</p>
          <p>All Rights Reserved</p>
        </ul>

        <ul>
          <h2>Home</h2>
          <li>Courses</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>

        <ul>
          <h2>Tech on InnoWare</h2>
          <li>Help and Support</li>
          <li>Privacy policy</li>
          <li>Sitemap</li>
        </ul>

        <ul>
          <h2>Follow Us</h2>

          <div className="follow">
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
