const pkg = require('./package')

export default () => {
  return {
    /*
     ** Headers of the page
     */
    head: {
      title: 'nuxt-community/firebase | Demo',
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
    modules: ['@nuxtjs/pwa','@nuxtjs/firebase'],

    buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],

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
    firebase: {
      config: {
        apiKey: 'AIzaSyDa-YwgWTp2GDyVYEfv-XLb62100_HoEvU',
        authDomain: 'nuxt-fire-demo.firebaseapp.com',
        databaseURL: 'https://nuxt-fire-demo.firebaseio.com',
        projectId: 'nuxt-fire-demo',
        storageBucket: 'nuxt-fire-demo.appspot.com',
        messagingSenderId: '807370470428',
        appId: '1:807370470428:web:26da98c86c3fd352',
        measurementId: 'G-XT6PVC1D4X',
        fcmPublicVapidKey:
          'BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w'
      },
      onFirebaseHosting: false,
      services: {
        auth: {
          initialize: {
            onAuthStateChangedAction: 'onAuthStateChanged'
          },
          ssr: true
        },
        firestore: {
          memoryOnly: false,
          static: false,
        },
        functions: true,
        storage: true,
        realtimeDb: true,
        performance: true,
        analytics: true,
        remoteConfig: {
          settings: {
            fetchTimeoutMillis: 60000,
            minimumFetchIntervalMillis: 43200000
          },
          defaultConfig: {
            welcome_message: 'Welcome'
          }
        },
        messaging: {
          createServiceWorker: true,
          actions: [
            {
              action: 'goToUrl',
              url: "https://github.com/lupas"
            }
          ]
        },
      }
    },

    pwa: {
      workbox: {
        importScripts: [
          '/firebase-auth-sw.js'
        ],
        // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
        // only set this true for testing and remember to always clear your browser cache in development
        dev: process.env.NODE_ENV === 'development'
      }
    },

    // Fixes issues with settinmg firestore.settings()
    // render: {
    //   bundleRenderer: {
    //     runInNewContext: false
    //   }
    // },

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
}
