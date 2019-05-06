import React, { useEffect, useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { useThemesOnSnapshot } from "../../hooks/useThemes"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2,
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: "none",
  },
  media: {
    height: 140,
  },
})

const ThemeListing = ({ classes }) => {
  const [themes, setThemes] = useState([])

  // we set up an event listener here theme updates from firestore
  useEffect(() => {
    let unsubscribeFunc = null
    useThemesOnSnapshot(setThemes).then(
      unsubscribe => (unsubscribeFunc = unsubscribe)
    )

    // prevent leaks
    return function themeListingCleanUp() {
      unsubscribeFunc()
    }
  }, [])
  return themes.map((theme, index) => {
    const {
      category,
      demoUrl,
      description,
      githubUrl,
      imgUrl,
      npmUrl,
      starterUrl,
      tags,
      title,
    } = theme.data()

    return (
      <Grid key={`${title}-${index}`} item xs={12} sm={6} md={6} lg={4}>
        <Card elevation={12}>
          <CardHeader title={title} />
          <CardMedia className={classes.media} image={imgUrl} title={title} />
          <CardContent>
            <Typography component="p">{description}</Typography>
          </CardContent>
          <Divider />
          <CardActions disableActionSpacing>
            {githubUrl && (
              <a className={classes.link} href={githubUrl} target="_blank">
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  Github
                </Button>
              </a>
            )}
            {demoUrl && (
              <a className={classes.link} href={demoUrl} target="_blank">
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  Demo
                </Button>
              </a>
            )}
            {starterUrl && (
              <a className={classes.link} href={starterUrl} target="_blank">
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  Starter
                </Button>
              </a>
            )}
          </CardActions>
        </Card>
      </Grid>
    )
  })
}

export default withStyles(styles)(ThemeListing)
