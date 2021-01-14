<template>
  <div id="app">
    <div id="nav" v-if="this.$route.path !== '/dashboard'">
      <router-link to="/">Home</router-link> |
      <router-link to="/draggable">Vue Draggable</router-link> |
      <router-link to="/draggable-swap">Vue Draggable - Swap</router-link> |
      <router-link to="/sidebar">Sidebar</router-link> |
      <router-link to="/datepicker">Datepicker</router-link> |
      <router-link to="/navbar">Navbar</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
:root {
  --darkblue: #33637a;
  --steelblue: #2d7293;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
