module.exports = {
  siteMetadata: {
    title: 'Email Template Tester',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatbsyJS Email Templater",
        short_name: "Gatbsy Email Templater",
        start_url: '/',
      },
    },
  ],
}
