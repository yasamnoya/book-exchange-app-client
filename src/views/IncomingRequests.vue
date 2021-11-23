<template>
  <div>
    <div class="card w-75 mx-auto text-start">
      <div class="card-header p-4 text-center">
        <h2>
          Incoming Requests <small class="text-muted">for {{ user.username }}</small>
        </h2>
      </div>

      <div v-for="request in requests" :key="request._id">
        <div class="card-body">
          <div class="card bg-light">
            <div class="container p-3">
              <div class="row text-end">
                <div class="col-12 text-end">
                  <router-link :to="`/requests/${request._id}/select`">
                    <button class="btn btn-outline-success mx-2">Select</button>
                  </router-link>
                  <button @click.prevent="reject(request._id)" class="btn btn-outline-danger mx-2">
                    Reject
                  </button>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div class="mb-2">
                    <router-link :to="`/users/${request.requestor._id}`">{{
                      request.requestor.username
                    }}</router-link>
                    wants to give:
                  </div>
                  <div class="card p-3" v-for="book in request.toGive" :key="book._id">
                    <h5>{{ book.title }}</h5>
                    {{ book.description }}
                  </div>
                </div>
                <div class="col">
                  <div class="mb-2">and wants to take:</div>
                  <div class="card p-3" v-for="book in request.toTake" :key="book._id">
                    <div class="container">
                      <div class="row">
                        <div class="col-9 p-0">
                          <h5>
                            {{ book.title }}
                            <small class="text-muted"
                              >from
                              <router-link :to="`/users/${book.owner._id}`">{{
                                book.owner.username
                              }}</router-link></small
                            >
                          </h5>
                        </div>
                        <div class="col p-0 text-end">
                          <router-link :to="`/books/${book._id}/requests`"
                            >Requests
                            <span class="badge bg-secondary" v-if="book.requests.length">{{
                              book.requests.length
                            }}</span></router-link
                          >
                        </div>
                      </div>
                      <div class="row">
                        {{ book.description }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <router-link to="/requests/new"
          ><button class="btn btn-outline-dark">New Reqeust</button></router-link
        >
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
  data: () => ({
    requests: [],
  }),
  async created() {
    const res = await axios.get('http://localhost:3000/requests/incoming');
    this.requests = res.data;
  },
  methods: {
    async reject(requestId) {
      try {
        await axios.patch(`http://localhost:3000/requests/${requestId}/reject`);
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
