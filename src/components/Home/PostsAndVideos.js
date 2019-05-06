import React from "react"
import YouTube from "react-youtube"
import { withStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
const opts = {
  height: "300px",
  width: "90%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
}

const styles = theme => ({
  gradient: {
    background: `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${
      theme.palette.secondary.light
    } 100%)`,
    minHeight: "85vh",
    textAlign: "center",
    padding: theme.spacing.unit * 3,
  },
  themesGridItem: {
    textAlign: "center",
    marginBottom: theme.spacing.unit * 7,
  },
  themesHeading: {
    color: theme.palette.primary.contrastText,
  },
  themesParagraph: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing.unit * 2,
  },
  themesParagraphTwo: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing.unit / 2,
  },
})

const PostsAndVideos = ({ classes }) => {
  return (
    <Grid
      className={classes.gradient}
      container
      direction="row"
      justify="space-evenly"
      alignContent="center"
      spacing={24}
    >
      <Grid className={classes.themesGridItem} item xs={10}>
        <Typography
          className={classes.themesHeading}
          variant="h2"
          color="default"
        >
          Gatsby Themes!
        </Typography>

        <Typography
          className={classes.themesParagraph}
          component="p"
          color="default"
        >
          Gatsby themes are an experimental, yet monumental new feature of the
          static site generator framework.
        </Typography>
        <Typography
          component="p"
          color="default"
          className={classes.themesParagraphTwo}
        >
          The features all look promising, with even more coming! Here are two
          intro videos from the Gatsby team to learn more!!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div>
          <YouTube videoId="wX84vXBpMR8" opts={opts} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div>
          <YouTube videoId="PS2784YfPpw" opts={opts} />
        </div>
      </Grid>
    </Grid>
  )
}
export default withStyles(styles)(PostsAndVideos)
