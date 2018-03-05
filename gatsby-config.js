module.exports = {
  siteMetadata: {
    title: `Tyler Lugger`,
    siteDescr: `A website for a developer who isn't not Tyler`,
    siteAuthor: `Tyler Lugger`,

    siteEmailUrl: `tyler@notnottyler.com`,
    siteEmailPretty: `tyler@notnottyler.com`,
    siteTwitterUrl: `https://twitter.com/tluggnut`,
    siteTwitterPretty: `@tluggnut`,
  },
  // pathPrefix: "/notnottyler",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/mainPages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-plugin-sass`,
  ],
}
