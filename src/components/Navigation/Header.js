import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

import NavButton from "../Buttons/NavButton"

const NavigationItems = [
  {
    name: "blog",
    to: "/blog",
  },
  // {
  //   name: "about",
  //   to: "/about-us",
  // },
  {
    name: "themes",
    to: "/themes",
  },
]

const styles = theme => ({
  appBar: {
    top: 0,
    bottom: "auto",
  },
  content: {
    flexGrow: 1,
  },
  title: {
    borderRight: "3px white solid",
    paddingRight: theme.spacing.unit * 3,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  titleLink: {
    color: theme.palette.common.white,
    textDecoration: "unset",
  },
})

const Header = ({ classes }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Grid container direction="row" justify="space-between">
        {/* Could replace with logo */}
        <Link to="/" className={classes.titleLink}>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Great Gatsbyjs Themes
          </Typography>
        </Link>
        <div>
          {NavigationItems.map(({ name, to }) => (
            <NavButton color="inherit" key={name} to={to} variant="outlined">
              {name}
            </NavButton>
          ))}
        </div>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles, { withTheme: true })(Header)
