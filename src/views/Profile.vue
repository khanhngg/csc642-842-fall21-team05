<template>
  <Tabsbar activeTab="Profile"/>

  <!-- Profile Container -->
  <div class="container profile-container border border-dark mt-5">
    <div class="row">
      <div class="col-6">
        <i class="fas fa-user-circle fa-10x"></i>
      </div>
      <div class="col-6 text-end mt-3">
        <!-- TODO -->
        <!-- route link to Edit Profile Page -->
        <button
          class="btn btn-primary-theme btn-lg fw-bold"
          type="submit"
          @click="$router.push('/')"
        >
          EDIT
        </button>
      </div>
    </div>
    <!-- Name -->
    <div class="row g-2 mt-5 mb-3 fs-2">
      <div class="col-sm-12 col-lg-5">
        <label for="name" class="info-label">Name:</label>
      </div>
      <div class="col-sm-12 col-lg-7">
        <p class="info-name">
          {{ this.loggedInUser.firstName }} {{ this.loggedInUser.lastName }}
        </p>
      </div>
    </div>
    <!-- Phone -->
    <div class="row g-2 mb-3 fs-2">
      <div class="col-sm-12 col-lg-5">
        <label for="phone" class="info-label">Phone Number:</label>
      </div>
      <div class="col-sm-12 col-lg-7">
        <p class="info-phone">{{ this.loggedInUser.phone }}</p>
      </div>
    </div>
    <!-- Email -->
    <div class="row g-2 mb-3 fs-2">
      <div class="col-sm-12 col-lg-5">
        <label for="email" class="info-label">Email:</label>
      </div>
      <div class="col-sm-12 col-lg-7">
        <p class="info-email">{{ this.loggedInUser.email }}</p>
      </div>
    </div>
    <!-- Password -->
    <div class="row g-2 mb-2 fs-2">
      <div class="col-sm-12 col-lg-5">
        <label for="password" class="info-label">Password:</label>
      </div>
      <div class="col-sm-12 col-lg-7">
        <p class="info-password">*************</p>
      </div>
    </div>
    <!-- Age -->
    <div class="row g-2 mb-3 fs-2">
      <div class="col-sm-12 col-lg-5">
        <label for="age" class="info-label">Age:</label>
      </div>
      <div class="col-sm-12 col-lg-7">
        <p class="info-age">{{ getAgeByDOB() }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Tabsbar from "@/components/Tabsbar";

export default {
  name: "Profile",
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
    };
  },
  created() {
    var user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
      this.isLoggedIn = true;
      this.loggedInUser = user;
    } else {
      this.isLoggedIn = false;
      this.$router.push({ name: "SignUpForm_1" });
    }
  },
  methods: {
    getAgeByDOB() {
      if (
        this.isLoggedIn &&
        this.loggedInUser &&
        this.loggedInUser.dateOfBirth &&
        this.loggedInUser.dateOfBirth.year
      ) {
        var currentYear = new Date().getFullYear();
        var age = currentYear - this.loggedInUser.dateOfBirth.year;
        return age;
      }
    },
  },
};
</script>
<style scoped>
.profile-container {
  max-width: 950px;
  height: 100%;
  border-radius: 20px;
  padding: 45px 40px 20px;
}
.info-label {
  font-weight: bolder;
}
</style>
