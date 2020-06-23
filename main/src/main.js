import Vue from 'vue'
import App from './App.vue'
import {
  registerMicroApps,      // 注册子应用
  runAfterFirstMounted,   // 一个子应用装载完毕
  setDefaultMountApp,     // 设置默认装载打子应用
  initGlobalState,        // 通讯
  start                   // 启动
} from 'qiankun'

Vue.config.productionTip = false

new Vue({
  render: function(h) { return h(App) },
}).$mount('#container')

registerMicroApps([
  {
    name: 'one',
    entry: '//localhost:6661',
    container: '#micro-view',
    activeRule: '/one',
    props: {
      msg: {
        data: {
          mt: 'you are one'
        }
      },
      fn: {
        show(msg) {
          console.log('one', msg)
        }
      }
    }
  },
  {
    name: 'two',
    entry: '//localhost:6662',
    container: '#micro-view',
    activeRule: '/two',
    props: {
      msg: {
        data: {
          mt: 'you are two'
        }
      },
      fn: {
        show(msg) {
          console.log('two', msg)
        }
      }
    }
  }
])

// 通讯
const actions = initGlobalState({ mt: 'init' })

// 在项目中任何需要监听的地方进行监听
actions.onGlobalStateChange((state, prev) => {
  console.log('main state change', state, prev)
})

Vue.prototype.$actions = actions

setDefaultMountApp('one')

runAfterFirstMounted(() => {
  console.log('第一个子应用加载完毕后回调')
})

// 启动qiankun
start()