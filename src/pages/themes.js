import React from "react"
import { withStyles } from "@material-ui/core/styles"

import Fade from "@material-ui/core/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Themes from "../components/Themes"
import { fadeInTransitionTime } from "../constants/transitions"

const styles = theme => ({})

const ThemesPage = ({ classes }) => (
  <Layout>
    <SEO
      title="Themes"
      keywords={[
        `gatsby js starters`,
        `gatsby js themes`,
        "great gatsby js themes",
      ]}
    />
    <Fade in timeout={{ enter: fadeInTransitionTime }}>
      <div>
        <Themes />
      </div>
    </Fade>
  </Layout>
)

export default withStyles(styles)(ThemesPage)
