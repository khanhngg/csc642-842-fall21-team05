<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom py-3 mb-3">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link class="navbar-brand fw-bold" to="/">CarToGo</router-link>

      <!-- Search Bar -->
      <form v-if="hasSearch" class="w-50 d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <router-link :to="{ name: 'Search'}" tag="button" class="btn btn-outline-success" type="submit">Search</router-link>
      </form>

      <!-- Hamburger menu on mobile -->
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

      <!-- TODO - move this to opens up under LOGO on mobile -->
      <!-- Nav links -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >Reservations</router-link
            >
          </li>
        </ul>
      </div>

      <!-- User dropdown -->
      <div v-if="isLoggedIn" class="btn-group">
        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Payments</a></li>
          <li><a class="dropdown-item" href="#">My Rentals</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    hasSearch: {
      type: Boolean,
      default: true,
    },
    isLoggedIn: {
      type: Boolean,
      default: true,
    },
},
};
</script>

<style scoped>
.logo-text {
  color: var(--main-theme-color);
}

.logo-text:hover {
  color: var(--dark-purple);
}

</style>
