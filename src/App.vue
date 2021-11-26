<template>
  <div id="app">
    <Nav :user="user" />
    <div id="nav"></div>
    <router-view :user="user" />
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './components/Nav.vue';

export default {
  data: () => ({
    user: null,
  }),
  components: {
    Nav,
  },
  async created() {
    try {
      const res = await axios.get('/users/login/success', {
        withCredentials: true,
      });
      this.user = res.data;
    } catch (e) {
      this.user = null;
    }
  },
};
</script>

<style>
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
