<template>
  <div id="app">
    <Nav />
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },
  async created() {
    const res = await axios.get('http://localhost:3000/users/login/success', {
      withCredentials: true,
    });
    console.log(res.data);
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
