/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My CV",
    description: "Personal CV page.",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        pathToStylesProvider: `src/components/themeProvider/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
