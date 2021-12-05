<template>
  <!-- Pickup/Delivery option -->
  <div class="mb-2">
    <button type="button" class="btn btn-primary-theme">RENT</button>
    <button type="button" class="btn">DELIVERY</button>
  </div>

  <!-- Search bar -->
  <form class="d-flex" @submit.prevent="handleSubmit">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-primary-theme" type="submit">Search</button>
  </form>

  <!-- Toggle switch -->
  <div class="form-check form-switch mt-2 mb-5">
    <input class="form-check-input" type="checkbox" role="switch" checked />
    <label class="form-check-label">Same pickup & return location</label>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {},
  data() {
    return {
      searchQuery: {
        location: {
          from: "",
          to: "",
        },
      },
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style scoped>
/* Override Bootstrap styles for switches */
.form-check-input:focus {
  border-color: var(--main-theme-color);
  outline: 0;
  box-shadow: var(--shadow-color);
}

.form-check-input:checked {
  background-color: var(--main-theme-color);
  border-color: var(--main-theme-color);
}

.form-check-input:not(:checked):focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%237678ED'/%3e%3c/svg%3e");
}
</style>
