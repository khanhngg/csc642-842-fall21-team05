<template>
  <div class="PaymentResult">
    <h2 class="col-8">
      <label class="col-6">Account Created</label><br />

      <div class="field-title">
        <label class="input-title">Name:</label>
        <label class="input"
          >{{ signUpUser.firstName }} {{ signUpUser.lastName }}</label
        >
      </div>
      <br />
    </h2>
    <div class="row">
      <div class="col-md-10 offset-md-9">
        <button class="btn btn-primary-theme" @click.prevent="onGoToHomepage">
          Go to Homepage
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
  name: "SignUpResult",
  data() {
    return {
      title: "Create an Account",

      signUpUser: {
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
    onGoToHomepage() {
      this.$router.push({ name: "Home" });
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
</style>
