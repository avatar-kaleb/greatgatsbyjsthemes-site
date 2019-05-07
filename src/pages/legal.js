import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Fade from "@material-ui/core/Fade"

import { fadeInTransitionTime } from "../constants/transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Legal from "../components/Legal"

const styles = theme => ({})

const ThemesPage = ({ classes }) => {
  return (
    <Layout>
      <SEO title="Legal" keywords={[`great gatsby js themes legal pages`]} />
      <Fade in timeout={{ enter: fadeInTransitionTime }}>
        <Legal />
      </Fade>
    </Layout>
  )
}

export default withStyles(styles)(ThemesPage)
