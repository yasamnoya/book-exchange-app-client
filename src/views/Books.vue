<template>
  <div>
    <div class="card w-75 mx-auto text-start">
      <div class="card-header p-4 text-center">
        <h2>Books <small class="text-muted">available for trade</small></h2>
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
                <router-link :to="`/books/${book._id}/requests`" v-if="book.requests.length"
                  >Request
                  <span class="badge bg-secondary">{{ book.requests.length }}</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <router-link to="/requests/new"
          ><button class="btn btn-outline-dark">New Reqeust</button></router-link
        >
        <router-link to="/books/my"
          ><button class="mx-2 btn btn-outline-dark">Add book</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    books: [],
  }),
  async created() {
    const res = await axios.get('/books');
    this.books = res.data;
  },
};
</script>
