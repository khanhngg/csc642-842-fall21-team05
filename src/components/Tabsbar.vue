<template>
  <!-- Menu Tab Bar -->
  <nav class="nav nav-pills nav-justified flex-column flex-sm-row">
    <router-link
      class="flex-sm-fill text-sm-center nav-link"
      :to="{ name: 'Profile' }"
      :class="[
        { active: activeTab == 'Profile' },
        { ' border border-dark': activeTab != 'Profile' },
      ]"
      >Profile</router-link
    >
    <router-link
      class="flex-sm-fill text-sm-center nav-link"
      :to="{ name: 'Payments' }"
      :class="[
        { active: activeTab == 'Payments' },
        { ' border border-dark': activeTab != 'Payments' },
      ]"
      >Manage Payments</router-link
    >
    <router-link
      class="flex-sm-fill text-sm-center nav-link"
      :to="{ name: 'MyRentals' }"
      :class="[
        { active: activeTab == 'MyRentals' },
        { ' border border-dark': activeTab != 'MyRentals' },
      ]"
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
