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
        <router-link
          :to="{ name: 'Search' }"
          tag="button"
          class="btn btn-outline-success"
          type="submit"
          >Search</router-link
        >
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
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'ReservationsLookUp' }"
              >Reservations</router-link
            >
          </li>
        </ul>
      </div>

      <!-- User dropdown -->
      <div v-if="isLoggedIn" class="btn-group">
        <a
          href="#"
          class="d-block link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span style="font-size: 32px; color: #2c3e50">
            <i class="fas fa-user-circle"></i>
          </span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <div v-if="isUserTypeAdmin()">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'Dashboard' }">
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{ name: 'AddForm' }">
                Add a Car
              </router-link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
          </div>
          <div v-else-if="isUserTypeDelivery()">
            <li>
              <router-link
                class="dropdown-item"
                :to="{ name: 'DeliveryReport' }"
              >
                My Deliveries
              </router-link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
          </div>
          <li>
            <router-link class="dropdown-item" :to="{ name: 'Profile' }">
              Profile
            </router-link>
          </li>
          <li>
            <router-link class="dropdown-item" :to="{ name: 'Payments' }">
              Payments
            </router-link>
          </li>
          <li>
            <router-link class="dropdown-item" :to="{ name: 'MyRentals' }">
              My Rentals
            </router-link>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" @click.prevent="onSignOut">Sign out</a>
          </li>
        </ul>
      </div>
      <div v-else>
        <button class="btn btn-primary-theme fw-bold" @click.prevent="onLogIn">
          Log In
        </button>
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
  data() {
    return {
      isLoggedIn: false,
      loggedInUser: {
        userType: "",
        firstName: "",
        lastName: "",
        dateOfBirth: {
          month: "",
          day: "",
          year: "",
        },
        email: "",
        phone: "",
        password: "",
        address: {
          streetAddress: "",
          apartmentNumber: "",
          city: "",
          state: "",
          zip: "",
        },
        cardInfo: {
          cardNumber: "",
          expiration: {
            month: "",
            year: "",
          },
          securityCode: "",
          isDefault: false,
        },
      },
    };
  },
  created() {
    var user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
      this.isLoggedIn = true;
      this.loggedInUser = user;
    } else {
      this.isLoggedIn = false;
    }
  },
  methods: {
    onLogIn() {
      this.$router.push({ name: "Login" });
    },
    onSignOut() {
      localStorage.removeItem("loggedInUser");
      this.isLoggedIn = false;
      this.$router.push({ name: "Home" });
    },
    isUserTypeAdmin() {
      return this.loggedInUser && this.loggedInUser.userType == "admin";
    },
    isUserTypeDelivery() {
      return this.loggedInUser && this.loggedInUser.userType == "delivery";
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
