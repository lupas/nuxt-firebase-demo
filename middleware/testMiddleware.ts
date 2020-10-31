import { Middleware } from '@nuxt/types'

const testMiddleware: Middleware = ({ app }) => {
  if (app.$fire.auth) {
    // INFO -> Firebase Services can be accessed with app.$fire.auth (etc.) in Middleware.
  }
}

export default testMiddleware
