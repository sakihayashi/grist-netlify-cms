import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/grist_logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="container max-width-2000 flexSpaceBet">
          <div className="content leftDiv">
            <img
              src={logo}
              alt="Grist"
              style={{ width: "150px", height: "auto" }}
            />
            <p>Grist Labs is a New York-based startup reimagining software to manage data.</p>
          </div>
          <div className="rightDiv">
            <p>Privacy & terms</p>
            <p>© 2021 Grist Labs. All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
