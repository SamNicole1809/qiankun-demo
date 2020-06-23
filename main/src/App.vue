<template>
  <div id="main">
    <br>
    <button @click="changeView('/one')">子应用one</button>
    <button @click="changeView('/two')">子应用two</button>
    <br>
    <button @click="changeState('1')">修改state = 1</button>
    <button @click="changeState('2')">修改state = 2</button>
    <hr>
    <div id="micro-view"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    changeView(who) {
      console.log(who)
      window.history.pushState(null, who, who)
    },
    changeState(val) {
      this.$actions.setGlobalState({ mt: val })
    }
  }
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
