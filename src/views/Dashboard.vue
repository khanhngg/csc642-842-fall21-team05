<template>
  <div class="container mb-3">
    <div class="row">
      <div class="col-sm-10 col-12">
        <h4 class="fw-bold">AVAILABLE RENTAL CARS</h4>
      </div>
      <div class="col-sm-2 col-12">
        <button
          type="button"
          id="addButton"
          class="btn btn-primary-theme pull-right text-uppercase fw-bold"
          @click.prevent="onAdd"
        >
          Add A Car
        </button>
      </div>
    </div>
  </div>
  <!-- add edit and delete on each car -->
  <div class="container">
    <section class="container mb-5">
      <div class="row">
        <!-- Filters -->
        <section class="row form-section mb-4">
          <div class="rounded-3 p-3">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="text"
                v-model="search"
                id="searchId"
                placeholder="Search By Vehicle ID"
              />
            </form>
            <h5 class="fw-bold mt-5">Filters</h5>
            <div class="d-flex justify-content-between">
              <div class="flex-grow-1 mb-3 me-3">
                <select class="form-select" v-model="searchtime">
                  <option value="">Filter By Added Year</option>
                  <option
                    v-for="year in years().slice().reverse()"
                    :key="year"
                    :value="year"
                  >
                    {{ year }}
                  </option>
                </select>
              </div>
              <div class="flex-grow-1 mb-3 me-3">
                <select class="form-select" v-model="searchmake" id="searchmake">
                  <option value="">Filter By Make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Tesla">Tesla</option>
                </select>
              </div>
              <div class="flex-grow-1 mb-3">
                <select class="form-select" v-model="searchprice">
                  <option value="">Filter By Price</option>
                  <option value="0-100">$0-$100</option>
                  <option value="100-200">$100-$200</option>
                  <option value="200-300">$200-$300</option>
                  <option value=">300">$300+</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <!-- List of cars -->
        <h6 v-if="filteredList.length > 0" class="fw-bold text-uppercase">
          Showing {{ getShowingCount(filteredList.length) }} out of
          {{ filteredList.length }} cars
        </h6>
        <h6 v-else class="fw-bold text-uppercase">No cars found</h6>
        <section class="col-9 pe-0">
          <div v-for="car in filteredList" :key="car.id" class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 p-2">
                <img
                  :src="`/csc642-842-fall21-team05/img/${car.image}`"
                  class="img-fluid rounded"
                  alt="Car Image"
                />
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <p class="card-title fw-bold fs-6">Car ID: {{ car.id }}</p>
                  <p class="card-title fw-bold fs-6">{{ car.type }}</p>
                  <p class="card-title text-uppercase fw-medium fs-5">
                    {{ car.make }} {{ car.model }}
                  </p>
                  <p class="">
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
                  <p class="text-end fs-3 fw-bold mb-0">
                    ${{ car.price }} / day
                  </p>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-end p-4">
                <button
                  class="btn btn-secondary-theme text-uppercase fw-bold me-3"
                  @click="onDelete(car.id)"
                >
                  Delete
                </button>
                <router-link
                  class="btn btn-primary-theme text-uppercase fw-bold"
                  :to="{ name: 'Edit', params: { id: car.id } }"
                >
                  Edit
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import carsData from "../data/carsData.json";

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
      cars: carsData,
      search: "",
      searchtime: "",
      searchmake: "",
      searchprice: "",
    };
  },
  computed: {
    filteredList() {
      return this.cars.filter((car) => {
        return (
          car.id.toString().includes(this.search) &&
          car.addtime.toString().includes(this.searchtime.toString()) &&
          car.make.toLowerCase().includes(this.searchmake.toLowerCase()) &&
          car.price
            .toString()
            .includes(this.findPrice(car.price, this.searchprice))
        );
      });
    },
  },
  methods: {
    onAdd: function () {
      this.$router.push({ name: "AddForm" });
    },
    async onDelete(carId) {
      this.cars = this.cars.filter((car) => car.id != carId);
      localStorage.setItem("cars", JSON.stringify(this.cars));
    },
    findPrice: function (price, searchprice) {
      if (searchprice == "") {
        return price;
      }
      if (searchprice == "0-100") {
        if (price > 0 && price <= 100) {
          return price;
        } else {
          return -1;
        }
      }
      if (searchprice == "100-200") {
        if (price > 100 && price <= 200) {
          return price;
        } else {
          return -1;
        }
      }
      if (searchprice == "200-300") {
        if (price > 200 && price <= 300) {
          return price;
        } else {
          return -1;
        }
      }
      if (searchprice == ">300") {
        if (price > 300) {
          return price;
        } else {
          return -1;
        }
      }
    },
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 2009 },
        (value, index) => 2010 + index
      );
    },
    getShowingCount(length) {
      if (length > 1) {
        return `1-${length}`;
      } else {
        return "1";
      }
    },
  },
  async created() {
    // parse local storage to get form data
    var cars = JSON.parse(localStorage.getItem("cars"));
    if (cars) {
      this.cars = cars;
    } else {
      localStorage.setItem("cars", JSON.stringify(this.cars));
    }
  },
};
</script>
