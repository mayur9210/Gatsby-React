module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `src`,
              path: `${__dirname}/src/`,
          },
      },
      `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      },
      `gatsby-plugin-glamor`,
      `gatsby-plugin-styled-components`,
      `gatsby-transformer-remark`,
  ],
}
