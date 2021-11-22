<template>
  <div>
    <div class="container w-75 mb-3">
      <h2>
        Add Book <small class="text-muted">for {{ user.username }}</small>
      </h2>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
          <label class="col-form-label"><b>Title</b></label>
        </div>
        <div class="col-auto">
          <input v-model="title" class="form-control" />
        </div>
      </div>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-auto">
          <label class="col-form-label"><b>Description</b></label>
        </div>
        <div class="col-auto">
          <input v-model="description" class="form-control" />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button @click.prevent="addBook" class="btn btn-outline-dark">
            Add Book to Exchange
          </button>
        </div>
      </div>
    </div>
    <div class="card w-75 mx-auto text-start">
      <div class="card-header p-4 text-center">
        <h2>{{ user.username }}'s Books <small class="text-muted">available for trade</small></h2>
      </div>

      <div v-for="book in books" :key="book._id">
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col-1">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div>
              <div class="col">
                <h5 class="card-title">{{ book.title }}</h5>
                <p class="card-text">{{ book.description }}</p>
                <small class="text-muted"
                  >from
                  <router-link :to="`/users/${book.owner._id}`">{{
                    book.owner.username
                  }}</router-link>
                  <span v-if="book.owner.city"> in {{ book.owner.city }}</span></small
                >
              </div>
              <div class="col text-end">
                <button @click.prevent="deleteBook(book._id)" class="btn btn-danger">Delete</button>
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
    books: [],
    title: '',
    description: '',
  }),
  async created() {
    /* eslint no-underscore-dangle: 0 */
    const res = await axios.get(`http://localhost:3000/users/${this.user._id}/books`);
    this.books = res.data;
  },
  methods: {
    async addBook() {
      try {
        const { title, description } = this;
        await axios.post('http://localhost:3000/books/', { title, description });
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },
    deleteBook: async (bookId) => {
      try {
        await axios.delete(`http://localhost:3000/books/${bookId}`);
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
