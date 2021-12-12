/* eslint-disable */

<template>
  <div class="PaymentResult">
    <h2 class="col-8">
      <label class="col-6"> Payment Updated </label><br />

      <div class="field-title">
        <label class="input-title"> Name: </label>
        <label class="input">&nbsp;{{ name }}</label>
      </div>
      <br />

      <div class="field-title" v-if="userStreet">
        <label class="input-title">Address: </label>

        <label class="input"> &nbsp;{{ userStreet }} </label>

        <label class="input"> &nbsp;{{ userAptNum }} </label>

        <label class="input"> &nbsp;{{ userCity }} </label>

        <label class="input"> &nbsp;{{ userState }}</label>

        <label class="input"> &nbsp;{{ userZipCode }}</label>
      </div>

      <label class="input-title">Card Information: </label><br />

      <label class="input"> &nbsp; Card Number: {{ cardNum }} </label><br />

      <label class="input">
        &nbsp; Expiration Date: {{ cardMonth }} / {{ cardYear }} </label
      ><br />

      <label class="input"> &nbsp; Security Code: ***</label><br />

      <div class="field-title" v-if="defaultPay">
        <label class="input"> Set as Default Payment</label><br />
      </div>
    </h2>
    <div class="row">
      <div class="col-md-10 offset-md-9">
        <button
          class="btn btn-primary-theme"
          type="submit"
          v-on:click="ToPaymentsButton()"
        >
          Back To Payments
        </button>
      </div>
      <div class="col align-self-start">
        <button
          class="btn btn-primary-theme"
          type="back"
          id="backBtn"
          v-on:click="goBackButton()"
        >
          Back
        </button>
        <div class="error-messages" v-if="overallError">{{ overallError }}</div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Update Payment Form Result",
  data() {
    return {
      title: "Update Payment Form",

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
        censoredPassword: "",
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
        nameOnCard: "",
        cardNumber: "",
        expiration: {
          month: "",
          year: "",
        },
        securityCode: "",
        isDefault: false,
      },
    };
  },
  methods: {
    goBackButton() {
      this.$router.go(-1);
    },
    ToPaymentsButton() {
      this.$router.push({ name: "Payments" });
    },
  },

  created() {
    // parse local storage to get logged in user data
    var user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      this.signUpUser = user;
      this.cardInfo = user.payments[0];
    }
  },
};
</script>

<style scoped>
#backBtn {
  color: black;
  background-color: white;
  border-color: black;
}
.page-title {
  font-size: 125%;
  margin-left: 35%;
  padding: 10px 5px;
  font-weight: 800;
  border-bottom: 3px solid rgb(197, 195, 195);
}
h2 {
  background-color: white;
  border: 1px solid black;
  border-radius: 2%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  padding: 3%;
}
.input-title {
  font-size: 100%;
  font-weight: 600;
}
.sub-input-title {
  font-style: italic;
  font-size: 100%;
  font-weight: 500;
}
.input {
  font-weight: 300;
  font-style: normal;
  font-size: 95%;
}
.vue-map-container {
  height: 20rem;
}
</style>
