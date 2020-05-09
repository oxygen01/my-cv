/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://ibrahim-taaloulou.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      options: {},
    },
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ibrahim-taaloulou.netlify.app",
        sitemap: "https://ibrahim-taaloulou.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
