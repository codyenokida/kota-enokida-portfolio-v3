module.exports = {
  siteMetadata: {
    title: `Kota Cody Enokida - Portfolio`,
    description: `Kota Cody Enokida - Portfolio`,
    author: `Kota Cody Enokida`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: 
        {
          name: `images`,
          path: `${__dirname}/src/data/images`,
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/logo.png`,
      },
    },
  ],
}
