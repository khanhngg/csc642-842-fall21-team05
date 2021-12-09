<template>
  <div class="form">
    <h1>
      &emsp;{{ title }}
      <!--<FormProgressBar/>-->

      <br />
      <label class="hint-text"> &nbsp; * Required Fields </label><br />
      <form>
        <div id="v-model-select" class="form">
          <h2>
            <span class="section-title"> Personal Information </span><br />
            <div class="col-sm-6 mb-3">
              <label class="field-title">First Name * </label>

              <input
                v-model="Firstname"
                placeholder="Enter First Name"
                id="firstName"
                required
              />
            </div>
            <div class="col-sm-6 mb-3">
              <label class="field-title">Last Name * </label>
              <input
                v-model="lastName"
                placeholder="Enter Last Name"
                id="lastName"
                required
              />
            </div>
            <div class="error-messages" v-if="nameError">{{ nameError }}</div>
            
      

            <span class="field-title">* Date of Birth </span><br />
            <select
              v-model="dateOfBirth.month"
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
            <select v-model="dateOfBirth.day" id="birth-day" class="expiration">
              <option value="">Enter Day</option>
              <option v-for="day in days" :key="day" :value="day">
                {{ day }}
              </option>
            </select>
            <select
              v-model="dateOfBirth.year"
              id="birth-year"
              class="expiration"
            >
              <option value="">Enter Year</option>
              <option v-for="year in years" :key="year" :value="state">
                {{ year }}
              </option>
            </select>
          </h2>
          <h2>
            <span class="section-title"> Contact Information </span><br />

            <span class="field-title">* Email: </span><br />
            <input
              v-model="userEmail"
              placeholder="Enter Email"
              id="user-email"
              required
            />
            <div class="error-messages" v-if="emailError">{{ emailError }}</div>
            <br />
            <br />

            <span class="field-title">Phone Number: </span><br />
            <label class="hint-text">Please don't use letters</label><br />
            <input
              v-model="userPhone"
              placeholder="000 - 000 - 0000"
              id="user-phone"
              class="phone"
            />
            
            <div class="error-messages" v-if="phoneError">{{ phoneError }}</div>
            <br />
            <br />
          </h2>
          <h2>
            <span class="section-title"> Account Information </span><br />
            <label class="hint-text">
              Note: Your username will be the same as your email</label
            >
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
      //Page Variables
      title: "Create a Account",

      //Data field variables
      //userEmail: {
      firstName: "",
      lastName: "",

      dateOfBirth: {
        month: "",
        day: "",
        year: "",
      },
      //},

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
      nameError: "",

      streetError: "",
      aptNumError: "",
      cityError: "",
      stateError: "",
      zipcodeError: "",

      cardNumError: "",
    };
  },
  methods: {
    firstNameValidation: function () {
      var first = this.firstName;

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
      var last = this.lastName;

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

    phoneNumberValid: function () {
      if (/[a-zA-Z]/.test(this.userPhone)) {
        document.getElementById("user-phone").style.borderColor = "red";
        this.phoneError = "Phone Number Invalid: You cant use letters!";
        return false;
      }
      if (this.userPhone.length > this.maxLength) {
        document.getElementById("user-phone").style.borderColor = "red";
        this.phoneError =
          "Phone number Invalid: format is incorrect or the number entered is longer than 11 numbers";
        return false;
      }
      (this.phoneError = ""),
        (document.getElementById("user-phone").style.borderColor = "black");
      return true;
    },

    emailValidation: function () {
      if (this.userEmail == "") {
        document.getElementById("user-email").style.borderColor = "red";
        this.emailError = "It is required to enter your email!";
        return false;
      }
      if (
        this.userEmail.search("@") === -1 ||
        this.userEmail.search(".") === -1
      ) {
        document.getElementById("user-email").style.borderColor = "red";
        this.emailError = "You must enter a valid email!";
        return false;
      }
      this.emailError = "";
      document.getElementById("user-email").style.borderColor = "black";

      return true;
    },

    goBackButton() {
      this.$router.go(-1);
    },
    persist() {
      localStorage.name = this.firstName;
      localStorage.name = this.lastName;

      this.$router.push({ name: "SignUpForm_2" });
    },
    submitButton: function () {
      var allValid;
      var goAhead = 0;
      alert("CLICKED");

      //allValid = this.firstNameValidation(); //FIX LATER
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.lastNameValidation();
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
  font-family: sans-serif;
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

</style>
