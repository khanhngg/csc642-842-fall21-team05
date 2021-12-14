<template>
  <Searchbar
    :rentalMethod="searchQuery.rentalMethod"
    :isSamePickupAndReturnLocation="searchQuery.isSamePickupAndReturnLocation"
    :location="searchQuery.location"
    :pickupLocation="searchQuery.pickupLocation"
    :returnLocation="searchQuery.returnLocation"
    :fromTime="searchQuery.fromTime"
    :toTime="searchQuery.toTime"
    @onSearch="handleOnSearch"
  />

  <!-- Search Results count -->
  <h6 class="fw-bold text-uppercase">Showing 1-10 out of 50 cars</h6>

  <!-- Search Results -->
  <section class="container mb-5">
    <div class="row">
      <!-- Filters -->
      <section class="col-3 p-0">
        <div class="bg-light border rounded-3 p-3">
          <h4 class="fw-bold text-uppercase">Filters</h4>
          <!-- Car types -->
          <div class="mb-3 py-3 border-bottom">
            <h6 class="fw-bold">Car Types</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="sedan"
                id="sedan"
              />
              <label class="form-check-label" for="sedan"> Sedan </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="suv"
                id="suv"
              />
              <label class="form-check-label" for="suv"> SUV </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="truck"
                id="truck"
              />
              <label class="form-check-label" for="truck"> Truck </label>
            </div>
          </div>

          <!-- Capacity -->
          <div class="mb-3 pb-3 border-bottom">
            <h6 class="fw-bold">Capacity</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="moreThan2"
                id="moreThan2"
              />
              <label class="form-check-label" for="moreThan2"> 2+ </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="moreThan4"
                id="moreThan4"
              />
              <label class="form-check-label" for="moreThan4"> 4+ </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="moreThan6"
                id="moreThan6"
              />
              <label class="form-check-label" for="moreThan6"> 6+ </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="moreThan8"
                id="moreThan8"
              />
              <label class="form-check-label" for="moreThan8"> 8+ </label>
            </div>
          </div>

          <!-- Price Range -->
          <div class="mb-3">
            <h6 class="fw-bold mb-3">Price Range</h6>
            <label class="form-label"><small>Min</small></label>
            <div class="input-group mb-3">
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                placeholder="Min"
                v-model="priceRange[0]"
              />
            </div>
            <label class="form-label"><small>Max</small></label>
            <div class="input-group mb-5">
              <span class="input-group-text">$</span>
              <input
                type="number"
                class="form-control"
                placeholder="Min"
                v-model="priceRange[1]"
              />
            </div>
            <Slider v-model="priceRange" :max="1000" />
          </div>
        </div>
      </section>

      <!-- NOTE: Trick to have images on github-pages -->
      <div class="d-none">
        <img src="../assets/car-1.jpg" />
        <img src="../assets/car-2.jpg" />
        <img src="../assets/car-3.jpg" />
        <img src="../assets/car-4.jpg" />
        <img src="../assets/car-5.jpg" />
        <img src="../assets/car-6.jpg" />
        <img src="../assets/car-7.jpg" />
        <img src="../assets/car-8.jpg" />
        <img src="../assets/car-9.jpg" />
        <img src="../assets/car-10.jpg" />
      </div>

      <!-- List of cars -->
      <section class="col-9 pe-0">
        <div v-for="car in cars" :key="car.id" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="`/csc642-842-fall21-team05/img/${car.image}`"
                class="img-fluid rounded-start"
                alt="Car Image"
              />
            </div>
            <div class="col-md-5">
              <div class="card-body">
                <p class="card-title fw-bold fs-6">{{ car.type }}</p>
                <p class="card-title text-uppercase fw-medium fs-5">
                  {{ car.make }} {{ car.model }}
                </p>
                <p>
                  {{ car.seat }} seats
                  <i class="mx-2 fas fa-circle" style="font-size: 7px"></i>
                  {{ car.suitcase }} suitcases
                </p>
                <hr style="max-width: 45px" />
                <p class="card-text">
                  <small class="text-muted">{{ car.description }}</small>
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card-body ps-5">
                <p class="text-end fs-3 fw-bold mb-0">${{ car.price }} / day</p>
                <p class="text-end">
                  <small>${{ getTotalPrice(car.id) }} total</small>
                </p>
                <button
                  type="button"
                  class="
                    mt-4
                    w-100
                    btn btn-primary-theme
                    fw-bold
                    text-uppercase
                  "
                  @click.prevent="onSubmit(car.id)"
                >
                  Rent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Searchbar from "@/components/Searchbar";
import carsData from "../data/carsData.json";
import Slider from "@vueform/slider";

export default {
  name: "Search",
  components: {
    Searchbar,
    Slider,
  },
  data() {
    return {
      cars: carsData,
      // TODO - get from searchbar
      duration: 7,
      searchQuery: {
        rentalMethod: "",
        isSamePickupAndReturnLocation: true,
        location: "",
        pickupLocation: "",
        returnLocation: "",
        fromTime: "",
        toTime: "",
      },
      selectedCar: {},
      priceRange: [200, 500],
    };
  },
  created() {
    var searchQuery = JSON.parse(localStorage.getItem("searchQuery"));
    if (searchQuery) {
      this.searchQuery = searchQuery;
    }
    var selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
    if (selectedCar) {
      this.selectedCar = selectedCar;
    }
    console.log(this.searchQuery);
  },
  methods: {
    getTotalPrice(carId) {
      let car = this.cars.find((car) => car.id == carId);
      return car.price * this.duration;
    },
    handleOnSearch(searchQuery) {
      // write to localStorage for search page
      this.searchQuery = searchQuery;
      localStorage.setItem("searchQuery", JSON.stringify(searchQuery));

      // TODO - update list of cars?
    },
    onSubmit(carId) {
      this.selectedCar = this.cars.find((car) => car.id == carId);

      // write to localStorage
      localStorage.setItem("searchQuery", JSON.stringify(this.searchQuery));
      localStorage.setItem("selectedCar", JSON.stringify(this.selectedCar));
      this.$router.push({ name: "ReservationReview" });
    },
  },
};
</script>

<style scoped></style>
<style src="@vueform/slider/themes/default.css"></style>
