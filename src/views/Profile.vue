<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>


<form>
      <h3>Log In</h3>

      <div class="col-md-6 mx-auto">
        <label for="email" class="form-label text-left">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email address"
        />
      </div>

      <div class="col-sm-8">
        <label for="password" class="form-label text-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>

      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label class="form-check-label" for="inlineFormCheck"
            >Remember me</label
          >
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email address:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          id="email"
        />
      </div>

      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          id="pwd"
        />
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-primary">Log In</button>
      </div>

      <p class="forgot-password">
        Forgot
        <router-link :to="{ name: 'Home' }">password?</router-link>
      </p>

      <p class="create-account">
        Need an account? 
        <router-link :to="{ name: 'Register' }">Create an Account</router-link>
      </p>

    </form>