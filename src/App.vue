<template>
  <div id="app">
    <header></header>
    <div id="nav">
      <router-link to="/">登录</router-link> |
      <router-link to="/index">首页</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
 components:{
  Header
 }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
