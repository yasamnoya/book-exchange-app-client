<template>
  <div>
    <div class="card w-75 mx-auto text-start">
      <div class="card-header p-4 text-center">
        <h2>All Trades</h2>
      </div>

      <div v-for="trade in trades" :key="trade._id">
        <div class="card-body">
          <div class="card bg-light">
            <div class="container p-3">
              <div class="row mb-2">
                <div class="col">
                  <div class="mb-2">
                    <router-link :to="`/users/${trade.getOne.user._id}`">{{
                      trade.getOne.user.username
                    }}</router-link>
                    gets:
                  </div>
                  <div class="card p-3" v-for="book in trade.getOne.books" :key="book._id">
                    <h5>{{ book.title }}</h5>
                    {{ book.description }}
                  </div>
                </div>
                <div class="col">
                  <div class="mb-2">
                    <router-link :to="`/users/${trade.getTwo.user._id}`">{{
                      trade.getTwo.user.username
                    }}</router-link>
                    gets:
                  </div>
                  <div class="card p-3" v-for="book in trade.getTwo.books" :key="book._id">
                    <h5>{{ book.title }}</h5>
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
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    trades: [],
  }),
  async created() {
    const res = await axios.get('/trades');
    this.trades = res.data;
  },
};
</script>
