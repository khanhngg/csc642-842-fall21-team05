<template>
  <!-- Pickup/Delivery option -->
  <div class="mb-2" v-if="showModeSwitch">
    <label class="fw-bold fs-6 me-3">Choose a Mode:</label>
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
  <div class="d-flex form-control" :class="{ 'small-height': isSmall }">
    <!-- Pickup location -->
    <div
      v-if="searchQuery.isSamePickupAndReturnLocation"
      class="flex-grow-1"
      :class="isSmall ? 'p-0' : 'p-2'"
    >
      <label class="fw-bold" :class="{ 'small-font': isSmall }">
        Pickup/Return Location
      </label>
      <input
        :class="{ 'small-font small-input': isSmall }"
        v-model="searchQuery.location"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Enter address, city, or zip code"
      />
    </div>

    <div
      v-if="!searchQuery.isSamePickupAndReturnLocation"
      class="flex-grow-1"
      :class="isSmall ? 'p-0' : 'p-2'"
    >
      <label class="fw-bold" :class="{ 'small-font': isSmall }">
        Pickup Location
      </label>
      <input
        :class="{ 'small-font small-input': isSmall }"
        v-model="searchQuery.pickupLocation"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Enter address, city, or zip code"
      />
    </div>

    <!-- return location -->
    <div
      v-if="!searchQuery.isSamePickupAndReturnLocation"
      class="flex-grow-1"
      :class="isSmall ? 'p-0' : 'p-2'"
    >
      <label class="fw-bold" :class="{ 'small-font': isSmall }">
        Return Location
      </label>
      <input
        :class="{ 'small-font small-input': isSmall }"
        v-model="searchQuery.returnLocation"
        class="form-control input-no-border me-2"
        type="text"
        placeholder="Enter address, city, or zip code"
      />
    </div>

    <!-- datepicker -->
    <div class="p-2 flex-grow-2">
      <DatePicker v-model="range" mode="dateTime" :masks="masks" is-range>
        <template v-slot="{ inputValue, inputEvents }">
          <div class="d-flex">
            <!-- from time -->
            <div class="flex-grow-1 me-2">
              <div class="d-flex flex-column">
                <label class="fw-bold" :class="{ 'small-font': isSmall }">
                  From
                </label>
                <input
                  :class="{ 'small-font small-input': isSmall }"
                  class="flex-grow-1 form-control input-no-border text-center"
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                />
              </div>
            </div>

            <!-- to time -->
            <div class="flex-grow-1">
              <div class="d-flex flex-column">
                <label class="fw-bold" :class="{ 'small-font': isSmall }">
                  To
                </label>
                <input
                  :class="{ 'small-font small-input': isSmall }"
                  class="flex-grow-1 form-control input-no-border text-center"
                  :value="inputValue.end"
                  v-on="inputEvents.end"
                />
              </div>
            </div>
          </div>
        </template>
      </DatePicker>
    </div>

    <!-- submit btn -->
    <div class="p-2 flex-grow-3 align-self-center text-center">
      <button
        :class="{ 'small-font': isSmall }"
        class="btn btn-primary-theme fw-bold text-uppercase"
        type="submit"
        @click.prevent="handleSubmit"
      >
        Search
      </button>
    </div>
  </div>

  <!-- Toggle switch -->
  <div class="form-check form-switch mt-2 mb-5" v-if="showToggle">
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
import { DatePicker } from "v-calendar";

export default {
  name: "Searchbar",
  components: {
    DatePicker,
  },
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    showModeSwitch: {
      type: Boolean,
      default: true,
    },
    showToggle: {
      type: Boolean,
      default: true,
    },
    rentalMethod: {
      type: String,
      default: "pickup",
    },
    isSamePickupAndReturnLocation: {
      type: Boolean,
      default: true,
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
  emits: ["onSearch"],
  data() {
    return {
      range: {
        start: this.fromTime ? new Date(this.fromTime) : new Date(),
        end: this.toTime
          ? new Date(this.toTime)
          : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // default is 1 week from today
      },
      masks: {
        input: "YYYY-MM-DD h:mm A",
      },
      searchQuery: {
        rentalMethod: this.rentalMethod,
        isSamePickupAndReturnLocation: this.isSamePickupAndReturnLocation,
        location: this.location,
        pickupLocation: this.pickupLocation,
        returnLocation: this.returnLocation,
        fromTime: "",
        toTime: "",
      },
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      this.searchQuery.fromTime = this.range.start.toString();
      this.searchQuery.toTime = this.range.end.toString();

      this.$emit("onSearch", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.small-height {
  height: 3.5rem;
  padding-top: 0;
  padding-bottom: 0;
}

.small-font {
  font-size: 0.7rem;
}

.small-input {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
}
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
