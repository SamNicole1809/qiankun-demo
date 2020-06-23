import Vue from 'vue'
import App from './App.vue'
import './public-path'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false

let router = null
let instance = null

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? 'one' : '/',
    mode: 'history',
    routes
  })
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}

export async function bootstrap(props) {
  console.log('one bootstrap')
  console.log(props)
}

export async function mount() {
  console.log('one mount')
  render()
}

export async function unmount() {
  console.log('one unmount')
  instance.$destroy();
  instance = null;
  router = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
