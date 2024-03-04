require('dotenv').config()

const fontFile = require('./src/@elegantstack/flow-ui-theme/theme/typography-fonts.json')

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TTL',
        short_name: 'TTL',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false,
        fonts: fontFile.fonts
      }
    },
     {
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal',
       options: {
         basePath: '/news',
         siteUrl: 'https://temiskaminglabs.com',
       fonts: fontFile.fonts,
         services: {
           algolia: false
           // mailchimp: true
         },
         sources: {
           contentful: false,
           local: true
         }
       }
   }
  ],
  // Customize your site metadata
  siteMetadata: {
    //General Site Metadata
    siteUrl: 'https://ttl.com',
    title: 'TTL',
    name: 'TTL',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Linkedin',
        url: 'https://ca.linkedin.com/company/canada-cobalt-works/'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/canadacobaltworks/'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    // DONT DELETE THESE
    headerMenu: [
      {
        name: 'DONT DELETE',
        slug: '/'
      }
    ],
    footerMenu: [
      {
        title: 'DONT DELETE',
        items: [
          {
            name: 'DONT DELETE',
            slug: '/'
          }
        ]
      }
    ]
  }
}
