<template>
  <div class="container login-form-container border border-dark">
    <form>
      <div class="mt-3 mb-4">
        <h2>Log In</h2>
      </div>

      <div class="mx-auto mb-3">
        <label for="email" class="form-label text-left">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email address"
        />
      </div>

      <div class="mx-auto mb-2">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="form-check" />
        <label class="form-check-label" for="form-check">Remember me</label>
      </div>

      <button
        class="btn btn-primary-theme w-100 mb-3 fw-bold"
        type="submit"
        @click.prevent="onSubmit"
      >
        LOG IN
      </button>

      <div class="text-center">
        <p class="forgot-password mb-2">
          Forgot
          <router-link :to="{ name: 'Home' }">password?</router-link>
        </p>
      </div>

      <div class="mb-3 text-center">
        <p class="create-account">
          Need an account?
          <router-link :to="{ name: 'SignUpForm_1' }"
            >Create an Account</router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      isLoggedIn: false,
      loggedInUser: {
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
    };
  },
  created() {
    var user = JSON.parse(localStorage.getItem("loggedInUser"));

    // if user is already logged in, redirect to profile page
    if (user) {
      this.loggedInUser = user;
      this.isLoggedIn = true;
      this.$router.push({ name: "Profile" });
    } else {
      this.isLoggedIn = false;
    }
  },
  methods: {
    onSubmit() {
      // get users
      var users = JSON.parse(localStorage.getItem("users"));

      // check if any user matches email+pw
      var user = users.find(
        (user) => user.email == this.email && user.password == this.password
      );

      if (user) {
        // if match, check if admin/delivery/user
        this.loggedInUser = user;
        var { email } = this.loggedInUser;

        // check which user type based on email
        if (email.startsWith("admin")) {
          this.loggedInUser.userType = "admin";
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(this.loggedInUser)
          );
        } else if (email.startsWith("delivery")) {
          this.loggedInUser.userType = "delivery";
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(this.loggedInUser)
          );
        } else {
          this.loggedInUser.userType = "user";
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(this.loggedInUser)
          );
        }

        // Go to profile
        this.$router.go(); // refresh page to update navbar user icon
        this.$router.push({ name: "Profile" });
      } else {
        // else, take them to sign up page
        this.$router.push({ name: "SignUpForm_1" });
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: bold;
}
.form-label {
  font-weight: bold;
}
.login-form-container {
  max-width: 500px;
  padding: 40px 50px 20px;
  border-radius: 20px;
  margin-top: 100px;
}
</style>
