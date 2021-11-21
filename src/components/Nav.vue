<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid w-75">
      <router-link class="navbar-brand" to="/books">Book Exchange</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/books" class="nav-link">Books</router-link>
          </li>
          <li v-if="!this.user" class="nav-item">
            <router-link to="/requests" class="nav-link">Requests</router-link>
          </li>
          <li v-if="this.user" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Requests
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/requests" class="dropdown-item">All Requests</router-link></li>
              <li>
                <router-link to="/requests/incoming" class="dropdown-item"
                  >Incoming Requests</router-link
                >
              </li>
              <li>
                <router-link to="/requests/new" class="dropdown-item">New Request</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/trades" class="nav-link">Trades</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Users</router-link>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right mb-2 mb-lg-0">
          <li v-if="!this.user" class="nav-item">
            <router-link to="/login" class="nav-item nav-link">Login</router-link>
          </li>
          <li v-if="this.user" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user.username }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link :to="`/users/${this.user._id}`" class="dropdown-item"
                  >Profile</router-link
                >
              </li>
              <li>
                <router-link to="/users/edit" class="dropdown-item">Edit Profile</router-link>
              </li>
              <li>
                <router-link to="/books/my" class="dropdown-item">My Books</router-link>
              </li>
              <li @click.prevent="logout">
                <router-link to="" class="dropdown-item">Logout</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    user: Object,
  },
  methods: {
    async logout() {
      try {
        await axios.get('http://localhost:3000/users/logout', { withCredentials: true });
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
