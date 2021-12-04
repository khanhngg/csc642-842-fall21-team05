<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const defaultLayout = "default";

export default {
  name: "Home",
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
