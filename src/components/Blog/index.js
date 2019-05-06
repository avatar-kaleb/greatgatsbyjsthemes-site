import React from "react"
import { withStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import { pageWrapperTopMargin } from "../../constants/styles"
import PostListing from "../PostListing/PostListing"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2,
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: "none",
  },
  pageWrapper: {
    width: "100%",
    margin: "0px",
    marginTop: pageWrapperTopMargin.DEFAULT,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down("md")]: {
      marginTop: pageWrapperTopMargin.SMALL,
    },
  },
})

const Blog = ({ classes, postEdges }) => {
  return (
    <Grid
      className={classes.pageWrapper}
      container
      direction="row"
      spacing={24}
      justify="space-between"
    >
      <PostListing postEdges={postEdges} />
    </Grid>
  )
}

export default withStyles(styles)(Blog)
