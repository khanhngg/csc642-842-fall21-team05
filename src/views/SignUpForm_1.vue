<template>
  <div class="container form-container">
    <!-- Title -->
    <h1 class="text-center fw-bold">Create an Account</h1>
    <h4 class="text-center fw-bold">Step 1/2: Basic Information</h4>
    <p class="form-text fw-bold fst-italic mb-4">
      Required fields are marked with *
    </p>

    <!-- Form -->
    <form class="g-3" novalidate>
      <section class="row form-section mb-4">
        <h4 class="fw-bold mb-3">Personal Information</h4>
        <!-- First Name -->
        <div class="col-sm-6 mb-3">
          <label class="form-label">First Name *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your first name"
            v-model="signUpUser.firstName"
          />
        </div>

        <!-- Last Name -->
        <div class="col-sm-6 mb-3">
          <label class="form-label">Last Name *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your last name"
            v-model="signUpUser.lastName"
            required
          />
        </div>

        <!-- DOB -->
        <label class="form-label mb-0">Date of Birth</label>
        <div class="col-12 col-md-3 mb-1 mt-0">
          <div class="form-text">Month *</div>
          <select class="form-select" v-model="signUpUser.dateOfBirth.month">
            <option value="">Select month</option>
            <option v-for="month in months" :key="month" :value="month">
              {{ month }}
            </option>
          </select>
        </div>
        <div class="col-12 col-md-3 mb-3 mt-0">
          <div class="form-text">Day *</div>
          <select class="form-select" v-model="signUpUser.dateOfBirth.day">
            <option value="">Select day</option>
            <option v-for="day in days" :key="day" :value="day">
              {{ day }}
            </option>
          </select>
        </div>
        <div class="col-12 col-md-3 mb-3 mt-0">
          <div class="form-text">Year *</div>
          <select class="form-select" v-model="signUpUser.dateOfBirth.year">
            <option value="">Select year</option>
            <option
              v-for="year in years.slice().reverse()"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
      </section>

      <section class="row form-section mb-4">
        <!-- Email -->
        <h4 class="fw-bold mb-3">Contact Information</h4>
        <div class="mb-3">
          <label class="form-label">Email Address *</label>
          <input
            type="email"
            class="form-control"
            placeholder="you@example.com"
            v-model="signUpUser.email"
          />
        </div>

        <!-- Phone -->
        <div class="mb-3">
          <label class="form-label">Phone Number *</label>
          <input
            type="tel"
            class="form-control"
            placeholder="Enter a 10 digit phone number"
            v-model="signUpUser.phone"
          />
        </div>
      </section>

      <section class="row form-section mb-4">
        <!-- Password -->
        <h4 class="fw-bold mb-3">Account Information</h4>
        <div class="col-12 mb-3">
          <label class="form-label">Password *</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
            v-model="signUpUser.password"
          />
        </div>
        <p class="text-muted">
          <small>
            <span class="fw-bold"> NOTE: </span>Password must include at least:
            <ul>
              <li>1 capital letter</li>
              <li>1 number</li>
              <li>1 symbol</li>
            </ul>
            Password has to be 8 or more chacters long
          </small>
        </p>
      </section>

      <!-- Button -->
      <div class="mb-5 text-center">
        <button
          class="
            d-none d-md-block
            w-25
            btn btn-primary-theme
            fw-bold
            text-uppercase
            right-align-item
          "
          type="button"
          @click.prevent="onSubmit"
        >
          Continue
        </button>
        <button
          class="
            d-block d-md-none
            w-100
            btn btn-primary-theme
            fw-bold
            text-uppercase
          "
          type="button"
          @click.prevent="onSubmit"
        >
          Continue
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm_1",
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
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
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
      months: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
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
    onSubmit() {
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

.right-align-item {
  margin-left: auto;
}
</style>
