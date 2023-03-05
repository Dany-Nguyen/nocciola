module.exports = {
  siteMetadata: {
    title: `Nocciola`,
    siteUrl: `https://www.nocciola.fr`,
    description: `Vitrine de l'Atelier Nocciola`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vitrine de l'Atelier Nocciola`,
        short_name: `Atelier Nocciola`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
