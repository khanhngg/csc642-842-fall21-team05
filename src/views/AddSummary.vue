<template>
  <div class="container form-container form-section margin-auto">
    <div class="d-flex mb-3">
      <h3 class="text-left fw-bold">SUMMARY OF ADDED CAR</h3>
      <div class="ms-auto p-2">
        <router-link :to="{ name: 'Edit', params: { id: car.id } }">
          <button class="btn btn-primary-theme fw-bold">EDIT</button>
        </router-link>
      </div>
    </div>

    <section class="mb-4">
      <div class="clearfix">
        <img
          src="../assets/deal-image-1.jpg"
          alt="car image"
          class="float-left mr-2 rounded img-max"
        />
        <div class="mt-3 mb-3">
          <p class="fw-bold">Car ID: {{ this.car.id }}</p>
        </div>
        <div class="mb-3">
          <p class="fw-bold mb-0">Car Details:</p>
          <p class="mb-1">
            {{ this.car.make }} {{ getModel }} {{ this.car.year }}
          </p>
          <p class="mb-1">{{ this.car.type }} {{ this.car.fuel }}</p>
          <p class="mb-1">MPG: {{ this.car.mpg }}</p>
        </div>
        <div class="mb-3">
          <p class="fw-bold mb-0">Car Features:</p>
          <p>
            {{ this.car.door }} doors . {{ this.car.seat }} seats .
            {{ this.car.suitcase }} suitcase(s)
          </p>
        </div>
        <div class="mb-3">
          <p class="fw-bold mb-0">Add-ons:</p>
          <ul v-if="getAddon.length > 0">
            <li v-for="addon in getAddon" :key="addon.name">
              {{ addon.value }}
            </li>
          </ul>
          <span v-else>No add-ons</span>
        </div>
        <div class="mb-3">
          <p class="fw-bold mb-0">Description:</p>
          <span class="fw-normal">{{ this.car.description }}</span>
        </div>
      </div>

      <div class="mt-5 d-flex justify-content-between">
        <button class="btn btn-secondary-theme fw-bold" @click="onDash">
          GO TO DASHBOARD
        </button>

        <button class="btn btn-primary-theme fw-bold" @click="onAdd">
          ADD ANOTHER CAR
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      car: {
        id: "",
        make: "",
        model: "",
        year: "",
        type: "",
        fuel: "",
        mpg: "",
        door: "",
        seat: "",
        suitcase: "",
        addon: [],
        image: "",
        price: "",
        description: "",
        addtime: "",
      },
      cars: [],
      model: [
        {
          name: "Camry",
          value: "Camry",
        },
        {
          name: "RAV4",
          value: "RAV4",
        },
        {
          name: "Civic",
          value: "Civic",
        },
        {
          name: "Pilot",
          value: "Pilot",
        },
        {
          name: "911",
          value: "911",
        },
        {
          name: "Cayenne",
          value: "Cayenne",
        },
        {
          name: "model-x",
          value: "Model X",
        },
        {
          name: "model-s",
          value: "Model S",
        },
      ],
      addon: [
        {
          name: "Air-Condition",
          value: "Air Condition",
        },
        {
          name: "Enhance-Cleaning",
          value: "Enhance Cleaning",
        },
        {
          name: "Free-Second-Driver",
          value: "Free Second Driver",
        },
        {
          name: "Unlimited-Mileage",
          value: "Unlimited Mileage",
        },
      ],
    };
  },
  computed: {
    getModel() {
      return this.model.find((model) => model.name === this.car.model)?.value;
    },
    getAddon() {
      return this.addon.filter((addon) => this.car.addon.includes(addon.name));
    },
  },
  methods: {
    onAdd: function () {
      this.$router.push({ name: "AddForm" });
    },
    onDash: function () {
      this.$router.push({ name: "Dashboard" });
    },
  },
  async created() {
    // parse local storage to get form data
    this.cars = JSON.parse(localStorage.getItem("cars"));
    this.car = this.cars[this.cars.length - 1];
  },
};
</script>

<style scoped>
.img-max {
  max-width: 300px;
  width: 100%;
}
</style>
