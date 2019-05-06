import React from "react"
import { withStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import EditIcon from "@material-ui/icons/Edit"
import SettingsIcon from "@material-ui/icons/Settings"
import ViewModuleIcon from "@material-ui/icons/ViewModule"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  grid: {
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing.unit,
    minHeight: "85vh",
    textAlign: "center",
    padding: theme.spacing.unit * 3,
  },
  cardIcon: {
    marginBottom: theme.spacing.unit,
  },
  philosphyGridItem: {
    textAlign: "center",
    marginBottom: theme.spacing.unit * 7,
  },
  philosphyHeading: {},
  philosophyParagraph: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
  },
})

const CardsSection = ({ classes }) => {
  return (
    <Grid
      className={classes.grid}
      container
      direction="row"
      justify="space-evenly"
      alignContent="center"
      spacing={24}
    >
      <Grid className={classes.philosphyGridItem} item xs={12}>
        <Typography
          className={classes.philosphyHeading}
          variant="h2"
          color="default"
        >
          Our Philosphy
        </Typography>

        <Typography
          className={classes.philosophyParagraph}
          component="p"
          color="default"
        >
          We search for themes that are responsive, performant, and
          professional.
        </Typography>
        <Typography
          component="p"
          color="default"
          className={classes.philosophyParagraph}
        >
          <strong>
            Time is money, utilizing Gatsy themes to create websites for your
            clients will save time and add value!
          </strong>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader
            title="Componentized"
            titleTypographyProps={{ variant: "h4" }}
          />
          <CardContent>
            <ViewModuleIcon className={classes.cardIcon} fontSize="large" />
            <Typography component="p" color="default">
              Our themes are created with base level components, letting you
              easily overshadow individual pieces of the ui.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader
            title="Configurable"
            titleTypographyProps={{ variant: "h4" }}
          />
          <CardContent>
            <SettingsIcon className={classes.cardIcon} fontSize="large" />
            <Typography component="p" color="default">
              We find themes with metadata abstracted into config files,
              allowing quick configuration when utilizing it!.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader
            title="Customizeable"
            titleTypographyProps={{ variant: "h4" }}
          />
          <CardContent>
            <EditIcon className={classes.cardIcon} fontSize="large" />
            <Typography component="p" color="default">
              Gatsby themes can be customized through overshadding, making it
              trivial to get the look you want!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(CardsSection)
