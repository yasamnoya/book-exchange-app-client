<template>
  <div v-if="user">
    <h2 class="mb-5">{{ user.username }}'s <small class="text-muted">profile</small></h2>
    <div class="container text-start">
      <div class="row my-3">
        <label class="col-auto text-end"><b>Username:</b></label>
        <div class="col-auto">{{ user.username }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>Full Name:</b></label>
        <div class="col-auto">{{ user.fullName }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>City:</b></label>
        <div class="col-auto">{{ user.city }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>State:</b></label>
        <div class="col-auto">{{ user.state }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>Address:</b></label>
        <div class="col-auto">{{ user.address }}</div>
      </div>
      <div class="row my-3">
        <div class="col-auto">
          <router-link :to="`/users/${user._id}/books`"
            ><button class="btn btn-outline-dark">{{ user.username }}'s Books</button></router-link
          >
          <router-link to="/users/edit"
            ><button class="btn btn-outline-dark mx-2">Edit Profile</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    user: null,
  }),
  async created() {
    const res = await axios.get(`http://localhost:3000/users/${this.$route.params.userId}`);
    this.user = res.data;
  },
};
</script>
