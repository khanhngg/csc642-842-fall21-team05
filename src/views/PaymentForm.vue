<template>
  <div class="form">
    <h1>
      &emsp;{{ title }}
      <form>
        <div id="v-model-select" class="form">
          <label class="hint-text"
            >Astriks(*) - Input in Field is Required</label
          ><br />
          <h2>
            <span class="section-title"> Personal Information </span><br />
            <div class="row mb-3">
              <span class="field-title">* Name:</span><br />
              <div class="col-sm-10">
                <input
                  v-model="name"
                  placeholder="Enter Name"
                  id="name"
                  required
                />
              </div>
              <div class="error-messages" v-if="nameError">{{ nameError }}</div>
              <br />
            </div>
          </h2>

          <h2>
            <span class="section-title"> Billing Address </span><br />
            <span class="field-title">* Street Address:</span><br />
            <input
              v-model="userStreet"
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
              v-model="userAptNum"
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
              v-model="userCity"
              placeholder="Enter City"
              id="user-city"
              class="address"
              required
            />
            <div class="error-messages" v-if="cityError">{{ cityError }}</div>
            <br />
            <label for="state" class="field-title">State *</label><br />
            <select v-model="userState" id="user-state" class="address">
              <option value="">Select State</option>
              <option v-for="state in states" :key="state" :value="state">
                {{ state }}
              </option>
            </select>
            <div class="error-messages" v-if="stateError">{{ stateError }}</div>
            <br />
            <span class="field-title">* ZipCode:</span><br />
            <input
              v-model="userZipCode"
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
              v-model="cardNum"
              placeholder="Enter card number"
              id="user-card"
              class="payment"
              required
            />
            <br />
            <span class="field-title">* Expiration Date: </span><br />
            <select v-model="cardMonth" id="card-month" class="expiration">
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
            <select v-model="cardYear" id="card-year" class="expiration">
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
                v-model="cardCode"
                placeholder="Enter 3 Digit Security Code"
                required
              />
              <br />

              <input type="checkbox" v-model="defaultPay" />
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
          v-on:click="submitButton()"
        >
          Submit
        </button>
      </div>
      <div class="col-12">
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
      title: "Update Payment Form",

      //Data field variables
<<<<<<< HEAD
=======
      //userEmail: {
>>>>>>> Pushing what i have for the signup
      name: "",

      userStreet: "",
      userAptNum: "",
      userCity: "",
      userState: "",
      userZipCode: "",

      cardNum: "",
      cardMonth: "",
      cardYear: "",
      cardCode: "",
      defaultPay: "",
<<<<<<< HEAD
=======
      //},
>>>>>>> Pushing what i have for the signup
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
  methods: {
    nameValidation: function () {
      var name = this.name;

      if (name == "" || name.length > 40) {
        document.getElementById("firstname").style.borderColor = "red";
        this.nameError =
          name == ""
            ? "You must enter your name displayed on the card!"
            : "Name is too long, must be 40 characters or less";
        return false;
      }

      this.nameError = "";
      document.getElementById("name").style.borderColor = "black";
      return true;
    },
    addressValidation: function () {
      var street = this.userStreet;
      var aptNum = this.userAptNum;
      var city = this.userCity;
      var state = this.userState;
      var zip = this.userZipCode;
      var invalid = 0;

      if (street.length > 40 || street.length == 0) {
        document.getElementById("user-street").style.borderColor = "red";
        this.streetError =
          street.length > 40
            ? "Street address too long, must to be less than 40 characters!"
            : "You must fill out the street address!";
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

      this.zipcodeError = "";

      document.getElementById("user-street").style.borderColor = "black";

      return true;
    },
    goBackButton() {
      this.$router.go(-1);
    },
    persist() {
      localStorage.name = this.name;

      localStorage.userStreet = this.userStreet;
      localStorage.userAptNum = this.userAptNum;
      localStorage.userCity = this.userCity;
      localStorage.userState = this.userState;
      localStorage.userZipCode = this.userZipCode;

      localStorage.cardNum = this.cardNum;
      localStorage.cardMonth = this.cardMonth;
      localStorage.cardYear = this.cardYear;
      localStorage.cardCode = this.cardCode;

      localStorage.defaultPay = this.defaultPay;

      this.$router.push({ name: "PaymentFormResult" });
    },
    submitButton: function () {
      var allValid;
      var goAhead = 0;
      alert("CLICKED");
      allValid = this.nameValidation();
      if (allValid == false) {
        goAhead = 1;
      }
      allValid = this.addressValidation();
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

/** CODE TO RESUSE:

 <span class = "section-title">* Chose preferred title:</span>
          <br/>
          <select v-model="userTitle" id="user-title" required>
            <option disabled value="">Please select one</option>
            <option>Student</option>
            <option>Professor</option>
            <option>Retired</option>
            <option>Staff</option>
            <option>None</option>
          </select>
          <div class="error-messages" v-if="userTitleError">{{userTitleError}}</div><br/>
          <br/>

          <span class = "section-title"> Select Height: </span><br/>
          <select v-model="userFeet" id="user-feet" class = "height">
            <option disabled value="">Please select feet</option>
            <option>1 feet</option>
            <option>2 feet</option>
            <option>3 feet</option>
            <option>4 feet</option>
            <option>5 feet</option>
            <option>6 feet</option>
            <option>7 feet</option>
            <option>8 feet or over</option>
          </select>
          <span>  </span>
          <select v-model="userInches" id="user-inches"  class = "height">
            <option disabled value="">Please select inches</option>
            <option>1 inch</option>
            <option>2 inches</option>
            <option>3 inches</option>
            <option>4 inches</option>
            <option>5 inches</option>
            <option>6 inches</option>
            <option>7 inches</option>
            <option>8 inches</option>
            <option>9 inches</option>
            <option>10 inches</option>
            <option>11 inches</option>
          </select>
          <br/><br/>

          <span class = "section-title">Phone Number: </span><br/>
          <label class="hint-text">Please don't use letters</label><br/>
          <input v-model="userPhone" placeholder="123-456-7891" id="user-phone" class="phone" /> 
          <div class="error-messages" v-if="phoneError">{{phoneError}}</div><br/>
          <br/>
          
          <span class = "section-title">* Address: </span><br/>
          <input v-model="userStreet" placeholder="Enter bulding number and street" id="user-street" class="address" required />
          <div class="error-messages" v-if="streetError">{{streetError}}</div><br/>

          <input v-model="userAptNum" placeholder="Optional: Enter Apt number " id="user-aptNum" class="address" />
          <div class="error-messages" v-if="aptNumError">{{aptNumError}}</div><br/>
          
          <input v-model="userCity" placeholder="Enter City" id="user-city" class="address" required />
          <div class="error-messages" v-if="cityError">{{cityError}}</div><br/>
          
          <input v-model="userState" placeholder="Enter State" id="user-state" class="address" required/>
          <div class="error-messages" v-if="stateError">{{stateError}}</div><br/>
    
          <input v-model="userZipCode" placeholder="Enter ZipCode" id="user-zipcode" class="address" required/>
          <div class="error-messages" v-if="zipcodeError">{{zipcodeError}}</div><br/>
          <br/>

          <span class = "section-title"> Additional Services: </span><br/>
          <label class="hint-text">Select all that apply to you</label><br/>
          <input type="checkbox" id="email" value="email" v-model="additional">
          <label class = "checkboxText" for="email">Email</label><br/>
          <input type="checkbox" id="phone" value="phone" v-model="additional">
          <label class = "checkboxText" for="phone">Phone</label><br/>
          <input type="checkbox" id="facebook" value="facebook" v-model="additional">
          <label class = "checkboxText" for="facebook">Facebook</label><br/>
          <input type="checkbox" id="tweeter" value="tweeter" v-model="additional">
          <label class = "checkboxText" for="tweeter">Tweeter</label><br/>
          <input type="checkbox" id="surface_mail" value="surface_mail" v-model="additional">
          <label class = "checkboxText" for="surface_mail">Surface Mail</label><br/>
          <input type="checkbox" id="personal_visit" value="personal_visit" v-model="additional">
          <label class = "checkboxText" for="personal_visit">Personal Visit</label><br/>
          <br>  

          <span class = "section-title"> Budget: </span><br/>
          <select v-model="userBudget" id="user-budget" required>
            <option disabled value="">Please select one</option>
            <option>less that 50$</option>
            <option>50$ - 100$</option>
            <option>Over 100$</option>
          </select><br/><br/>
         
          <span class = "section-title">* Email: </span><br/>
          <input v-model="userEmail" placeholder="Enter Email" id="user-email" required/>
          <div class="error-messages" v-if="emailError">{{emailError}}</div><br/>
          <br />
          
          <div class = "terms">
              <input type="checkbox" v-model="terms" required>
              <label class = "checkboxText"> Accept terms and Conditions </label>
              <div class="error-messages" v-if="termsError">{{termsError}}</div><br/>
          </div> 
*/
</style>
