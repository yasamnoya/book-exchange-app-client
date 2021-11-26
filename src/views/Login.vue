<template>
  <button @click="login" class="btn btn-dark w-25">Sign in with GihHub</button>
</template>

<script>
export default {
  methods: {
    async login(e) {
      e.preventDefault();
      console.log(process.env);
      console.log(process.env.VUE_APP_GITHUB_CLIENT_ID);
      const url = `https://github.com/login/oauth/authorize?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}`;
      console.log(url);

      window.location.assign(url);
    },
  },
};
</script>
