const { description } = require('../../package')


module.exports = {
  title: 'Sneakers México',
  description: description,
  locales: {
    '/':{
      lang: 'es-MX'
    },
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', {
      rel: 'stylesheet',
      href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css`
    }],
    ['script', { src: `https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js` }],
    ['script', { src: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js` }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Noticias',
        link: '/noticias/'
      },
      {
        text: 'Lanzamientos',
        link: '/lanzamientos/'
      }

    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
      ['@vuepress/active-header-links'],
    ['@vuepress/google-analytics', {'ga': 'UA-221767209-1'}],
    ['robots',
        {/**
         * @host
         * Mandatory, You have to provide the host URL
         */
        host: "https://www.sneakersmx.com.mx",
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */
        sitemap: "/sitemap.xml",
        /**
         * @policies
         * Optional, by default: null
         */
        policies: [
            {
                userAgent: '*',
                disallow: [
                    '/admin','/login'
                ],
                allow: [    // Optional: Allowed paths.
                    'lanzamientos','noticias'
                ]
            }
        ]}
      ]
  ],

  postcss: {
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ]
  }

}

