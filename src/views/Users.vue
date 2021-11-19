<template>
  <div>
    <h1>Users</h1>
    <div class="card w-75 m-auto text-start">
      <div class="card-body" v-for="user in users" :key="user._id">
        <router-link :to="`/users/${user._id}`"
          ><h5>{{ user.username }}</h5></router-link
        >
        <div v-if="user.city">City: {{ user.city }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    users: [],
  }),
  async created() {
    const res = await axios.get('http://localhost:3000/users');
    this.users = res.data;
    console.log(this.users);
  },
};
</script>
