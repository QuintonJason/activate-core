import PropTypes from "prop-types"
import React from "react"

import TwitterIcon from "../images/Twitter"
import FacebookIcon from "../images/Facebook"
import InstagramIcon from "../images/Instagram"
import LinkedinIcon from "../images/Linkedin"

const Header = ({ siteTitle }) => (
  <header className="header-wrapper">
    <div className="l-header landing__section">
      <a href="mailto:activateproinc@gmail.com" class="landing__contact-email">Contact the Organizers</a>
      <div class="header-links">
        <a class="header-link" href="/">
          <TwitterIcon />
          <span class="t-hidden">Twitter</span>
        </a>
        <a class="header-link" href="/">
          <InstagramIcon />
          <span class="t-hidden">Instagram</span>
        </a>
        <a class="header-link" href="/">
          <LinkedinIcon />
          <span class="t-hidden">LinkedIn</span>
        </a>
        <a class="header-link" href="/">
          <FacebookIcon />
          <span class="t-hidden">Facebook</span>
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
