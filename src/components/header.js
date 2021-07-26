import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Example from "./styledHeader";

const Header = ({ siteTitle }) => (
  <header>
      <Example/>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
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
