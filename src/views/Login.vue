<template>
  <div class="container login-form-container border border-dark">
    <form>
      <div class="mt-3 mb-4">
        <h2>Log In</h2>
      </div>

      <div class="mx-auto mb-3">
        <label for="email" class="form-label text-left">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email address"
        />
      </div>

      <div class="mx-auto mb-2">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="passoword"
          placeholder="Enter password"
        />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="form-check" />
        <label class="form-check-label" for="form-check">Remember me</label>
      </div>

      <button class="btn btn-primary-theme w-100 mb-3" type="submit">
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
          <!-- ADD ROUTE TO SIGN UP PAGE -->
          <router-link :to="{ name: 'Home' }">Create an Account</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
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
  max-width: 750px;
  /*height: 750px;*/
  padding: 40px 50px 20px;
  border-radius: 20px;
  margin-top: 100px;
}
</style>
