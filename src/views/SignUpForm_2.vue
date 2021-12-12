<template>
<<<<<<< HEAD
  <div class="form">
    <h1>
      &emsp;{{ title }}
      <div class="progress">
        <div
          class="progress-bar progress-bar-success"
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 50%"
        >
          50% Percent Complete
        </div>
      </div>
      <label class="hint-text"> &nbsp; * Required Fields </label><br />
      <form>
        <div id="v-model-select" class="form">
          <h2>
            <span class="section-title"> Billing Address </span><br />
            <span class="field-title"> Street Address *</span><br />
            <input
              v-model="signUpUser.address.streetAddress"
              placeholder="Enter bulding number and street"
              id="user-street"
              class="address"
              required
            />
            <div class="error-messages" v-if="streetError">
              {{ streetError }}
            </div>
            <br />
            <span class="field-title"> Apt/Suite Number </span><br />
=======
  <div class="container form-container">
    <!-- Title -->
    <h1 class="text-center fw-bold">Create an Account</h1>
    <h4 class="text-center fw-bold">Step 2/2: Payments Information</h4>
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
            v-model="signUpUser.address.streetAddress"
          />
        </div>

        <div class="col-12 mb-3">
          <label class="form-label">Apartment/Suite Number</label>
          <div class="col-md-5">
>>>>>>> 8761c9243b2cb6a9655cf36fc43879c55a00cc96
            <input
              type="text"
              class="form-control"
              placeholder="20A"
              v-model="signUpUser.address.apartmentNumber"
            />
<<<<<<< HEAD
            <div class="error-messages" v-if="aptNumError">
              {{ aptNumError }}
            </div>
            <br />
            <span class="field-title"> City *</span><br />
            <input
              v-model="signUpUser.address.city"
              placeholder="Enter City"
              id="user-city"
              class="address"
              required
            />
            <div class="error-messages" v-if="cityError">{{ cityError }}</div>
            <br />
            <label for="state" class="field-title">State *</label><br />
            <select
              v-model="signUpUser.address.state"
              id="user-state"
              class="address"
            >
              <option value="">Select State</option>
              <option
                v-for="userState in states"
                :key="userState"
                :value="userState"
              >
                {{ userState }}
              </option>
            </select>
            <div class="error-messages" v-if="stateError">{{ stateError }}</div>
            <br />
            <span class="field-title">ZipCode *</span><br />
            <input
              v-model="signUpUser.address.zip"
              placeholder="Enter ZipCode"
              id="user-zipcode"
              class="address"
              required
            />
            <div class="error-messages" v-if="zipcodeError">
              {{ zipcodeError }}
            </div>
            <br />
            <br />
          </h2>

          <h2>
            <span class="section-title"> Payment Information </span><br />
            <span class="field-title">Card Number * </span><br />
            <input
              v-model="cardInfo.cardNumber"
              placeholder="Enter card number"
              id="user-card"
              class="payment"
              required
            />
            <div class="error-messages" v-if="cardNumError">
              {{ cardNumError }}
            </div>
            <br />
            <span class="field-title">Expiration Date * </span><br />
            <select
              v-model="cardInfo.expiration.month"
              id="card-month"
              class="expiration"
            >
              <option disabled value="">Month</option>
=======
          </div>
        </div>

        <div class="col-md-5 mb-3">
          <label class="form-label">City *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter city name"
            v-model="signUpUser.address.city"
          />
        </div>

        <div class="col-md-4 mb-3">
          <label for="state" class="form-label">State *</label>
          <select
            class="form-select"
            id="state"
            v-model="signUpUser.address.state"
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
            v-model="signUpUser.address.zip"
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
>>>>>>> 8761c9243b2cb6a9655cf36fc43879c55a00cc96
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
            <select v-model="cardInfo.expiration.month" class="form-select">
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
<<<<<<< HEAD
            <div class="error-messages" v-if="cardExpirError">
              {{ cardExpirError }}
            </div>
            <br />
            <div class="col-12">
              <span class="field-title">Security Code *</span><br />
              <input
                v-model="cardInfo.securityCode"
                placeholder="Enter 3 Digit Security Code"
                id="card-code"
                required
              />
              <div class="error-messages" v-if="cardCodeError">
                {{ cardCodeError }}
              </div>
              <br />

              <input type="checkbox" v-model="cardInfo.isDefault" />
              <label class="checkboxText"> Set as Default Payment </label>
              <br />
            </div>
          </h2>
=======
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
>>>>>>> 8761c9243b2cb6a9655cf36fc43879c55a00cc96
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
<<<<<<< HEAD
      </div>
      <div class="skip-button">
        <button
          class="btn btn-primary-theme"
          type="submit"
          id="skipBtn"
          v-on:click="onSkip()"
        >
          Skip
        </button>
      </div>
      <div class="clear-button">
=======

>>>>>>> 8761c9243b2cb6a9655cf36fc43879c55a00cc96
        <button
          class="btn btn-primary-theme fw-bold text-uppercase w-25"
          type="button"
          @click.prevent="onSubmit"
        >
          Submit
        </button>
      </div>
<<<<<<< HEAD
      <div class="error-messages" v-if="overallError">{{ overallError }}</div>
    </h1>
=======
    </form>
>>>>>>> 8761c9243b2cb6a9655cf36fc43879c55a00cc96
  </div>
</template>

<script>
import states from "../data/states.json";

export default {
  name: "SignUpForm_2",
  data() {
    return {
      signUpUser: {
        userType: "",
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
        skip: false,
      },
      cardInfo: {
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
    var user = JSON.parse(localStorage.getItem("signUpUser"));
    if (user) {
      this.signUpUser = user;
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.persist();
    },
    persist() {
      // check if list of users exist, if not create
      var users = JSON.parse(localStorage.getItem("users"));
      if (!users) {
        users = [];
      }

      // add this new sign up user
      this.signUpUser.payments.push(this.cardInfo);
      users.push(this.signUpUser);

      // write list of users to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // set logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(this.signUpUser));

      // remove the sign up user
      localStorage.removeItem("signUpUser");

      // go to result page
      this.$router.push({ name: "SignUpResult" });
    },
  },
};
</script>

<style scoped>
.form-label {
  font-weight: 600;
}

.form-section {
  padding: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 1px;
  border-radius: 0.25rem;
  border: solid #dee2e6;
  border-width: 1px;
}
</style>
