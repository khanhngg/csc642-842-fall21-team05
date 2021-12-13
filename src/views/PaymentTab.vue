<template>
  <Tabsbar activeTab="Payments" />

  <div class="container mt-3">
    <div class="d-flex justify-content-between mb-5">
      <h1 class="fw-bold">My Payments</h1>
      <button
        class="btn btn-primary-theme fw-bold text-uppercase"
        type="button"
        @click.prevent="onGoToAddNewPayment"
      >
        Add Payment
      </button>
    </div>

    <section
      v-for="(payment, index) in payments"
      :key="payment.cardNumber"
      class="row form-section mb-4"
    >
      <div class="d-flex justify-content-between mb-3">
        <h4 class="fw-bold">
          {{ getCardNetwork(payment.cardNumber) }} {{ payment.cardNumber }}
        </h4>
        <div>
          <button
            class="btn btn-secondary-theme fw-bold text-uppercase me-3"
            type="button"
            :class="{ disabled: payment.isDefault }"
            @click.prevent="onDeletePayment(index)"
          >
            Delete
          </button>
          <router-link
            class="btn btn-primary-theme text-uppercase fw-bold"
            :to="{ name: 'EditPayment', params: { id: payment.cardNumber } }"
          >
            Edit
          </router-link>
        </div>
      </div>
      <div>
        <p class="form-label">
          Name on Card:
          <span v-if="payment.nameOnCard" class="fw-normal">{{
            payment.nameOnCard
          }}</span>
          <span v-else class="fw-normal"
            >{{ loggedInUser.firstName }} {{ loggedInUser.lastName }}</span
          >
        </p>
        <p class="form-label">
          Billing Address:
          <span class="fw-normal">
            {{ this.loggedInUser.address.streetAddress }},
            <span v-if="loggedInUser.address.apartmentNumber"
              >{{ this.loggedInUser.address.apartmentNumber }}, </span
            >{{ this.loggedInUser.address.city }},
            {{ this.loggedInUser.address.state }}
            {{ this.loggedInUser.address.zip }}
          </span>
        </p>
        <p class="form-label">Card Information:</p>
        <ul>
          <li>
            <p class="form-label">
              Card Number:
              <span class="fw-normal">{{ payment.cardNumber }}</span>
            </p>
          </li>
          <li>
            <p class="form-label">
              Expiration Date:
              <span class="fw-normal"
                >{{ payment.expiration.month }}/{{
                  payment.expiration.year
                }}</span
              >
            </p>
          </li>
        </ul>
        <p v-if="payment.isDefault" class="fw-bold text-muted mb-0">
          Default Payment Method
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Tabsbar from "@/components/Tabsbar";

export default {
  name: "My Payments",
  components: {
    Tabsbar,
  },
  data() {
    return {
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
      payments: [],
    };
  },
  created() {
    var user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
      this.isLoggedIn = true;
      this.loggedInUser = user;
      this.payments = this.loggedInUser.payments;
    } else {
      this.isLoggedIn = false;
      this.$router.push({ name: "SignUpForm_1" });
    }
  },
  methods: {
    onGoToAddNewPayment() {
      this.$router.push({ name: "AddPayment" });
    },
    onDeletePayment(index) {
      var users = JSON.parse(localStorage.getItem("users"));

      // delete payment by index
      this.loggedInUser.payments.splice(index, 1);

      // save the changes for this user
      users[users.indexOf(this.loggedInUser)] = this.loggedInUser;

      // write list of users to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // set logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
    },
    getCardNetwork(cardNumber) {
      return cardNumber % 2 == 0 ? "Visa" : "Mastercard";
    },
  },
};
</script>

<style scoped></style>
