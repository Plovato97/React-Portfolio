import React from 'react';
import { FaGithub, FaLinkedin, FaBehanceSquare, FaInstagram  } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/plovato97" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/paul-lovato-003531227/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/mightyline97/?hl=en" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;