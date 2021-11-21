<template>
  <div v-if="user">
    <h2 class="mb-5">{{ user.username }}'s <small class="text-muted">profile</small></h2>
    <div class="container text-start">
      <div class="row my-3">
        <label class="col-auto text-end"><b>Username:</b></label>
        <div class="col-auto">
          <input v-model="dataUser.username" type="text" class="form-control" />
        </div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>Full Name:</b></label>
        <div class="col-auto">
          <input v-model="dataUser.fullName" type="text" class="form-control" />
        </div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>City:</b></label>
        <div class="col-auto">
          <input v-model="dataUser.city" type="text" class="form-control" />
        </div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>State:</b></label>
        <div class="col-auto">
          <input v-model="dataUser.state" type="text" class="form-control" />
        </div>
      </div>
      <div class="row my-3">
        <label class="col-auto text-end"><b>Address:</b></label>
        <div class="col-auto">
          <input v-model="dataUser.address" type="text" class="form-control" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-auto">
          <button @click.prevent="submit" class="btn btn-outline-dark">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;

export default {
  props: {
    user: Object,
  },
  data() {
    return { dataUser: { ...this.user } };
  },
  methods: {
    async submit() {
      /* eslint no-underscore-dangle: 0 */
      try {
        await axios.patch(`http://localhost:3000/users/${this.user._id}`, this.dataUser);
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
