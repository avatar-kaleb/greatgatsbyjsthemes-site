import React from "react"
import { graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

import Fade from "@material-ui/core/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/Blog"
import { fadeInTransitionTime } from "../constants/transitions"

const styles = theme => ({})

const ThemesPage = ({
  classes,
  data: {
    allMarkdownRemark: { edges: postEdges },
  },
}) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby js blog`, `gatsby js themes blog`, 'great gatsby js themes blog']} />
    <Fade in timeout={{ enter: fadeInTransitionTime }}>
      <div>
        <Blog postEdges={postEdges} />
      </div>
    </Fade>
  </Layout>
)

export default withStyles(styles)(ThemesPage)

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            tags
            date
            category
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
