import React from "react"

import Fade from "@material-ui/core/Fade"
import Home from "../components/Home"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { fadeInTransitionTime } from "../constants/transitions"

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `gatsby themes`]} />
    <Fade in timeout={{ enter: fadeInTransitionTime }}>
      <div>
        <Home />
      </div>
    </Fade>
  </Layout>
)

export default IndexPage
