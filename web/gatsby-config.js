require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sane-Gatsby Tinderbox`,
    titleTemplate: `%s - Sane-Gatsby Tinderbox`,
    description: `Boilerplate for Sanity + Gatsby`,
    author: `Lane Wirihana Le Prevost-Smith`,
    siteUrl: 'http://example.com',
    keywords: ``,
    image: `/share.jpg`,
    fbAppId: ``,
    twitterUsername: ``
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/static/favicon.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
