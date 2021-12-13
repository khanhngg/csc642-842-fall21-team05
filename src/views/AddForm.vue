<template>
  <div class="container form-container">
    <h1 class="text-center fw-bold text-uppercase">Add a car</h1>
    <p class="form-text fw-bold mb-4">* Required to add a car</p>
    <form class="g-3" novalidate>
      <section class="row form-section mb-4">
        <h4 class="fw-bold">CAR DETAILS</h4>
        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Make *</label>
            <select
              v-model="car.make"
              class="form-select"
              :class="{ 'invalid-field': v$.car.make.$error }"
              required
            >
              <option disabled value="">Select vehicle make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Porsche">Porsche</option>
              <option value="Tesla">Tesla</option>
            </select>
            <div v-if="v$.car.make.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.make.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
            <p class="form-text mb-0">
              <strong>Make:</strong> The brand of the vehicle e.g. Honda
            </p>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Model *</label>
            <select
              class="form-select"
              :disabled="isDisabled"
              v-model="car.model"
              :class="{ 'invalid-field': v$.car.model.$error }"
              required
            >
              <option
                v-for="option in setModels"
                :key="option.val"
                :value="option.val"
              >
                {{ option.text }}
              </option>
            </select>
            <div v-if="v$.car.model.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.model.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
            <p class="form-text mb-0">
              <strong>Model:</strong> The name of a car product e.g. Civic
            </p>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Year *</label>
            <select
              class="form-select"
              v-model="car.year"
              :class="{ 'invalid-field': v$.car.year.$error }"
              required
            >
              <option disabled value="">Select vehicle year</option>
              <option
                v-for="year in years.slice().reverse()"
                :key="year"
                :value="year"
              >
                {{ year }}
              </option>
            </select>
            <div v-if="v$.car.year.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.year.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
            <p class="form-text mb-0">
              <strong>Year:</strong> Year of manufacture
            </p>
          </div>
        </div>

        <div class="col-12 mb-3">
          <label class="form-label">Type *</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="car.type"
              value="Hatchback"
              :class="{ 'invalid-field': v$.car.type.$error }"
              required
              id="Hatchback"
            />
            <label class="form-check-label" for="Hatchback">Hatchback</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="car.type"
              value="Sedan"
              :class="{ 'invalid-field': v$.car.type.$error }"
              required
              id="Sedan"
            />
            <label class="form-check-label" for="Sedan">Sedan</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="car.type"
              value="SUV"
              :class="{ 'invalid-field': v$.car.type.$error }"
              required
              id="SUV"
            />
            <label for="SUV" class="form-check-label">SUV</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="car.type"
              value="Convertible"
              :class="{ 'invalid-field': v$.car.type.$error }"
              required
              id="Convertible"
            />
            <label for="Convertible" class="form-check-label"
              >Convertible</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="car.type"
              value="Coupe"
              :class="{ 'invalid-field': v$.car.type.$error }"
              required
              id="Coupe"
            />
            <label for="Coupe" class="form-check-label">Coupe</label>
          </div>
          <div v-if="v$.car.type.$error">
            <p
              :key="error.$uid"
              v-for="error in v$.car.type.$errors"
              class="mb-0 invalid-message"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Fuel Type *</label>
            <select
              class="form-select"
              v-model="car.fuel"
              :class="{ 'invalid-field': v$.car.fuel.$error }"
              required
            >
              <option disabled value="">Select vehicle fuel type</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Bio-diesel">Bio-diesel</option>
              <option value="Ethanol">Ethanol</option>
              electric
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <div v-if="v$.car.fuel.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.fuel.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">MPG *</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter miles per gallon"
              v-model="car.mpg"
              :class="{ 'invalid-field': v$.car.mpg.$error }"
              required
            />
            <div v-if="v$.car.mpg.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.mpg.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="row form-section mb-4">
        <h4 class="fw-bold">CAR FEATURES</h4>
        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Door No *</label>
            <select
              class="form-select"
              v-model="car.door"
              :class="{ 'invalid-field': v$.car.door.$error }"
              required
            >
              <option disabled value="">Select door numbers</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </select>
            <div v-if="v$.car.door.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.door.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Seat No *</label>
            <select
              class="form-select"
              v-model="car.seat"
              :class="{ 'invalid-field': v$.car.seat.$error }"
              required
            >
              <option disabled value="">Select seat numbers</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <div v-if="v$.car.seat.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.seat.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Suitcase No *</label>
            <select
              class="form-select"
              v-model="car.suitcase"
              :class="{ 'invalid-field': v$.car.suitcase.$error }"
              required
            >
              <option disabled value="">Select suitcase numbers</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div v-if="v$.car.suitcase.$error">
              <p
                :key="error.$uid"
                v-for="error in v$.car.suitcase.$errors"
                class="mb-0 invalid-message"
              >
                {{ error.$message }}
              </p>
            </div>
            <p class="form-text mb-0">
              <strong>Suitcase No:</strong> Numbers of suitcases fit in a car
            </p>
          </div>
        </div>
      </section>

      <section class="row form-section mb-4">
        <h4 class="fw-bold">ADD-ON</h4>
        <div class="col-12 mb-3">
          <label class="form-label">Check if Satisfied</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Air-Condition"
              v-model="car.addon"
              id="Air-Condition"
            />
            <label class="check-label" for="Air-Condition">Air Condition</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Enhance-Cleaning"
              v-model="car.addon"
              id="Enhance-Cleaning"
            />
            <label class="check-label" for="Enhance-Cleaning"
              >Enhance Cleaning</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Free-Second-Driver"
              v-model="car.addon"
              id="Free-Second-Driver"
            />
            <label class="check-label" for="Free-Second-Driver"
              >Free Second Driver</label
            >
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Unlimited-Mileage"
              v-model="car.addon"
              id="Unlimited-Mileage"
            />
            <label class="check-label" for="Unlimited-Mileage"
              >Unlimited Mileage</label
            >
          </div>
        </div>

        <div class="col-12 mb-3">
          <label for="formFile" class="form-label">Add Pictures of car</label>
          <div v-if="!car.image">
            <p>Select an image</p>
            <input
              class="form-control"
              type="file"
              @change="onFileChange"
              id="formFile"
            />
          </div>
          <div v-else>
            <div>
              <img class="img-max" :src="car.image" />
            </div>
            <div>
              <button class="btn btn-secondary-theme" @click="removeImage">
                Remove image
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 mb-3">
          <div class="col-4">
            <label class="form-label">Price *</label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                min="0.00"
                step="0.01"
                placeholder="0.00"
                v-model="car.price"
                :class="{ 'invalid-field': v$.car.price.$error }"
                required
              />
              <div v-if="v$.car.price.$error">
                <p
                  :key="error.$uid"
                  v-for="error in v$.car.price.$errors"
                  class="mb-0 invalid-message"
                >
                  {{ error.$message }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mb-3">
          <label class="form-label">Description</label>
          <textarea
            type="text"
            class="form-control"
            rows="3"
            placeholder="Add more description of the car"
            v-model="car.description"
          ></textarea>
        </div>
      </section>

      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <button
            class="btn btn-secondary-theme text-uppercase fw-bold"
            @click.prevent="onCancel"
          >
            Cancel
          </button>
        </div>

        <div class="p-2 bd-highlight">
          <button
            class="btn btn-primary-theme text-uppercase fw-bold"
            type="button"
            @click.prevent="onSubmit"
          >
            Submit
          </button>
        </div>

        <div class="ms-auto p-2 bd-highlight">
          <button
            class="btn btn-secondary-theme text-uppercase fw-bold"
            @click.prevent="onClear"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minValue } from "@vuelidate/validators";
import carsData from "../data/carsData.json";

export default {
  data() {
    return {
      v$: useVuelidate(),
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
        image: "", //generate random image in assets
        price: "",
        description: "",
        addtime: "",
      },
      cars: carsData,
    };
  },

  validations() {
    return {
      car: {
        make: {
          required,
        },
        model: {
          required,
        },
        year: {
          required,
        },
        type: {
          required,
        },
        fuel: {
          required,
        },
        mpg: {
          minValue: minValue(0),
          required,
        },
        door: {
          required,
        },
        seat: {
          required,
        },
        suitcase: {
          required,
        },
        price: {
          minValue: minValue(0),
          required,
        },
      },
    };
  },
  computed: {
    isDisabled() {
      return !this.car.make;
    },
    setModels() {
      var options = null;
      if (this.car.make === "Toyota") {
        options = [
          { val: "", text: "Select vehicle model" },
          { val: "Camry", text: "Camry" },
          { val: "RAV4", text: "RAV4" },
        ];
      } else if (this.car.make === "Honda") {
        options = [
          { val: "", text: "Select vehicle model" },
          { val: "Civic", text: "Civic" },
          { val: "Pilot", text: "Pilot" },
        ];
      } else if (this.car.make === "Porsche") {
        options = [
          { val: "", text: "Select vehicle model" },
          { val: "911", text: "911" },
          { val: "Cayenne", text: "Cayenne" },
        ];
      } else if (this.car.make === "Tesla") {
        options = [
          { val: "", text: "Select vehicle model" },
          { val: "model-x", text: "Model X" },
          { val: "model-s", text: "Model S" },
        ];
      }
      return options;
    },
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 2009 },
        (value, index) => 2010 + index
      );
    },
  },
  created() {
    var cars = JSON.parse(localStorage.getItem("cars"));
    if (cars) {
      this.cars = cars;
    } else {
      localStorage.setItem("cars", JSON.stringify(this.cars));
    }
  },
  methods: {
    onCancel() {
      if (confirm("Your page is not saved. Are you sure you want to leave?")) {
        this.$nextTick(() => {
          this.v$.$reset();
        });
        this.$router.push({ name: "Dashboard" });
      }
    },
    onClear() {
      this.car.id = "";
      this.car.make = "";
      this.car.model = "";
      this.car.year = "";
      this.car.type = "";
      this.car.fuel = "";
      this.car.mpg = "";
      this.car.door = "";
      this.car.seat = "";
      this.car.suitcase = "";
      this.car.addon = [];
      this.car.image = "";
      this.car.price = "";
      this.car.description = "";
      this.$nextTick(() => {
        this.v$.$reset();
      });
    },
    async onSubmit() {
      await this.v$.$touch();
      if (!this.v$.$invalid) {
        if (this.cars.length > 0) {
          var lastCar = this.cars[this.cars.length - 1];
          this.car.id = lastCar.id + 1;
        } else {
          this.card.id = 0;
        }
        if (!this.car.addtime) {
          this.car.addtime = new Date().getFullYear();
        }
        this.cars.push(this.car);
        localStorage.setItem("cars", JSON.stringify(this.cars));

        this.$router.push({ name: "AddSummary" });
      } else {
        return;
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.car.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.car.image = "";
    },
  },
};
</script>

<style scoped>
.form-section {
  padding: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 1px;
  border-radius: 0.25rem;
  border: solid #dee2e6;
  border-width: 1px;
}
.invalid-message {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-field {
  border-color: #dc3545;
}

.invalid-field:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgb(220 53 69 / 25%);
}

.img-max {
  max-width: 300px;
  width: 100%;
}
</style>
