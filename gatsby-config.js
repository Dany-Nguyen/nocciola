module.exports = {
  siteMetadata: {
    title: `Vitrine de l'Atelier Nocciolae`,
    siteUrl: `https://jamm.matter.design`,
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
