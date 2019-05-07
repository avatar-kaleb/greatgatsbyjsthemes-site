const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/

const siteMetadata = {
  author: `@kalebmckelvey`,
  copyright: "KMK Studios LLC",
  description: `From agency projects to side gigs for freelancers, gatsby themes provide simple and elegant designs with easy shadowing to create performant and high quality ux sites.`,
  gATrackingID: "", // google analytics tracking id
  icon: "src/images/favicon-32x32.png",
  pathPrefix: "",
  postDateFormat: "MMMM Do, YYYY",
  postDefaultCategoryID: "other",
  siteUrl: "https://greatgatsbyjsthemes.com",
  title: `Great Gatsby JS Themes`,
}

const pathPrefix =
  siteMetadata.pathPrefix === "/" ? "" : siteMetadata.pathPrefix
siteMetadata.rssMetadata = {
  author: siteMetadata.author,
  copyright: siteMetadata.copyright,
  description: siteMetadata.description,
  feed_url: siteMetadata.siteUrl + pathPrefix + siteMetadata.rssUrl,
  image_url: `${siteMetadata.siteUrl + pathPrefix}/${siteMetadata.icon}`,
  site_url: siteMetadata.siteUrl + pathPrefix,
  title: siteMetadata.title,
}

module.exports = {
  siteMetadata: siteMetadata,
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
        background_color: `#304FFE`,
        theme_color: `#D32F2F`,
        display: `minimal-ui`,
        icon: siteMetadata.icon, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
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
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({
              query: {
                site: {
                  siteMetadata: { rssMetadata },
                },
                allMarkdownRemark,
              },
            }) => {
              return allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                html: edge.node.html,
              }))
            },
            query: `
            {
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
                  html
                  timeToRead
                }
              }
            }
            }
          `,
            output: "/rss.xml",
            title: "Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
  ],
}
