export { default as Btn } from '../../components/Btn.vue'
export { default as Codeblock } from '../../components/Codeblock.vue'
export { default as Form } from '../../components/Form.vue'
export { default as ServiceTitle } from '../../components/ServiceTitle.vue'
export { default as SubTitle } from '../../components/SubTitle.vue'
export { default as ExamplesAnalytics } from '../../components/examples/Analytics.vue'
export { default as ExamplesAuth } from '../../components/examples/Auth.vue'
export { default as ExamplesFirestore } from '../../components/examples/Firestore.vue'
export { default as ExamplesFunctions } from '../../components/examples/Functions.vue'
export { default as ExamplesMessaging } from '../../components/examples/Messaging.vue'
export { default as ExamplesPerformance } from '../../components/examples/Performance.vue'
export { default as ExamplesRealTimeDatabase } from '../../components/examples/RealTimeDatabase.vue'
export { default as ExamplesRemoteConfig } from '../../components/examples/RemoteConfig.vue'
export { default as ExamplesStorage } from '../../components/examples/Storage.vue'
export { default as ExamplesVuexStore } from '../../components/examples/VuexStore.vue'
export { default as LogoFirebaseLogo } from '../../components/Logo/FirebaseLogo.vue'
export { default as LogoNuxtLogo } from '../../components/Logo/NuxtLogo.vue'
export { default as Logo } from '../../components/Logo/index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
