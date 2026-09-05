module.exports = {
  siteMetadata: {
    title: 'Temiskaming Testing Laboratories',
    siteUrl: 'https://temiskaminglabs.com',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/media/common/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
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
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@media': 'src/media',
          '@components': 'src/components',
        },
        extensions: ['.js', '.mjs'],
      },
    },
  ],
};
