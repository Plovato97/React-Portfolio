import React from 'react';
import { FaGithub } from "react-icons/fa";

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
        </ul>
      </footer>
    </div>
  );
};

export default Footer;