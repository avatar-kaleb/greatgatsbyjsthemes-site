import React from "react"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Fade from "@material-ui/core/Fade"

import { fadeInTransitionTime } from "../constants/transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"
import Legal from '../components/Legal';
import useSiteMetadata from '../hooks/useSiteMetadata';

const styles = theme => ({})

const ThemesPage = ({ classes }) => {
  const { siteUrl, title } = useSiteMetadata();

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
