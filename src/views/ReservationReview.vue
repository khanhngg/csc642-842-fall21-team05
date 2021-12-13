<template>
  <section class="review-container container mb-5">
    <div class="row">
      <!-- Left panel: user info form -->
      <div class="col-7">
        <!-- Log in -->
        <section v-if="!isLoggedIn" class="form-section mb-3">
          <div v-if="showLogIn" class="row">
            <h4 class="text-uppercase fw-bold">Account Information</h4>
            <p class="form-text">Have an account? Log in for faster booking!</p>
            <div class="col-12 mb-3">
              <label class="form-label">Email Address</label>
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div class="col-12 mb-3">
              <label class="form-label">Password</label>
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-4">
                <button
                  type="button"
                  class="w-100 btn btn-secondary-theme fw-bold text-uppercase"
                  @click.prevent="onContinueAsGuest"
                >
                  Continue as Guest
                </button>
              </div>
              <div class="col-4 ms-3">
                <button
                  type="button"
                  class="w-100 btn btn-primary-theme fw-bold text-uppercase"
                  @click.prevent="onLogIn"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <div class="d-flex justify-content-between">
              <h6 class="text-uppercase fw-bold section-header-inactive">
                Account Information
              </h6>
              <button
                type="button"
                class="btn btn-secondary-theme fw-bold text-uppercase"
                @click.prevent="onEditLogIn"
              >
                Edit
              </button>
            </div>
            <p v-if="form.email && form.password" class="mb-0">
              {{ form.email }}
            </p>
          </div>
        </section>

        <!-- Basic info -->
        <section class="form-section mb-3">
          <div v-if="showBasicInfo" class="row">
            <h4 class="text-uppercase fw-bold">Basic Info</h4>
            <p class="form-text fw-bold fst-italic mb-4">
              Required fields are marked with *
            </p>
            <div class="col-sm-6 mb-3">
              <label class="form-label">First Name *</label>
              <input
                v-model="form.firstName"
                type="text"
                class="form-control"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div class="col-sm-6 mb-3">
              <label class="form-label">Last Name *</label>
              <input
                v-model="form.lastName"
                type="text"
                class="form-control"
                placeholder="Enter your last name"
              />
            </div>
            <div class="col-sm-6 mb-3">
              <label class="form-label">Age *</label>
              <select v-model="age" class="form-select">
                <option value="">Select driver's age...</option>
                <option value="25OrOlder">25+</option>
                <option value="lessThan25">Less than 25</option>
              </select>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6">
                <button
                  type="button"
                  class="w-100 btn btn-primary-theme fw-bold text-uppercase"
                  @click.prevent="onContinueToContact"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <div class="d-flex justify-content-between">
              <h6 class="text-uppercase fw-bold section-header-inactive">
                Basic Info
              </h6>
              <button
                type="button"
                class="btn btn-secondary-theme fw-bold text-uppercase"
                @click.prevent="onEditBasicInfo"
              >
                Edit
              </button>
            </div>
            <p v-if="form.firstName && form.lastName" class="mb-0">
              {{ form.firstName }} {{ form.lastName }}
            </p>
            <p v-if="age" class="mb-0">Age: {{ getReadableAge(age) }}</p>
          </div>
        </section>

        <!-- Contact info -->
        <section class="form-section mb-3">
          <div v-if="showContactInfo" class="row">
            <h4 v-if="showContactInfo" class="text-uppercase fw-bold">
              Contact Info
            </h4>
            <p class="form-text fw-bold fst-italic mb-4">
              Required fields are marked with *
            </p>
            <div class="col-12 mb-3">
              <label class="form-label">Phone Number *</label>
              <input
                v-model="form.phone"
                type="text"
                class="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div class="col-12 mb-3">
              <label class="form-label">Email Address *</label>
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6">
                <button
                  type="button"
                  class="w-100 btn btn-primary-theme fw-bold text-uppercase"
                  @click.prevent="onContinueToPayment"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <div class="d-flex justify-content-between">
              <h6 class="text-uppercase fw-bold section-header-inactive">
                Contact Info
              </h6>
              <button
                type="button"
                class="btn btn-secondary-theme fw-bold text-uppercase"
                @click.prevent="onEditContactInfo"
              >
                Edit
              </button>
            </div>
            <p v-if="form.phone" class="mb-0">Phone: {{ form.phone }}</p>
            <p v-if="form.email" class="mb-0">Email: {{ form.email }}</p>
          </div>
        </section>

        <!-- Payment info -->
        <section class="form-section mb-3">
          <div v-if="showPaymentInfo" class="row">
            <h4 class="text-uppercase fw-bold">Payment Info</h4>
            <p class="form-text fw-bold fst-italic mb-4">
              Required fields are marked with *
            </p>
            <div class="col-12 mb-3">
              <div class="form-check form-check-inline">
                <input
                  v-model="payWhen"
                  class="form-check-input"
                  type="radio"
                  id="payNow"
                  value="payNow"
                />
                <label class="form-check-label" for="payNow">Pay now</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  v-model="payWhen"
                  class="form-check-input"
                  type="radio"
                  id="payAtCounter"
                  value="payAtCounter"
                />
                <label class="form-check-label" for="payAtCounter"
                  >Pay at counter</label
                >
              </div>
            </div>
            <div v-if="payWhen == 'payNow'" class="col-12 mb-3">
              <label class="form-label">Name on Card *</label>
              <input
                v-model="cardInfo.nameOnCard"
                type="text"
                class="form-control"
                placeholder="Enter the name on card"
                required
              />
            </div>
            <div v-if="payWhen == 'payNow'" class="col-12 mb-3">
              <label class="form-label">Card Number *</label>
              <input
                v-model="cardInfo.cardNumber"
                type="text"
                class="form-control"
                placeholder="Enter the card number"
              />
            </div>
            <div v-if="payWhen == 'payNow'" class="row">
              <label class="form-label mb-0">Expiration Date</label>
              <div class="col-4 mb-1 mt-0">
                <div class="form-text">Month *</div>
                <select class="form-select">
                  <option value="">Select month...</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div class="col-4 mb-3 mt-0">
                <div class="form-text">Year *</div>
                <select class="form-select">
                  <option value="">Select year...</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                </select>
              </div>
            </div>
            <div v-if="payWhen == 'payNow'" class="col-4 mb-3">
              <label class="form-label">Security Code *</label>
              <input
                v-model="cardInfo.securityCode"
                type="text"
                class="form-control"
                placeholder="Enter the security code"
              />
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6">
                <button
                  type="button"
                  class="w-100 btn btn-primary-theme fw-bold text-uppercase"
                  @click.prevent="onContinueToBillingAddress"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div v-else class="row">
            <div class="d-flex justify-content-between">
              <h6 class="text-uppercase fw-bold section-header-inactive">
                Payment Info
              </h6>
              <button
                type="button"
                class="btn btn-secondary-theme fw-bold text-uppercase"
                @click.prevent="onEditPaymentInfo"
              >
                Edit
              </button>
            </div>
            <p
              v-if="
                payWhen == 'payNow' &&
                cardInfo.cardNumber &&
                cardInfo.expiration
              "
              class="mb-0"
            >
              <span v-if="cardInfo.cardNumber">{{ cardInfo.cardNumber }}</span>
              <br />
              <span
                v-if="
                  cardInfo.expiration &&
                  cardInfo.expiration.month &&
                  cardInfo.expiration.year
                "
              >
                Exp: {{ cardInfo.expiration.month }}/{{
                  cardInfo.expiration.year
                }}
              </span>
            </p>
            <p v-else-if="payWhen == 'payAtCounter'" class="mb-0">
              Pay at counter
            </p>
          </div>
        </section>

        <!-- Billing Address -->
        <section class="form-section">
          <div v-if="showBillingAddress" class="row">
            <h4 class="text-uppercase fw-bold">Billing Address</h4>
            <p class="form-text fw-bold fst-italic mb-4">
              Required fields are marked with *
            </p>
            <div class="col-12 mb-3">
              <label class="form-label">Street Address *</label>
              <input
                v-model="form.address.streetAddress"
                type="text"
                class="form-control"
                placeholder="123 Main St"
              />
            </div>

            <div class="col-md-5 mb-3">
              <label class="form-label">Apartment/Suite Number</label>
              <input
                v-model="form.address.apartmentNumber"
                type="text"
                class="form-control"
                placeholder="20A"
              />
            </div>

            <div class="col-12"></div>

            <div class="col-md-5 mb-3">
              <label class="form-label">City *</label>
              <input
                v-model="form.address.city"
                type="text"
                class="form-control"
                placeholder="Enter city name"
              />
            </div>

            <div class="col-md-4 mb-3">
              <label for="state" class="form-label">State *</label>
              <select
                v-model="form.address.state"
                class="form-select"
                id="state"
              >
                <option value="">Select state...</option>
                <option v-for="state in states" :key="state" :value="state">
                  {{ state }}
                </option>
              </select>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip *</label>
              <input
                v-model="form.address.zip"
                type="text"
                class="form-control"
                id="zip"
                placeholder="12345"
              />
            </div>
            <div class="mt-2">
              <div class="col-12">
                <button
                  type="button"
                  class="w-100 btn btn-primary-theme fw-bold text-uppercase"
                  @click.prevent="onSubmit"
                >
                  Complete Reservation
                </button>
              </div>
            </div>
            <p class="text-muted col-12">
              <small>
                By clicking “Complete Reservation”, you agree to our
                <a href="#"> Terms & Conditions.</a>
              </small>
            </p>
          </div>
          <div v-else class="row">
            <div class="d-flex justify-content-between">
              <h6 class="text-uppercase fw-bold section-header-inactive">
                Billing Address
              </h6>
              <button
                type="button"
                class="btn btn-secondary-theme fw-bold text-uppercase"
                @click.prevent="onEditBillingAddress"
              >
                Edit
              </button>
            </div>
            <p v-if="form.address.streetAddress" class="mb-0">
              {{ this.form.address.streetAddress }}
            </p>
            <p v-if="form.address.apartmentNumber" class="mb-0">
              {{ this.form.address.apartmentNumber }}
            </p>
            <p
              v-if="form.address.city && form.address.state && form.address.zip"
              class="mb-0"
            >
              {{ this.form.address.city }}, {{ this.form.address.state }}
              {{ this.form.address.zip }}
            </p>
          </div>
        </section>
      </div>

      <!-- Right panel: car reservation details -->
      <section class="col-5 form-section">
        <h4 class="text-uppercase fw-bold mb-4">Reservation Info</h4>

        <!-- Location/time info -->
        <div class="row card-body-1 ps-0 pb-4 mb-4 border-bottom">
          <!-- PICKUP -->
          <div class="col-12 mb-4">
            <p class="card-subtitle fw-bolder">Pickup</p>
            <p class="card-text mt-2 mb-2">
              <i class="fas fa-map-marker-alt"></i>
              {{ searchQuery.location }}
            </p>
            <p class="card-text">
              <i class="far fa-calendar-alt"></i>
              {{ getFormattedDate(searchQuery.fromTime) }}
            </p>
          </div>
          <!-- RETURN -->
          <div class="col-12">
            <p class="card-subtitle fw-bolder">Return</p>
            <p class="card-text mt-2 mb-2">
              <i class="fas fa-map-marker-alt"></i>
              {{ searchQuery.location }}
            </p>
            <p class="card-text">
              <i class="far fa-calendar-alt"></i>
              {{ getFormattedDate(searchQuery.toTime) }}
            </p>
          </div>
        </div>

        <!-- Vehicle info -->
        <div class="row card-body-2 mt-4 pb-4 mb-4 border-bottom">
          <div class="card-subtitle fw-bolder mb-2">Vehicle</div>
          <div class="col-sm-12 col-lg-6">
            <p class="card-text fw-medium mb-0">{{ selectedCar.type }}</p>
            <p class="card-text fw-medium text-uppercase mb-1">
              {{ selectedCar.make }} {{ selectedCar.model }}
            </p>
            <p class="card-text mb-1">
              {{ selectedCar.seat }} seats
              <i class="mx-2 fas fa-circle" style="font-size: 7px"></i>
              {{ selectedCar.suitcase }} suitcases
            </p>
            <p class="card-text fw-light mb-0">
              <small><i class="fas fa-leaf"></i></small>
              <small> Eco-friendly</small>
            </p>
            <p class="card-text fw-light">
              <small><i class="fas fa-hand-sparkles"></i></small>
              <small> Enhanced cleaning</small>
            </p>
          </div>
          <!-- Vehicle Image -->
          <div class="col-sm-12 col-md-8 col-lg-5">
            <img
              :src="`/csc642-842-fall21-team05/img/${selectedCar.image}`"
              class="img-fluid rounded"
              alt="Car Image"
            />
          </div>
        </div>

        <!-- Total price -->
        <div class="row card-body-2 mt-4 pb-4 mb-4">
          <h4 class="card-subtitle fw-bold mb-2 text-uppercase">Total</h4>
          <div class="d-flex align-items-baseline justify-content-between">
            <p class="card-text mb-0">
              <small>${{ selectedCar.price }} x {{ this.duration }} days</small>
            </p>
            <p class="card-text mb-0 fs-5 fw-bold">${{ this.total }}</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import states from "../data/states.json";

export default {
  name: "ReservationReview",
  components: {},
  data() {
    return {
      carRentals: [],
      isLoggedIn: false,
      showLogIn: false,
      showBasicInfo: false,
      showContactInfo: false,
      showPaymentInfo: false,
      showBillingAddress: false,
      form: {
        firstName: "",
        lastName: "",
        dateOfBirth: {
          month: "",
          day: "",
          year: "",
        },
        email: "",
        phone: "",
        password: "",
        address: {
          streetAddress: "",
          apartmentNumber: "",
          city: "",
          state: "",
          zip: "",
        },
        payments: [],
      },
      payWhen: "payNow",
      age: "",
      cardInfo: {
        nameOnCard: "",
        cardNumber: "",
        expiration: {
          month: "",
          year: "",
        },
        securityCode: "",
      },
      states: states,
      selectedCar: {},
      searchQuery: {},
      duration: 0,
      total: 0,
    };
  },
  created() {
    // check if logged in user --> pre-filled data
    var user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
      this.isLoggedIn = true;
      this.form = user;
      this.cardInfo = user.payments[0];
      this.age = this.getAgeByDOB();

      // show which section
      this.showLogIn = false;
      this.showBillingAddress = true;
    } else {
      this.isLoggedIn = false;
      this.showLogIn = true;
    }

    // get the selected car + date + location
    var searchQuery = JSON.parse(localStorage.getItem("searchQuery"));
    if (searchQuery) {
      this.searchQuery = searchQuery;
      this.duration = this.getDuration(
        this.searchQuery.fromTime,
        this.searchQuery.toTime
      );
    }

    var selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
    if (selectedCar) {
      this.selectedCar = selectedCar;
      this.total = selectedCar.price * this.duration;
    }
  },
  methods: {
    onSubmit() {
      // save to carRentals

      // redirect to result page
      if (this.isLoggedIn) {
        this.$router.push({ name: "ReservationSummaryLoggedin" });
      } else {
        this.$router.push({ name: "ReservationSummaryGuest" });
      }
    },
    onLogIn() {
      // get users
      var users = JSON.parse(localStorage.getItem("users"));

      // check if any user matches email+pw
      var user = users.find(
        (user) =>
          user.email == this.form.email && user.password == this.form.password
      );

      if (user) {
        // set form data
        this.form = user;
        this.cardInfo = user.payments[0];
        this.age = this.getAgeByDOB();

        // set loggedInUser to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // show which sections
        this.isLoggedIn = true;
        this.showBillingAddress = true;
      } else {
        this.isLoggedIn = false;
        this.showBasicInfo = true;
      }

      this.showLogIn = false;
    },
    onContinueAsGuest() {
      this.showLogIn = false;
      this.showBasicInfo = true;
    },
    onContinueToContact() {
      this.showBasicInfo = false;
      this.showContactInfo = true;
    },
    onContinueToPayment() {
      this.showContactInfo = false;
      this.showPaymentInfo = true;
    },
    onContinueToBillingAddress() {
      this.showPaymentInfo = false;
      this.showBillingAddress = true;
    },
    onEditBasicInfo() {
      this.showLogIn = false;
      this.showBasicInfo = true;
      this.showContactInfo = false;
      this.showPaymentInfo = false;
      this.showBillingAddress = false;
    },
    onEditContactInfo() {
      this.showLogIn = false;
      this.showBasicInfo = false;
      this.showContactInfo = true;
      this.showPaymentInfo = false;
      this.showBillingAddress = false;
    },
    onEditPaymentInfo() {
      this.showLogIn = false;
      this.showBasicInfo = false;
      this.showContactInfo = false;
      this.showPaymentInfo = true;
      this.showBillingAddress = false;
    },
    onEditBillingAddress() {
      this.showLogIn = false;
      this.showBasicInfo = false;
      this.showContactInfo = false;
      this.showPaymentInfo = false;
      this.showBillingAddress = true;
    },
    onEditLogIn() {
      this.showLogIn = true;
      this.showBasicInfo = false;
      this.showContactInfo = false;
      this.showPaymentInfo = false;
      this.showBillingAddress = false;
    },
    getAgeByDOB() {
      if (
        this.isLoggedIn &&
        this.form &&
        this.form.dateOfBirth &&
        this.form.dateOfBirth.year
      ) {
        var currentYear = new Date().getFullYear();
        var age = currentYear - this.form.dateOfBirth.year;
        return age >= 25 ? "25OrOlder" : "lessThan25";
      }
    },
    getReadableAge(age) {
      return age == "25OrOlder" ? "25+" : "Less than 25";
    },
    getFormattedDate(dateTime) {
      return new Date(dateTime).toLocaleString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    },
    getDuration(fromTime, toTime) {
      var from = new Date(fromTime);
      var to = new Date(toTime);
      const diffTime = Math.abs(to - from);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },
  },
};
</script>

<style scoped>
.review-container {
  max-width: 1200px;
}

.form-section {
  padding: 1rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 1px;
  border-radius: 0.25rem;
  border: solid #dee2e6;
  border-width: 1px;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0;
}

.section-header-inactive {
  color: #6c757d;
}
</style>
