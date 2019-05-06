import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import ThemeListing from "../ThemeListing"

const styles = theme => ({
  pageWrapper: {
    width: "100%",
    margin: "0px",
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
})

const Themes = ({ classes }) => {
  return (
    <Grid
      className={classes.pageWrapper}
      container
      direction="row"
      spacing={24}
    >
      <ThemeListing />
    </Grid>
  )
}

export default withStyles(styles)(Themes)
