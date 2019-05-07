import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          siteUrl
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
