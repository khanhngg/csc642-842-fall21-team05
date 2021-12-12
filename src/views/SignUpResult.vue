<template>
  <h1>
    &emsp;{{ title }}
    <br />
    <div class="progress">
      <div
        class="progress-bar progress-bar-success"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 100%"
      >
        100% Percent Complete
      </div>
    </div>
    <br />
    <div class="PaymentResult">
      <h2 class="col-8">
        <label class="col-6">Account Created</label><br /><br />

        <div class="field-title">
          <label class="input-title">Name:</label>
          <label class="input"
            >{{ signUpUser.firstName }} {{ signUpUser.lastName }}</label
          >
        </div>
        <br />
        <div class="field-title">
          <label class="input-title">Date Of Birth:</label>
          <label class="input">
            {{ signUpUser.dateOfBirth.month }} /
            {{ signUpUser.dateOfBirth.day }} /
            {{ signUpUser.dateOfBirth.year }}</label
          >
        </div>
        <br />
        <div class="field-title">
          <label class="input-title">Email:</label>
          <label class="input"> {{ signUpUser.email }} </label>
        </div>
        <br />

        <div class="field-title">
          <label class="input-title">Phone:</label>
          <label class="input"> {{ signUpUser.phone }} </label>
        </div>
        <br />

        <div class="field-title">
          <label class="input-title">Password:</label>
          <label class="input"> {{ signUpUser.censoredPassword }} </label>
        </div>
        <br />

        <div class="field-title" v-if="signUpUser.skip == false">
          <label class="input-title">Address:</label>
          <label class="input">
            {{ signUpUser.address.streetAddress }}
            {{ signUpUser.address.apartmentNumber }}
            {{ signUpUser.address.city }}
            {{ signUpUser.address.state }}
            {{ signUpUser.address.zip }}
          </label>
        </div>
        <br />

        <div class="field-title" v-if="signUpUser.skip == false">
          <label class="input-title">Card Information:</label>
        </div>

        <div class="field-title" v-if="signUpUser.skip == false">
          <label class="input-title">&emsp;Card Number:</label>
          <label class="input">{{ cardInfo.cardNumber }}</label>
        </div>
        <br />
        <div class="field-title" v-if="signUpUser.skip == false">
          <label class="input-title">&emsp;Expiration Date:</label>
          <label class="input"
            >{{ cardInfo.expiration.month }} /
            {{ cardInfo.expiration.year }}</label
          >
        </div>
        <br />
        <div class="field-title" v-if="signUpUser.skip == false">
          <label class="input-title">&emsp;Security Code:</label>
          <label class="input">{{ cardInfo.securityCode }}</label>
        </div>
        <br />
        <div class="field-title" v-if="isDefault">
          <label class="input-title">&emsp;Payment Selected as Default:</label>
          <label class="input">{{ cardInfo.isDefault }}</label>
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
          <div class="error-messages" v-if="overallError">
            {{ overallError }}
          </div>
          <br />
        </div>
      </div>
    </div>
  </h1>
</template>

<script>
export default {
  name: "SignUpResult",
  data() {
    return {
      title: "Create an Account",

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

  /*mounted(){
    this.formatePhone();
    this.formatPassword();
  },*/
  methods: {
    goBackButton() {
      this.$router.go(-1);
    },
    onGoToHomepage() {
      this.$router.push({ name: "Home" });
    },
    formatePhone() {
      return true;
    },
    formatPassword() {
      alert("inFormatPass");
      var password = this.signUpUser.password;
      var passLength = password.length;
      for (let i = 0; i < passLength; i++) {
        this.censoredPassword += "*";
      }
      return true;
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
body {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #7678ed;
  text-align: center;
}
body > div {
  height: 100%;
  width: 90%;
  margin: 0 auto;
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
.progress-bar {
  background-color: #7678ed;
  position: center;
}
</style>
