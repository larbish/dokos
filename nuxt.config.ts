// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-link-checker',
  ],
  extends: '@nuxt-themes/docus',
  content: {
    sources: [],
    highlight: {
      preload: ['xml']
    },
    locales: ['fr'],
    defaultLocale: 'fr'
  },
  css: [
    '~/assets/style/main.css',
  ],
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
      ]
    }
  },
  linkChecker: {
    failOn404: false,
    exclude: [
      '/applications'
    ],
  },
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: process.env.DOCSEARCH_APP_ID,
        apiKey: process.env.DOCSEARCH_API_KEY,
        langAttribute: 'lang',
        docSearch: {
          indexName: 'dokos'
        }
      }
    }
  }
})
