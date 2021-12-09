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
            <h6 class="fw-bold">Price Range</h6>
            TODO - slider
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
          </div>
        </div>
      </section>

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

export default {
  name: "Search",
  components: {
    Searchbar,
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
      selectedCar: {

      }
    };
  },
  created() {
    // TODO - get cars from localstorage or json
    // calculate duration based on searchQuery
    console.log('in search created...')
    var searchQuery = JSON.parse(localStorage.getItem("searchQuery"))
    console.log(searchQuery)
    this.searchQuery = searchQuery
  },
  methods: {
    getTotalPrice(carId) {
      let car = this.cars.find((car) => car.id == carId);
      return car.price * this.duration;
    },
    handleOnSearch(searchQuery) {
      // write to localStorage for search page
      this.searchQuery = searchQuery
      localStorage.setItem("searchQuery", JSON.stringify(searchQuery))

      // TODO - update list of cars?
      
    },
    onSubmit(carId) {
      console.log(carId)

      // write to localStorage
      // localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
      this.$router.push({ name: "ReservationReview" });
    },
  },
};
</script>

<style scoped></style>
