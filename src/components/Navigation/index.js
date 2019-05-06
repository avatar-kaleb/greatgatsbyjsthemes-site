import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

import { pageWrapperTopMargin } from "../../constants/styles"
import Header from "./Header"
import Footer from "./Footer"

const styles = theme => ({
  content: {
    flexGrow: 1,
    marginBottom: `${pageWrapperTopMargin.LARGE}px`,
    marginTop: `${pageWrapperTopMargin.LARGE}px`,
    minHeight: `calc(100vh - ${pageWrapperTopMargin.LARGE * 1.8}px)`,
    [theme.breakpoints.down("lg")]: {
      marginBottom: `${pageWrapperTopMargin.LARGE}px`,
      marginTop: `${pageWrapperTopMargin.LARGE}px`,
      minHeight: `calc(100vh - ${pageWrapperTopMargin.LARGE * 2}px)`,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: `${pageWrapperTopMargin.LARGE}px`,
      marginTop: `${pageWrapperTopMargin.LARGE}px,`,
      minHeight: `calc(100vh - ${pageWrapperTopMargin.LARGE * 2}px)`,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: `${pageWrapperTopMargin.MEDIUM}px`,
      marginTop: `${pageWrapperTopMargin.MEDIUM}px`,
      minHeight: `calc(100vh - ${pageWrapperTopMargin.MEDIUM * 2}px)`,
    },
  },
  gradient: {
    background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${
      theme.palette.primary.dark
    } 50%, ${theme.palette.secondary.light} 100%)`,
  },
})

class Navigation extends React.Component {
  render() {
    const { classes, children } = this.props

    return (
      <>
        <Header />
        <main className={`${classes.content} ${classes.gradient}`}>
          {children}
        </main>
        <Footer />
      </>
    )
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigation)
