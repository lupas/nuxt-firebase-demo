import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed

const config: NuxtConfig = {
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
    '@nuxtjs/vuetify',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: 'AIzaSyAf0f_dcfpNiySi-RY4e2amWrkGAe389lg',
      authDomain: 'karoo-bar.firebaseapp.com',
      projectId: 'karoo-bar',
      storageBucket: 'karoo-bar.appspot.com',
      messagingSenderId: '40610940683',
      appId: '1:40610940683:web:f7e6c78e917a029527840e',
      measurementId: 'G-ZSE02GEWQ6',
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        // emulatorPort: isDev && useEmulators ? 9099 : undefined,
        //disableEmulatorWarnings: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
        //emulatorPort: isDev && useEmulators ? 8080 : undefined,
      },
      functions: {
        //emulatorPort: isDev && useEmulators ? 12345 : undefined,
      },
      storage: {
        //emulatorPort: isDev && useEmulators ? 9199 : undefined,
        //emulatorHost: 'localhost',
      },
      database: {
        //emulatorPort: isDev && useEmulators ? 9000 : undefined,
      },
      performance: true,
      analytics: true,

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
        fcmPublicVapidKey:
          'BHyksIsYzvUYiyGqpAI5QbcVi_02t8ZfEWOtZJ2IeDRU28r9S9iU2EwDVHTVeAaDctBBRGNLzuRZLpcRyr6v6yE',
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
export default config
