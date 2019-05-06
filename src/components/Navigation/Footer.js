import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

import NavButton from "../Buttons/NavButton"

const styles = theme => ({
  appBar: {
    bottom: 0,
    top: "auto",
  },
  subscribeButton: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  legalButton: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
})

const Footer = ({ classes }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        style={{ textAlign: "center" }}
      >
        {/* Could replace with logo */}
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" color="inherit" noWrap>
            KMK Studios LLC
          </Typography>
        </Grid>

        <Grid item xs={4} className={classes.subscribeButton}>
          <NavButton color="inherit" to={"/subscribe"} variant="outlined">
            subscribe
          </NavButton>
        </Grid>
        <Grid item xs={4} className={classes.legalButton}>
          <NavButton color="inherit" to={"/legal"} variant="outlined">
            legal
          </NavButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles, { withTheme: true })(Footer)
