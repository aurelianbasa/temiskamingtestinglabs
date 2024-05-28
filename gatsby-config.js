module.exports = {
  siteMetadata: {
    title: `Temiskaminglabs`,
    siteUrl: `https://temiskaminglabs.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://temiskaminglabs.com',
        sitemap: 'https://temiskaminglabs.com/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: (page) => {
          const date = new Date();

          return {
            url: page.path,
            lastmod: date.toISOString().slice(0, 10),
          };
        },
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@media': 'src/media',
          '@components': 'src/components',
        },
        extensions: ['js'],
      },
    },
  ],
};
