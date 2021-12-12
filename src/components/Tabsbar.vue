<template>
  <!-- Menu Tab Bar -->
  <nav class="nav nav-pills nav-justified flex-column flex-sm-row">
    <router-link
      class="flex-sm-fill text-sm-center nav-link border border-dark"
      :to="{ name: 'Profile' }"
      >Profile</router-link
    >
    <!-- TODO, route to PAYMENT TAB -->
    <router-link
      class="flex-sm-fill text-sm-center nav-link border border-dark"
      :to="{ name: 'PaymentForm' }"
      >Manage Payments</router-link
    >
    <router-link
      class="flex-sm-fill text-sm-center nav-link active"
      :to="{ name: 'MyRentals' }"
      >My Rentals</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Tabsbar",
  props: {
    activeTab: String,
  },
};
</script>

<style scoped>
.nav-link {
  color: unset;
  font-weight: bold;
}
.nav-pills .nav-link {
  border-radius: 0;
}

.nav-pills .nav-link.active {
  background-color: var(--main-theme-color);
}

.nav-pills .nav-link:hover {
  color: var(--white);
  background-color: var(--dark-purple);
  border: none !important;
}
</style>
