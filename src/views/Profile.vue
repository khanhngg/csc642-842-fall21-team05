<template>
  <!-- Profile Container -->
  <div class="container profile-container border border-dark">
    <div class="row">
      <div class="col">
        <i class="fas fa-user-circle fa-10x"></i>
      </div>
      <div class="col-sm-12 col-md-2 text-end mt-3">
        <!-- TODO -->
        <!-- route link to Edit Profile Page -->
        <button class="btn btn-primary-theme btn-lg" type="submit" @click="$router.push('/')">EDIT</button>
      </div>
    </div>
    <!-- Name -->
    <div :key="info.id" v-for="info in userInfo" class="info">
      <div class="row g-2 mt-5 mb-3 fs-2">
        <div class="col-sm-12 col-lg-5">
          <label for="name" class="info-label">Name:</label>
        </div>
        <div class="col-sm-12 col-lg-7">
          <p class="info-name">{{ info.firstName }} {{ info.lastName }}</p>
        </div>
      </div>
    </div>
    <!-- Phone -->
    <div :key="info.id" v-for="info in userInfo" class="info">
      <div class="row g-2 mb-3 fs-2">
        <div class="col-sm-12 col-lg-5">
          <label for="phone" class="info-label">Phone Number:</label>
        </div>
        <div class="col-sm-12 col-lg-7">
          <p class="info-phone">{{ info.phone }}</p>
        </div>
      </div>
    </div>
    <!-- Email -->
    <div :key="info.id" v-for="info in userInfo" class="info">
      <div class="row g-2 mb-3 fs-2">
        <div class="col-sm-12 col-lg-5">
          <label for="email" class="info-label">Email:</label>
        </div>
        <div class="col-sm-12 col-lg-7">
          <p class="info-email">{{ info.email }}</p>
        </div>
      </div>
    </div>
    <!-- Password -->
    <div :key="info.id" v-for="info in userInfo" class="info">
      <div class="row g-2 mb-2 fs-2">
        <div class="col-sm-12 col-lg-5">
          <label for="password" class="info-label">Password:</label>
        </div>
        <div class="col-sm-12 col-lg-7">
          <p class="info-password">{{ info.password }}</p>
        </div>
      </div>
    </div>
    <!-- Age -->
    <div :key="info.id" v-for="info in userInfo" class="info">
      <div class="row g-2 mb-3 fs-2">
        <div class="col-sm-12 col-lg-5">
          <label for="age" class="info-label">Age:</label>
        </div>
        <div class="col-sm-12 col-lg-7">
          <p class="info-age">{{ info.age }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      userInfo: [
        {
          id: 1,
          firstName: "Joe",
          lastName: "Doe",
          phone: "123-456-7890",
          email: "joedoe@email.com",
          password: "**********",
          age: "28",
        },
      ],
    };
  },
};
</script>
<style scoped>
.profile-container {
  max-width: 1235px;
  height: 100%;
  border-radius: 20px;
  margin-top: 150px;
  margin-bottom: 50px;
  padding: 45px 40px 20px;
}
.info-label {
  font-weight: bolder;
}
</style>
