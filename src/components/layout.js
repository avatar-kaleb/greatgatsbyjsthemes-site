/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navigation from "./Navigation"
import CssBaseline from "@material-ui/core/CssBaseline"

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <Navigation>{children}</Navigation>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
