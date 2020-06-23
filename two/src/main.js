
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
    base: window.__POWERED_BY_QIANKUN__ ? 'two' : '/',
    mode: 'history',
    routes
  })
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}

export async function bootstrap(props) {
  console.log('two bootstrap')
  console.log(props)
}

export async function mount(props) {
  console.log('two mount')
  
  // 设置主应用下发的方法
  Object.keys(props.fn).forEach(method =>{
    Vue.prototype[`$${method}`] = props.fn[method]
  })

  // 设置通讯
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState

  render()
}

export async function unmount() {
  console.log('two unmount')
  instance.$destroy();
  instance = null;
  router = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}