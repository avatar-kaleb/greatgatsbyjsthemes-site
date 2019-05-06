import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import { pageWrapperTopMargin } from "../../constants/styles"
import GradientCta from "./GradientCta"
import CardsSection from "./CardsSection"
import PostsAndVideos from "./PostsAndVideos"

const styles = theme => ({
  pageWrapper: {
    marginTop: pageWrapperTopMargin.DEFAULT,
    [theme.breakpoints.down("md")]: {
      marginTop: pageWrapperTopMargin.SMALL,
    },
  },
})

const Home = ({ classes }) => (
  <Grid container className={classes.pageWrapper}>
    <GradientCta />
    <CardsSection />
    <PostsAndVideos />
  </Grid>
)

export default withStyles(styles)(Home)
