module.exports = {
  siteMetadata: {
    title: `Tyler Lugger`,
    siteDescr: `A website for an engineer who isn't not Tyler`,
    siteAuthor: `Tyler Lugger`,

    siteEmailUrl: `tyler@notnottyler.com`,
    siteEmailPretty: `tyler@notnottyler.com`,
    siteLinkedInUrl: `https://www.linkedin.com/in/tyler-lugger/`,
    siteLinkedInPretty: `Tyler Lugger`,
    siteGitHubUrl: `https://github.com/tlugger`,
    siteGitHubPretty: `tlugger`,
    siteTwitterUrl: `https://twitter.com/tluggnut`,
    siteTwitterPretty: `@tluggnut`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116225803-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
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
