<template>
<h1>
  <div class="container form-container">
    <h1 class="text-center fw-bold">Create an Account</h1>
    <h4 class="text-center fw-bold">Account Created!</h4>

    <!-- Personal Info -->
    <section class="mb-4 form-section">
      <div class="mb-3">
        <p class="form-label">
          Full Name:
          <span class="fw-normal"
            >{{ this.signUpUser.firstName }}
            {{ this.signUpUser.lastName }}</span
          >
        </p>
        <p class="form-label">
          Date of Birth:
          <span class="fw-normal"
            >{{ this.signUpUser.dateOfBirth.month }}/{{
              this.signUpUser.dateOfBirth.day
            }}/{{ this.signUpUser.dateOfBirth.year }}</span
          >
        </p>
        <p class="form-label">
          Email Address:
          <span class="fw-normal">{{ this.signUpUser.email }}</span>
        </p>
        <p class="form-label">
          Phone: <span class="fw-normal">{{ this.signUpUser.phone }}</span>
        </p>
        <p class="form-label">
          Billing Address:
          <span class="fw-normal">
            {{ this.signUpUser.address.streetAddress }},
            <span v-if="signUpUser.address.apartmentNumber"
              >{{ this.signUpUser.address.apartmentNumber }}, </span
            >{{ this.signUpUser.address.city }},
            {{ this.signUpUser.address.state }}
            {{ this.signUpUser.address.zip }}
          </span>
        </p>
        <p class="form-label">Card Information:</p>
        <ul>
          <li>
            <p class="form-label">
              Card Number:
              <span class="fw-normal">{{ this.cardInfo.cardNumber }}</span>
            </p>
          </li>
          <li>
            <p class="form-label">
              Expiration Date:
              <span class="fw-normal"
                >{{ this.cardInfo.expiration.month }}/{{
                  this.cardInfo.expiration.year
                }}</span
              >
            </p>
          </li>
        </ul>
      </div>
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
        @click.prevent="onGoToHomepage"
      >
        Go to Homepage
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
        @click.prevent="onGoToHomepage"
      >
        Go to Homepage
      </button>
    </div>
  </h1>
</template>

<script>
export default {
  name: "SignUpResult",
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
.progress-bar {
  background-color: #7678ed;
  position: center;
}
</style>
