import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header-wrapper">
    <div className="l-header landing-section">
      <a href="mailto:activateproinc@gmail.com">Contact the Organizers</a>
      <div>
        <a href="/">
          twitter svg
          <span class="t-hidden">Twitter</span>
        </a>
        <a href="/">
          instagrame svg
          <span class="t-hidden">Instagram</span>
        </a>
        <a href="/">
          linkedin svg
          <span class="t-hidden">LinkedIn</span>
        </a>
        <a href="/">
          facebook svg
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
