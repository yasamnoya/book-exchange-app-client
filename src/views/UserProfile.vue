<template>
  <div v-if="dataUser">
    <h2 class="mb-5">{{ dataUser.username }}'s <small class="text-muted">profile</small></h2>
    <div class="container text-start">
      <div class="row my-3">
        <label class="col-auto text-end"><b>Username:</b></label>
        <div class="col-auto">{{ dataUser.username }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>Full Name:</b></label>
        <div class="col-auto">{{ dataUser.fullName }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>City:</b></label>
        <div class="col-auto">{{ dataUser.city }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>State:</b></label>
        <div class="col-auto">{{ dataUser.state }}</div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>Address:</b></label>
        <div class="col-auto">{{ dataUser.address }}</div>
      </div>
      <div class="row my-3">
        <div class="col-auto">
          <router-link :to="`/users/${dataUser._id}/books`"
            ><button class="btn btn-outline-dark">
              {{ dataUser.username }}'s Books
            </button></router-link
          >
          <router-link v-if="user._id == dataUser._id" to="/users/edit"
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
  props: {
    user: Object,
  },
  data: () => ({
    dataUser: null,
  }),
  async created() {
    const res = await axios.get(`/users/${this.$route.params.userId}`);
    this.dataUser = res.data;
  },
};
</script>
