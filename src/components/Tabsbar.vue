<template>
<!-- Menu Tab Bar -->
  <nav class="nav nav-pills nav-justified flex-column flex-sm-row">
    <!-- <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a> -->
    <!-- <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a> -->
    <!-- <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>  -->
    <router-link class="flex-sm-fill text-sm-center nav-link border border-dark" :to="{ name: 'Profile' }">Profile</router-link>
    <!-- TODO, route to PAYMENT TAB -->
    <router-link class="flex-sm-fill text-sm-center nav-link border border-dark" :to="{ name: 'PaymentForm' }">Manage Payments</router-link>
    <router-link class="flex-sm-fill text-sm-center nav-link active" :to="{ name: 'MyCurrentRentals' }">My Rentals</router-link>
  </nav>


  
  
</template>

<script>
export default {
    name: "Tabsbar",
};
</script>

<style scoped>

body {
    width: 100% !important;
    padding: 0 !important;
}
.nav .nav-pills {
    margin-top: 0 !important;
    padding: 0 !important;
    /* width: 1440px; */
}

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
