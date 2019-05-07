import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          postDateFormat
          postDefaultCategoryID
          siteUrl
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}
