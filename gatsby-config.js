module.exports = {
  siteMetadata: {
    title: `Great Gatsby JS Themes`,
    description: `From agency projects to side gigs for freelancers, gatsby themes provide simple and elegant designs with easy shadowing to create performant and high quality ux sites.`,
    author: `@kalebmckelvey`,
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#D32F2F`,
        theme_color: `#D32F2F`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: { main: "#D32F2F" },
            secondary: { main: "#304FFE" },
          },
          typography: {
            useNextVariants: true,
          },
        },
      },
    },
  ],
}
