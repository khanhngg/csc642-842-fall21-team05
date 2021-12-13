<template>
  <Tabsbar activeTab="Profile" />

  <h1 class="mt-5 fw-bold">Edit Profile</h1>
  <div class="container profile-container border border-dark py-4">
    <div class="row mb-4 ms-3">
      <div class="col-sm-6 col-lg-4 mb-2">
        <i class="fas fa-user-circle fa-10x"></i>
      </div>
      <div class="col-sm-6 col-lg-3 d-flex align-self-center">
        <!-- TODO -->
        <!-- update button to change photo/password -->
        <button
          class="btn btn-primary-theme fw-bold text-uppercase"
          type="submit"
          @click="$router.push('/')"
        >
          change photo
        </button>
      </div>
    </div>

    <div class="card p-3 mb-4">
      <!-- Name -->
      <div class="col-12 mb-1">
        <label class="info-label">Name</label>
      </div>
      <div class="col-sm-12 col-lg-7 mb-3">
          <input class="form-control info-name" type="text">
            <!-- {{ this.loggedInUser.firstName }} {{ this.loggedInUser.lastName }} -->
      </div>

        

      <!-- Phone Number -->
      <div class="col-12 mb-1">
        <label for="phone" class="info-label">Phone Number</label>
      </div>
      <div class="col-sm-12 col-lg-4 mb-3">
          <input class="form-control info-phone" type="text">
            <!-- {{ this.loggedInUser.phone }} -->
      </div>
      
      <!-- Email -->
      <div class="col-12 mb-1">
        <label for="email" class="info-label">Email:</label>
      </div>
      <div class="col-sm-12 col-lg-8 mb-3">
        <input class="form-control info-email" type="text" readonly>
            <!-- {{ this.loggedInUser.email }} -->
      </div>

      <!-- Password -->
      <div class="col-12 mb-1">
        <label for="password" class="info-label">Password</label>
      </div>
      <div class="row">
          <div class="col-sm-12 col-lg-7 mb-lg-2">
           <!-- <input class="form-control info-password" type="text" readonly> -->
           <p class="info-password border border-1 p-2 rounded-2">****************</p>
          </div>

            <!-- TODO, update butto to change password -->
           <!-- Change Password Button -->
      <div class="class col-lg-2 mb-3">
          <button
          class="btn btn-secondary-theme btn-sm fw-bold text-uppercase p-2"
          type="submit"
          @click="$router.push('/')"
        >
          change
        </button>
      </div>
          
      </div>
      
      <!-- DOB -->
      <label class="info-label mb-0">Date of Birth</label>
      <div class="row">
          <div class="col-sm-12 col-lg-2 mb-1 mt-0">
          <div class="form-text">Month *</div>
          <!-- <select class="form-select" v-model="this.loggedInUser.dateOfBirth.month"> -->
          <select class="form-select">
            <option value="">Select month</option>
            <!-- <option v-for="month in months" :key="month" :value="month">
              {{ month }}
            </option> -->
          </select>
        </div>
        <div class="col-sm-12 col-lg-2 mb-3 mt-0">
          <div class="form-text">Day *</div>
          <!-- <select class="form-select" v-model="this.loggedInUser.dateOfBirth.day"> -->
          <select class="form-select">
            <option value="">Select day</option>
            <!-- <option v-for="day in days" :key="day" :value="day">
              {{ day }}
            </option> -->
          </select>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mt-0">
          <div class="form-text">Year *</div>
          <!-- <select class="form-select" v-model="this.loggedInUser.dateOfBirth.year"> -->
          <select class="form-select">
            <option value="">Select year</option>
            <!-- <option
              v-for="year in years.slice().reverse()"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option> -->
          </select>
        </div>
      </div>
        
    </div>
    <!-- close card -->

    <!-- Cancel & Save Button -->
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-secondary-theme text-uppercase fw-bold me-md-2 px-5" type="button"
          @click="$router.push('/profile')">cancel</button>
  <button class="btn btn-primary-theme text-uppercase fw-bold px-5" type="button" @click="$router.push('/profile')">save</button>
</div>


  </div>
  <!-- close profile-container -->
</template>

<script>
import Tabsbar from "@/components/Tabsbar";

export default {
  name: "ProfileEdit",
    components: {
      Tabsbar,
    },
  //   data() {
  //     return {
  //       isLoggedIn: false,
  //       loggedInUser: {
  //         firstName: "",
  //         lastName: "",
  //         dateOfBirth: {
  //           month: "",
  //           day: "",
  //           year: "",
  //         },
  //         email: "",
  //         phone: "",
  //         password: "",
  //         address: {
  //           streetAddress: "",
  //           apartmentNumber: "",
  //           city: "",
  //           state: "",
  //           zip: "",
  //         },
  //         payments: [],
  //       },
  //     };
  //   },
  //   created() {
  //     var user = JSON.parse(localStorage.getItem("loggedInUser"));

  //     if (user) {
  //       this.isLoggedIn = true;
  //       this.loggedInUser = user;
  //     } else {
  //       this.isLoggedIn = false;
  //       this.$router.push({ name: "SignUpForm_1" });
  //     }
  //   },
  //   methods: {
  //     getAgeByDOB() {
  //       if (
  //         this.isLoggedIn &&
  //         this.loggedInUser &&
  //         this.loggedInUser.dateOfBirth &&
  //         this.loggedInUser.dateOfBirth.year
  //       ) {
  //         var currentYear = new Date().getFullYear();
  //         var age = currentYear - this.loggedInUser.dateOfBirth.year;
  //         return age;
  //       }
  //     },
  //   },
};
</script>

<style scoped>

.profile-container {
  border-radius: 20px;
}

.info-label {
    font-weight: bolder;
}

.info-password {
    background-color: #e9ecef;
    border-color: #e7eaed;
}

</style>
