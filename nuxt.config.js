export default {
  head: {
    title: 'nuxt-firebase-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
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
        'BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w',
    },
    onFirebaseHosting: false,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
      },
      firestore: {
        memoryOnly: false,
      },
      functions: true,
      storage: true,
      database: true,
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000,
          minimumFetchIntervalMillis: 43200000,
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
      messaging: {
        createServiceWorker: true,
        actions: [
          {
            action: 'goToLupasGithub',
            url: 'https://github.com/lupas',
          },
          {
            action: 'goToModuleGithub',
            url: 'https://github.com/nuxt-community/firebase-module',
          },
        ],
      },
    },
  },

  modules: ['@nuxtjs/pwa'],
  // plugins: ['~/plugins/lazyMode'],

  build: {},

  /*
   ** Nuxt.js Middleware
   */
  router: {
    middleware: ['testMiddleware'],
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },
}
