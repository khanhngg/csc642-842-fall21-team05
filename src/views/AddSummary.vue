<template>
  <div class="container form-container bg-info bg-opacity-10">
    <div class="d-flex bd-highlight mb-3">
      <h3 class="text-left mb-5">SUMMARY OF ADDED CAR</h3>
      <div class="ms-auto p-2 bd-highlight">
        <button class="btn btn-primary" @click="onEdit">EDIT</button>
      </div>
    </div>

    <section class="mb-4 form-section">
      <div class="clearfix">
        <img
          src="../assets/logo.png"
          alt="car image"
          class="float-left mr-2 rounded"
        />
        <div class="mb-2">
          <p>ID: {{ this.car.id }}</p>
        </div>
        <div class="mb-2">
          <p>{{ this.car.make }} {{ getModel }} {{ this.car.year }}</p>
        </div>
        <div class="mb-2">
          <p>{{ this.car.type }} {{ this.car.fuel }}</p>
        </div>
        <div class="mb-2">
          <p>MPG: {{ this.car.mpg }}</p>
        </div>
        <div class="mb-2">
          <p>
            {{ this.car.door }} doors . {{ this.car.seat }} seats .
            {{ this.car.suitcase }} suitcase(s)
          </p>
        </div>
        <div class="mb-2">
          <ul v-if="getAddon.length > 0">
            <li v-for="addon in getAddon" :key="addon.name">
              {{ addon.value }}
            </li>
          </ul>
        </div>
        <div class="mb-2">
          <p>{{ this.car.description }}</p>
        </div>
      </div>

      <div class="d-flex bd-highlight mb-3">
        <div class="ms-auto p-2 bd-highlight">
          <button class="btn btn-outline-dark" @click="onDash">
            GO TO DASHBOARD
          </button>
        </div>

        <div class="ms-auto p-2 bd-highlight">
          <button class="btn btn-primary" @click="onAdd">
            ADD ANOTHER CAR
          </button>
        </div>
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
    onEdit: function () {
      this.$router.push("addform");
    },
    onAdd: function () {
      this.$router.push("addform");
    },
    onDash: function () {
      this.$router.push("dashboard");
    },
  },
  async mounted() {
    // parse local storage to get form data
    this.cars = JSON.parse(localStorage.getItem("cars"));
    this.car = this.cars[this.cars.length - 1];
  },
};
</script>
