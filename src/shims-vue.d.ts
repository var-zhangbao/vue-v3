declare module '*.vue' {
  import type { DefineComponent, DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'bootstrap-vue' {
  import type { BootstrapVue } from 'bootstrap-vue'
  const component: BootstrapVue<{}, {}, any>
  export default component
}
