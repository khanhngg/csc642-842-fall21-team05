<template>
  <div class="form">
    <h1>
      &emsp;{{ title }}
      <!--<div class="progressBar">
        <form-progress-bar :length="3" > </form-progress-bar>
      </div>
      <br />-->
      <div class="progress">
        <div
          class="progress-bar progress-bar-success"
          role="progressbar"
          aria-valuenow="40"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 0%"
        >
          0% Percent Complete
        </div>
      </div>
      <label class="hint-text"> &nbsp; * Required Fields </label><br />
      <form>
        <div id="v-model-select" class="form">
          <h2>
            <span class="section-title"> Personal Information </span><br />
            <div class="col-sm-6 mb-3">
              <label class="field-title">First Name * </label>

              <input
                type="text"
                class="form-control"
                placeholder="Enter First Name"
                id="firstName"
                v-model="signUpUser.firstName"
                required
              />
            </div>
            <div class="error-messages" v-if="firstNameError">
              {{ firstNameError }}
            </div>
            <div class="col-sm-6 mb-3">
              <label class="field-title">Last Name * </label>
              <input
                class="form-control"
                v-model="signUpUser.lastName"
                placeholder="Enter Last Name"
                id="lastName"
                required
              />
            </div>
            <div class="error-messages" v-if="lastNameError">
              {{ lastNameError }}
            </div>

            <span class="field-title"> Date of Birth *</span><br />
            <select
              v-model="signUpUser.dateOfBirth.month"
              id="birth-month"
              class="expiration"
            >
              <option disabled value="">Enter Month</option>
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
            <select
              v-model="signUpUser.dateOfBirth.day"
              id="birth-day"
              class="expiration"
            >
              <option value="">Enter Day</option>
              <option v-for="day in days" :key="day" :value="day">
                {{ day }}
              </option>
            </select>
            <select
              v-model="signUpUser.dateOfBirth.year"
              id="birth-year"
              class="expiration"
            >
              <option value="">Enter Year</option>
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
            <div class="error-messages" v-if="birthError">{{ birthError }}</div>
          </h2>
          <h2>
            <span class="section-title"> Contact Information </span><br />

            <span class="field-title">* Email: </span><br />
            <input
              v-model="signUpUser.email"
              placeholder="Enter Email"
              id="user-email"
              required
            />
            <div class="error-messages" v-if="emailError">{{ emailError }}</div>
            <br />

            <span class="field-title">Phone Number * </span><br />
            <label class="hint-text">Please don't use letters</label><br />
            <input
              v-model="signUpUser.phone"
              placeholder="000 - 000 - 0000"
              id="user-phone"
              class="phone"
            />
            <div class="error-messages" v-if="phoneError">{{ phoneError }}</div>
          </h2>
          <h2>
            <span class="section-title"> Account Information </span><br />
            <label class="hint-text">
              Note: Your username will be the same as your email</label
            ><br />
            <label class="field-title">Password *</label>
            <input
              type="password"
              id="password-field"
              v-model="signUpUser.password"
            />
            <br />
            <label class="field-title">Re-enter Password *</label>
            <input
              type="password"
              id="password-field"
              v-model="signUpUser.password2"
            />

            <div class="error-messages" v-if="passwordError">
              {{ passwordError }}
            </div>
          </h2>
        </div>
      </form>

      <div class="submit">
        <button
          class="btn btn-primary-theme"
          type="submit"
          v-on:click="submitButton()"
        >
          Continue
        </button>
      </div>

      <div class="error-messages" v-if="overallError">{{ overallError }}</div>
      <br />
    </h1>
  </div>
</template>

<script>
/*
import useVuelidate from "@vuelidate/core";
import {
  required,
  // email,
  // minLength,
  maxLength,
  // minValue,
  // maxValue,
  // numeric,
  //sameAs,
  helpers,
} from "@vuelidate/validators";
const validAlpha = (value) => {
  return /^[a-zA-Z ]*$/.test(value);
};
const validAlphaNumeric = (value) => {
  return /^[a-zA-Z0-9 ]*$/.test(value);
};
//import FormProgressBar from "../components/FormProgressBar.vue";
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
      //v$: useVuelidate(),
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
        password2: "",

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

      //Date Of Birth Select Values
      years: [
        "1960",
        "1961",
        "1962",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
      ],
      days: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],

      //ERROR MESSAGES
      firstNameError: "",
      lastNameError: "",
      birthError: "",

      passwordError: "",

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
  /*
  validations() {
    return {
      signUpUser: {
        lastName: {
          required,
          validAlpha: helpers.withMessage(
            "Value must be alphabetical",
            validAlpha
          ),
          maxLength: maxLength(40),
        },
        firstName: {
          required,
          validAlpha: helpers.withMessage(
            "Value must be alphabetical",
            validAlpha
          ),
          maxLength: maxLength(40),
        },
      },
    };
  },
*/
  methods: {
    firstNameValidation: function () {
      var first = this.signUpUser.firstName;

      if (first == "" || first.length > 40) {
        document.getElementById("firstName").style.borderColor = "red";
        this.firstNameError =
          first == ""
            ? "You must enter your first name!"
            : "First name is too long, must be 40 characters or less";
        return false;
      }

      this.firstNameError = "";
      document.getElementById("firstName").style.borderColor = "black";
      return true;
    },
    lastNameValidation: function () {
      var last = this.signUpUser.lastName;

      if (last == "" || last.length > 40) {
        document.getElementById("lastName").style.borderColor = "red";
        this.lastNameError =
          last == ""
            ? "You must enter your last name!"
            : "Last name is too long, must be 40 characters or less";
        return false;
      }
      this.lastNameError = "";
      document.getElementById("lastName").style.borderColor = "black";
      return true;
    },
    birthValidation: function () {
      var month = this.signUpUser.dateOfBirth.month;
      var day = this.signUpUser.dateOfBirth.day;
      var year = this.signUpUser.dateOfBirth.year;
      var error = 0;

      if (month == "") {
        document.getElementById("birth-month").style.borderColor = "red";
        error = 1;
      }
      if (day == "") {
        document.getElementById("birth-day").style.borderColor = "red";
        error = 1;
      }
      if (year == "") {
        document.getElementById("birth-year").style.borderColor = "red";
        error = 1;
      }

      if (error != 0) {
        this.birthError = "You must input your entire birthday!";
        return false;
      }

      this.birthError = "";
      document.getElementById("birth-month").style.borderColor = "black";
      document.getElementById("birth-day").style.borderColor = "black";
      document.getElementById("birth-year").style.borderColor = "black";
      return true;
    },

    phoneNumberValid: function () {
      var phone = this.signUpUser.phone;
      if (phone === "") {
        document.getElementById("user-phone").style.borderColor = "red";
        this.phoneError = "You must enter a phone number!";
        return false;
      }

      if (/[a-zA-Z]/.test(phone)) {
        document.getElementById("user-phone").style.borderColor = "red";
        this.phoneError = "Phone Number Invalid: You cant use letters!";
        return false;
      }

      this.phoneError = "";
      document.getElementById("user-phone").style.borderColor = "black";

      return true;
    },

    emailValidation: function () {
      var email = this.signUpUser.email;
      if (email == "") {
        document.getElementById("user-email").style.borderColor = "red";
        this.emailError = "It is required to enter your email!";
        return false;
      }

      this.emailError = "";
      document.getElementById("user-email").style.borderColor = "black";
      return true;
    },

    passwordValidation: function () {
      var password = this.signUpUser.password;
      var password2 = this.signUpUser.password2;

      if (password == "" || password2 == "") {
        document.getElementById("password-field").style.borderColor = "red";
        this.passwordError = "You must enter a password!";
        return false;
      }
      if (password != password2) {
        document.getElementById("password-field").style.borderColor = "red";
        this.passwordError = "Passwords dont match!";
        return false;
      }

      document.getElementById("password-field").style.borderColor = "black";
      this.passwordError = "";
      return true;
    },

    goBackButton() {
      this.$router.go(-1);
    },
    persist() {
      // check which user type based on email
      var { email } = this.signUpUser;
      if (email.startsWith("admin")) {
        this.signUpUser.userType = "admin";
      } else if (email.startsWith("delivery")) {
        this.signUpUser.userType = "delivery";
      } else {
        this.signUpUser.userType = "user";
      }

      // write to localStorage to be used in next step in signup flow
      localStorage.setItem("signUpUser", JSON.stringify(this.signUpUser));
      this.$router.push({ name: "SignUpForm_2" });
    },

    submitButton: function () {
      var allValid;
      var goAhead = 0;

      allValid = this.firstNameValidation(); //FIX LATER
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.lastNameValidation();
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.birthValidation();
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.phoneNumberValid();
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.emailValidation();
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.passwordValidation();
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
  components: {
    //FormProgressBar,
  },
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
  float: left;
  margin-left: 20%;
  color: white;
  display: block;
  width: 10%;
  border: none;
  background-color: grey;
  color: white;
  border-color: gray;
  padding: 1% 1%;
  font-size: 60%;
  cursor: pointer;
  text-align: center;
}
.progress-bar {
  color: #7678ed;
  position: center;
}

.textarea {
  display: block;
  width: 100%;
  height: 70px;
  border-radius: 5px;
}
</style>
