<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link class="navbar-brand fw-bold" to="/">CarToGo</router-link>

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

      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <!-- Search Bar -->
        <form v-if="true" class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <router-link :to="{ name: 'Search'}" tag="button" class="btn btn-outline-success" type="submit">Search</router-link>
        </form>

        <!-- Nav links -->
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About'}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About'}">Reservations</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
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
  },
};
</script>

<style lang="scss" scoped></style>
