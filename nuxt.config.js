// import path from 'path'
import i18n from './config/i18n'
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'deer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/app.min.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/directives.js',
      ssr: false,
    },
    {
      src: '~/plugins/components.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-agile.js',
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxtjs/svg',
    [
      'nuxt-i18n',
      // eslint-disable-next-line no-undef

      {
        defaultLocale: 'ar',
        seo: false,
        vueI18nLoader: true,
        strategy: 'no_prefix',
        routesNameSeparator: '_',
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en',
          },
          {
            code: 'ar',
            name: 'Aabic',
            iso: 'ar',
          },
        ],
        vueI18n: i18n,
        vuex: {
          // Module namespace
          moduleName: 'i18n',

          // If enabled, current app's locale is synced with nuxt-i18n store module
          syncLocale: true,

          // If enabled, current translation messages are synced with nuxt-i18n store module
          syncMessages: false,

          // Mutation to commit to set route parameters translations
          syncRouteParams: false,
        },
        beforeLanguageSwitch: (oldLocale, newLocale) => {
          console.log('before')
        },
        onLanguageSwitched: (oldLocale, newLocale) => {
          // store.commit('configration.toggleLang')
          console.log('after')
          // if (newLocale === 'ar') {
          //   document.classList.add('rtl')
          // }
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
