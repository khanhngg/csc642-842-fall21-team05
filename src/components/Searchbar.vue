<template>
  <!-- Pickup/Delivery option -->
  <div class="mb-2">
    <input
      type="radio"
      class="btn-check"
      id="pickup"
      autocomplete="off"
      v-model="searchQuery.rentalMethod"
      value="pickup"
    />
    <label
      class="btn btn-primary-theme text-uppercase fw-bold me-2"
      for="pickup"
      >Pickup</label
    >

    <input
      type="radio"
      class="btn-check"
      id="delivery"
      autocomplete="off"
      v-model="searchQuery.rentalMethod"
      value="delivery"
    />
    <label class="btn btn-primary-theme text-uppercase fw-bold" for="delivery"
      >Delivery</label
    >
  </div>

  <!-- Search bar -->
  <div class="d-flex form-control">
    <!-- Pickup location -->
    <div
      v-if="searchQuery.isSamePickupAndReturnLocation"
      class="p-2 flex-grow-1 bd-highlight"
    >
      <label class="fw-bold">Pickup/Return Location</label>
      <input
        v-model="searchQuery.location"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Enter address, city, or zip code"
      />
    </div>

    <div
      v-if="!searchQuery.isSamePickupAndReturnLocation"
      class="p-2 flex-grow-1 bd-highlight"
    >
      <label class="fw-bold">Pickup Location</label>
      <input
        v-model="searchQuery.pickupLocation"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Enter address, city, or zip code"
      />
    </div>

    <!-- return location -->
    <div
      v-if="!searchQuery.isSamePickupAndReturnLocation"
      class="p-2 flex-grow-1 bd-highlight"
    >
      <label class="fw-bold">Return Location</label>
      <input
        v-model="searchQuery.returnLocation"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Enter address, city, or zip code"
      />
    </div>

    <!-- from time -->
    <div class="p-2 flex-grow-2 bd-highlight">
      <label class="fw-bold">From</label>
      <input
        v-model="searchQuery.fromTime"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>

    <!-- to time -->
    <div class="p-2 flex-grow-2 bd-highlight">
      <label class="fw-bold">To</label>
      <input
        v-model="searchQuery.toTime"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>

    <!-- submit btn -->
    <div class="p-2 flex-grow-3 align-self-center text-center">
      <button
        class="btn btn-primary-theme"
        type="submit"
        @click.prevent="handleSubmit"
      >
        Search
      </button>
    </div>
  </div>

  <!-- Toggle switch -->
  <div class="form-check form-switch mt-2 mb-5">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      v-model="searchQuery.isSamePickupAndReturnLocation"
    />
    <label class="form-check-label">Same pickup & return location</label>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    rentalMethod: {
      type: String,
      default: "pickup"
    },
    isSamePickupAndReturnLocation: {
      type: Boolean,
      default: true
    },
    location: {
      type: String,
    },
    pickupLocation: {
      type: String,
    },
    returnLocation: {
      type: String,
    },
    fromTime: {
      type: String,
    },
    toTime: {
      type: String,
    },
  },
  emits: ['onSearch'],
  data() {
    return {
      searchQuery: {
        rentalMethod: this.rentalMethod,
        isSamePickupAndReturnLocation: this.isSamePickupAndReturnLocation,
        location: this.location,
        pickupLocation: this.pickupLocation,
        returnLocation: this.returnLocation,
        fromTime: this.fromTime,
        toTime: this.toTime,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("onSearch", this.searchQuery);
    },
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

/* Custom search bar input */
.input-no-border {
  border: 0px;
  border-bottom: 1px #ced4da solid;
  border-radius: 0;
  box-shadow: none !important;
}

.input-no-border:focus {
  border-color: var(--secondary-theme-color);
}

/* Override bootstrap styles for button radio */
.btn-check:active + .btn-primary-theme,
.btn-check:checked + .btn-primary-theme {
  color: var(--white);
  background-color: var(--main-theme-color);
}

.btn-check:focus + .btn-primary-theme {
  border-color: var(--main-theme-color);
  outline: 0;
  box-shadow: var(--shadow-color);
}

.btn-check + .btn-primary-theme,
.btn-check + .btn-primary-theme {
  color: var(--secondary-theme-color);
  background-color: var(--white);
  border: 0;
}
</style>
