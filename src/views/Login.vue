<template>
  <button @click="login" class="btn btn-dark w-25">Sign in with GihHub</button>
</template>

<script>
export default {
  methods: {
    async login(e) {
      e.preventDefault();
      const url = 'https://github.com/login/oauth/authorize?client_id=5222f014dda26735a15d&redirect_url=http://localhost:8080/books';

      window.location.assign(url);
    },
  },
};
</script>
