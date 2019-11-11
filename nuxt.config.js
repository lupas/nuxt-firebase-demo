const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-fire | Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/github-buttons.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-fire'],

  buildModules: ['@nuxtjs/vuetify'],

  vuetify: {
    // treeShake: false,
    // customVariables: ['~/assets/style/variables.scss'],
    defaultAssets: {
      icons: false
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#3b8070',
          secondary: '#35495e'
        }
      }
    }
  },

  /*
   ** Nuxt.js Middleware
   */
  router: {
    middleware: ['testMiddleware']
  },

  //Nuxt-Fire Module Options
  fire: {
    useOnly: [
      'auth',
      'firestore',
      'functions',
      'storage',
      'realtimeDb',
      'performance',
      'analytics',
      'remoteConfig',
      'messaging'
    ],
    functionsLocation: 'us-central1',
    config: {
      development: {
        apiKey: 'AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU',
        authDomain: 'nuxt-fire-demo.firebaseapp.com',
        databaseURL: 'https://nuxt-fire-demo.firebaseio.com',
        projectId: 'nuxt-fire-demo',
        storageBucket: 'nuxt-fire-demo.appspot.com',
        messagingSenderId: '807370470428',
        appId: '1:807370470428:web:26da98c86c3fd352',
        measurementId: 'G-XT6PVC1D4X'
      },
      production: {
        apiKey: 'AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU',
        authDomain: 'nuxt-fire-demo.firebaseapp.com',
        databaseURL: 'https://nuxt-fire-demo.firebaseio.com',
        projectId: 'nuxt-fire-demo',
        storageBucket: 'nuxt-fire-demo.appspot.com',
        messagingSenderId: '807370470428',
        appId: '1:807370470428:web:26da98c86c3fd352',
        measurementId: 'G-XT6PVC1D4X'
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
