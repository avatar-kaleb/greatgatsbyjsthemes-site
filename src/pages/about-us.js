import React from "react"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

import Fade from "@material-ui/core/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { fadeInTransitionTime } from "../constants/transitions"

const styles = theme => ({})

const AboutUsPage = ({ classes }) => (
  <Layout>
    <SEO title="About Us" keywords={[`gatsby`, `gatsby themes`]} />
    <Fade in timeout={{ enter: fadeInTransitionTime }}>
      <div>
        <h1>About Us</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Fade>
  </Layout>
)

export default withStyles(styles)(AboutUsPage)
