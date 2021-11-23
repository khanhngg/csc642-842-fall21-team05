<template>
  <div class="container form-container border border-dark rounded">
    <form>
      <div class="mt-3 mb-3">
         <h2>Log In</h2>
      </div>
      <div class="col-6 mb-3">
        <label for="email" class="form-label text-left">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email address"
        />
      </div>
      <div class="col-6 mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="passoword"
          placeholder="Enter password"
        />
      </div>
      <div class="col-6 mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="form-check" />
        <label class="form-check-label" for="form-check">Remember me</label>
      </div>
      <button type="submit" class="w-100 btn btn-primary col-6 mb-3">Submit</button>
      <Button text="Log In" color="violet" />
      
      <div class="col-6 mb-3">
        <p class="forgot-password">
          Forgot
          <router-link :to="{ name: 'Home' }">password?</router-link>
        </p>
      </div>

      <div class="col-6 mb-3">
        <p class="create-account">
        Need an account? 
        <router-link :to="{ name: 'Home' }">Create an Account</router-link>
       </p>
      </div>


      

      
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>


<style scoped>
h2 {
  text-align: center;
}
.form-label {
  font-weight: bold;
}

.form-container {
  max-width: 750px;
}

</style>
