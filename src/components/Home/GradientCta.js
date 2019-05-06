import React from "react"
import { withStyles } from "@material-ui/core/styles"

import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import BusinessLandingPageImage from "../images/businessLandingPageImage"
import Grid from "@material-ui/core/Grid"
import NavButton from "../Buttons/NavButton"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit * 5,
  },
  gradient: {
    background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${
      theme.palette.primary.light
    } 100%)`,
    minHeight: "85vh",
    textAlign: "center",
  },
  headline: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing.unit,
  },
  businessImageGrid: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  tagline: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing.unit / 3,
    marginBottom: theme.spacing.unit,
  },
})

const GradientCta = ({ classes }) => {
  return (
    <Grid
      className={classes.gradient}
      container
      direction="row"
      spacing={24}
      justify="center"
      alignContent="center"
    >
      <Grid
        item
        xs={10}
        sm={8}
        md={6}
        lg={4}
        xl={4}
        className={classes.businessImageGrid}
      >
        <BusinessLandingPageImage />
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.headline} variant="h3" color="default">
          Fast Websites Made Fast!
        </Typography>
        <Typography className={classes.tagline} variant="body1" color="default">
          Your one stop shop to find an Open Source Gatsby Theme for your next
          project
        </Typography>
      </Grid>

      <Grid className={classes.button} item xs={12}>
        <NavButton
          color="secondary"
          to="/themes"
          name="themes"
          variant="contained"
        >
          See Our Themes
          <ArrowForwardIcon className={classes.rightIcon} />
        </NavButton>
        <p />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(GradientCta)
