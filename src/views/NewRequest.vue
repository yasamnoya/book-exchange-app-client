<template>
  <div>
    <div class="card w-75 mx-auto text-start">
      <div class="card-header p-4 text-center">
        <h2>Create Request <small class="text-muted">for trade</small></h2>
      </div>

      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <router-link :to="`/users/${user._id}`">{{ user.username }}</router-link>
                wants to give:
              </div>
              <div class="card p-3" v-for="book in toGive" :key="book._id">
                <h5>{{ book.title }}</h5>
                {{ book.description }}
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark mt-3"
                data-bs-toggle="modal"
                data-bs-target="#toGiveModal"
              >
                Edit Books to Give
              </button>

              <!-- Modal -->
              <div class="modal fade" id="toGiveModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Select Books to Give</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div v-for="book in myBooks" :key="book._id">
                        <div class="card-body">
                          <div class="container">
                            <div class="row">
                              <div class="col-1">
                                <input
                                  v-model="book.checked"
                                  class="form-check-input"
                                  type="checkbox"
                                  id="flexCheckDefault"
                                />
                              </div>
                              <div class="col">
                                <h5 class="card-title">{{ book.title }}</h5>
                                <p class="card-text">{{ book.description }}</p>
                                <small class="text-muted"
                                  >from
                                  <router-link :to="`/users/${book.owner._id}`">{{
                                    book.owner.username
                                  }}</router-link>
                                  <span v-if="book.owner.city">
                                    in {{ book.owner.city }}</span
                                  ></small
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button
                        @click="commitToGive"
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">and wants to take:</div>
              <div class="card p-3" v-for="book in toTake" :key="book._id">
                <h5>{{ book.title }}</h5>
                {{ book.description }}
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-dark mt-3"
                data-bs-toggle="modal"
                data-bs-target="#toTakeModal"
              >
                Edit Books to Take
              </button>

              <!-- Modal -->
              <div class="modal fade" id="toTakeModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Select Books to Take</h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div v-for="book in othersBooks" :key="book._id">
                        <div class="card-body">
                          <div class="container">
                            <div class="row">
                              <div class="col-1">
                                <input
                                  v-model="book.checked"
                                  class="form-check-input"
                                  type="checkbox"
                                  id="flexCheckDefault"
                                />
                              </div>
                              <div class="col">
                                <h5 class="card-title">{{ book.title }}</h5>
                                <p class="card-text">{{ book.description }}</p>
                                <small class="text-muted"
                                  >from
                                  <router-link :to="`/users/${book.owner._id}`">{{
                                    book.owner.username
                                  }}</router-link>
                                  <span v-if="book.owner.city">
                                    in {{ book.owner.city }}</span
                                  ></small
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button
                        @click="commitToTake"
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-center">
        <button @click.prevent="submitRequest" class="btn btn-outline-dark">Submit Request</button>
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
    toGive: [],
    toTake: [],
    myBooks: [],
    othersBooks: [],
  }),
  async created() {
    /* eslint no-underscore-dangle: 0 */
    const res = await axios.get('http://localhost:3000/books');
    this.myBooks = res.data.filter((book) => book.owner._id === this.user._id);
    this.myBooks = this.myBooks.map((book) => ({ ...book, checked: false }));
    this.othersBooks = res.data.filter((book) => book.owner._id !== this.user._id);
    this.othersBooks = this.othersBooks.map((book) => ({ ...book, checked: false }));
  },
  methods: {
    commitToGive() {
      this.toGive = this.myBooks.filter((book) => book.checked);
    },
    commitToTake() {
      this.toTake = this.othersBooks.filter((book) => book.checked);
    },
    async submitRequest() {
      try {
        const { toGive, toTake } = this;
        await axios.post('http://localhost:3000/requests', { toGive, toTake });
        this.$router.push('/requests');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
