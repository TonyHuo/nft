module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "nft",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    }
  ],
};
