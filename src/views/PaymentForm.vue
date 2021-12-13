<template>
  <div class="container form-container">
    <!-- Title -->
    <h1 v-if="id" class="fw-bold">Update Payment Method</h1>
    <h1 v-else class="fw-bold">Add Payment Method</h1>
    <p class="form-text fw-bold fst-italic mb-4">
      Required fields are marked with *
    </p>

    <!-- Form -->
    <form class="g-3" novalidate>
      <section class="row form-section mb-4">
        <!-- Address -->
        <h4 class="fw-bold mb-3">Billing Address</h4>
        <div class="col-12 mb-3">
          <label class="form-label">Street Address *</label>
          <input
            type="text"
            class="form-control"
            placeholder="123 Main St"
            v-model="loggedInUser.address.streetAddress"
          />
        </div>

        <div class="col-12 mb-3">
          <label class="form-label">Apartment/Suite Number</label>
          <div class="col-md-5">
            <input
              type="text"
              class="form-control"
              placeholder="20A"
              v-model="loggedInUser.address.apartmentNumber"
            />
          </div>
        </div>

        <div class="col-md-5 mb-3">
          <label class="form-label">City *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter city name"
            v-model="loggedInUser.address.city"
          />
        </div>

        <div class="col-md-4 mb-3">
          <label for="state" class="form-label">State *</label>
          <select
            class="form-select"
            id="state"
            v-model="loggedInUser.address.state"
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
            type="text"
            class="form-control"
            id="zip"
            placeholder="12345"
            v-model="loggedInUser.address.zip"
          />
        </div>
      </section>

      <section class="row form-section mb-4">
        <!-- Card info -->
        <h4 class="fw-bold mb-3">Card Information</h4>
        <div class="col-12 mb-3">
          <label class="form-label">Name on Card *</label>
          <input
            v-model="cardInfo.nameOnCard"
            type="text"
            class="form-control"
            placeholder="Enter the name on card"
            required
          />
        </div>

        <div class="col-12 mb-3">
          <label class="form-label">Card Number *</label>
          <input
            v-model="cardInfo.cardNumber"
            type="text"
            class="form-control"
            placeholder="Enter the card number"
          />
        </div>

        <div class="row mb-3 pe-0">
          <label class="form-label mb-0">Expiration Date</label>
          <div class="col-12 col-md-4 mb-1 mt-0">
            <div class="form-text">Month *</div>
            <select v-model="cardInfo.expiration.month" class="form-select">
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
          <div class="col-12 col-md-4 mt-0">
            <div class="form-text">Year *</div>
            <select v-model="cardInfo.expiration.year" class="form-select">
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

        <div class="col-12 col-md-4 mb-3">
          <label class="form-label">Security Code *</label>
          <input
            v-model="cardInfo.securityCode"
            type="text"
            class="form-control"
            placeholder="Enter security code"
          />
        </div>

        <div class="col-12 mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="cardInfo.isDefault"
              id="isDefault"
            />
            <label class="form-check-label mb-0" for="isDefault">
              Set as default payment
            </label>
          </div>
        </div>
      </section>

      <!-- Button -->
      <div class="d-flex justify-content-between">
        <button
          class="btn btn-secondary-theme fw-bold text-uppercase w-25"
          type="button"
          @click.prevent="onBack"
        >
          Back
        </button>

        <button
          class="btn btn-primary-theme fw-bold text-uppercase w-25"
          type="button"
          @click.prevent="onSubmit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import states from "../data/states.json";

export default {
  name: "PaymentForm",
  data() {
    return {
      id: this.$route.params.id,
      isLoggedIn: false,
      loggedInUser: {
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
      cardInfo: {
        nameOnCard: "",
        cardNumber: "",
        expiration: {
          month: "",
          year: "",
        },
        securityCode: "",
        isDefault: false,
      },
      states: states,
    };
  },
  created() {
    // parse local storage to get sign up user data
    var user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      this.isLoggedIn = true;
      this.loggedInUser = user;
      this.payments = this.loggedInUser.payments;
      if (this.id) {
        this.cardInfo = this.payments.find(
          (payment) => payment.cardNumber == this.id
        );
      }
    } else {
      this.isLoggedIn = false;
      this.$router.push({ name: "SignUpForm_1" });
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      var users = JSON.parse(localStorage.getItem("users"));

      if (this.id) {
        // update payment
        this.payments[this.payments.indexOf(this.cardInfo)] = this.cardInfo;
      } else {
        // add payment
        this.loggedInUser.payments.push(this.cardInfo);
      }

      // save the changes for this user
      users[users.indexOf(this.loggedInUser)] = this.loggedInUser;

      // write list of users to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // set logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));

      // go to result page TODO----
      this.$router.push({ name: "Payments" });
    },
  },
};
</script>

<style scoped></style>
