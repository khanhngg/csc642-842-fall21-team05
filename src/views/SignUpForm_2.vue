<template>
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
            <span class="field-title">* Street Address:</span><br />
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
            <span class="field-title"> Apt/Suite Number:</span><br />
            <input
              v-model="signUpUser.address.apartmentNumber"
              placeholder="Enter Apt number "
              id="user-aptNum"
              class="address"
            />
            <div class="error-messages" v-if="aptNumError">
              {{ aptNumError }}
            </div>
            <br />
            <span class="field-title">* City:</span><br />
            <input
              v-model="signUpUser.address.city"
              placeholder="Enter City"
              id="user-city"
              class="address"
              required
            />
            <div class="error-messages" v-if="cityError">{{ cityError }}</div>
            <br />
            <label for="state" class="field-title">*State:</label><br />
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
            <span class="field-title">* ZipCode:</span><br />
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
            <span class="field-title">* Card Number: </span><br />
            <input
              v-model="cardInfo.cardNumber"
              placeholder="Enter card number"
              id="user-card"
              class="payment"
              required
            />
            <br />
            <span class="field-title">* Expiration Date: </span><br />
            <select
              v-model="cardInfo.expiration.month"
              id="card-month"
              class="expiration"
            >
              <option disabled value="">Month</option>
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
            <span> </span>
            <select
              v-model="cardInfo.expiration.year"
              id="card-year"
              class="expiration"
            >
              <option disabled value="">Year</option>
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
            <br /><br />
            <div class="col-12">
              <span class="field-title">* Security Code:</span><br />
              <input
                v-model="cardInfo.securityCode"
                placeholder="Enter 3 Digit Security Code"
                required
              />
              <br />

              <input type="checkbox" v-model="cardInfo.isDefault" />
              <label class="checkboxText"> Set as Default Payment </label>
              <div class="error-messages" v-if="termsError">
                {{ termsError }}
              </div>
              <br />
            </div>
          </h2>
        </div>
      </form>

      <div class="submit">
        <button
          class="btn btn-primary-theme"
          type="submit"
          v-on:click="onSubmit()"
        >
          Submit
        </button>
      </div>
      <div class="clear-button">
        <button
          class="btn btn-primary-theme"
          type="back"
          id="backBtn"
          v-on:click="goBackButton()"
        >
          Back
        </button>
      </div>
      <div class="error-messages" v-if="overallError">{{ overallError }}</div>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
//<label class="form-label">Contact Information: </label><br/><br/>
//<label class="form-label">Additional Information: </label><br/><br/>
/*
          <span> - </span>

          <input v-model="userPhone_2" placeholder="567" id="user-phone_2" class="phone"/>
          <span> - </span>
          <input v-model="userPhone_3" placeholder="891" id="user-phone_3" class="phone"/>

          @keypress = "atPressed"
*/

export default {
  name: "PaymentForm",
  data() {
    return {
      //Page Variables
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

      //Data field variables
      //userEmail: {
      //},
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      //ERROR MESSAGES
      nameError: "",

      streetError: "",
      aptNumError: "",
      cityError: "",
      stateError: "",
      zipcodeError: "",

      cardNumError: "",
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
    addressValidation: function () {
      var street = this.signUpUser.address.streetAddress;
      var aptNum = this.signUpUser.address.apartmentNumber;
      var city = this.signUpUser.address.city;
      var state = this.signUpUser.address.state;
      var zip = this.signUpUser.address.zipCode;
      var invalid = 0;

      if (street.length > 40 || street == "") {
        document.getElementById("user-street").style.borderColor = "red";
        this.streetError = "You must fill out the street address!";
        invalid = 1;
      } else {
        this.streetError = "";
        document.getElementById("user-street").style.borderColor = "black";
      }

      if (aptNum.length > 40) {
        document.getElementById("user-aptNum").style.borderColor = "red";
        this.aptNumError =
          "Apt Number is too long, must to be less than 40 characters!";
        invalid = 1;
      } else {
        this.aptNumError = "";
        document.getElementById("user-aptNum").style.borderColor = "black";
      }
      if (city.length > 40 || city.length == 0) {
        document.getElementById("user-city").style.borderColor = "red";
        this.cityError =
          city.length > 40
            ? "City input too long, must to be less than 40 characters!"
            : "You must fill out the City textbox!";
        invalid = 1;
      } else {
        this.cityError = "";
        document.getElementById("user-city").style.borderColor = "black";
      }
      if (state.length > 40 || state.length == 0) {
        document.getElementById("user-state").style.borderColor = "red";
        this.stateError =
          state.length > 40
            ? "State entry too long, must to be less than 40 characters!"
            : "You must fill out the State textbox!";
        invalid = 1;
      } else {
        this.stateError = "";
        document.getElementById("user-state").style.borderColor = "black";
      }

      if (/[a-zA-Z]/.test(this.userZipCode)) {
        document.getElementById("user-zipcode").style.borderColor = "red";
        this.zipcodeError = "The ZipCode cannot contain letter/s!";
      } else if (zip.length > 5 || zip.length == 0) {
        document.getElementById("user-zipcode").style.borderColor = "red";
        this.zipcodeError =
          zip.length > 5
            ? "ZipCode entry too long, must to be 5 characters!"
            : "You must fill out the ZipCode textbox!";
        invalid = 1;
      } else {
        this.zipcodeError = "";
        document.getElementById("user-zipcode").style.borderColor = "black";
      }

      if (invalid == 1) {
        return false;
      }

      this.streetError = "";
      this.cityError = "";
      this.stateError = "";
      this.zipcodeError = "";

      return true;
    },
    paymentValidation: function () {
      var cardNum = this.cardInfo.cardNumber;
      //var expirationMonth = this.cardInfo.expiration.month;
      // var expirationYear = this.cardInfo.expiration.year;
      // var code = this.cardInfo.securityCode;

      if (cardNum.length == 0) {
        document.getElementById("user-card").style.borderColor = "red";
      }
    },
    goBackButton() {
      this.$router.go(-1);
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
    onSubmit() {
      var allValid;
      var goAhead = 0;

      allValid = this.addressValidation();
      if (allValid == false) {
        goAhead = 1;
      }
      
      allValid = this.paymentValidation();
       if (allValid == false) {
        goAhead = 1;
      }

      if (goAhead === 0) {
        this.overallError = "";
        this.persist();
      } else {
        this.overallError =
          "You must fix the highlighted fields before continuing!";
      }
    },
  },
  components: {},
};
</script>

<style scoped>
/*Input styles*/
input {
  border: 2px solid;
  border-radius: 4px;
  background-color: rgb(250, 248, 248);
  font-size: 14px;
  margin: 0.25rem;
  padding: 5px 10px;
  transition: background-color 0.5s ease-out;
}

input[id="user-street"] {
  width: 375px;
}
input[id="user-city"] {
  width: 250px;
}
input[class="phone"] {
  width: 20%;
  text-align: center;
  padding: 3px;
}

.checkboxText {
  font-size: 80%;
}
input[id="agree"] {
  margin-right: 60%;
}
input[type="checkbox"] {
  cursor: pointer;
}
select {
  border: 2px solid;
  border-radius: 4px;
  border-color: grey;
  background-color: rgb(250, 248, 248);
  font-size: 14px;
  margin: 0.25rem;
  padding: 5px 10px;
  transition: background-color 0.5s ease-out;
}

/*Page style*/
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
#clearBtn {
  background-color: grey;
}
#backBtn {
  color: black;
  background-color: white;
  border-color: black;
}
/*Class Styles*/
.field-title {
  font-size: 75%;
}
.section-title {
  font-size: 100%;
}

.terms-agree {
  font-size: 16px;
  text-align: left;
}

.hint-text {
  font-size: 14px;
  color: rgb(95, 95, 95);
}

.form {
  font-size: 37%;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 5%;
  user-select: none;
  overflow-x: auto;
}

.error-messages {
  font-size: 16px;
  color: rgb(180, 12, 12);
}

.btn-primary-theme {
  float: right;
  margin-right: 20%;

  width: 10%;
}

.clear-button {
  position: left;
  float: left;
  margin-left: 0%;
  color: white;
  width: 100%;
  font-size: 60%;
  cursor: pointer;
}
.progress-bar {
  background-color: #7678ed;
  position: center;
}
</style>
