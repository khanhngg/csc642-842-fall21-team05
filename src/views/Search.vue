<template>
  <div :key="car.id" v-for="car in cars" class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Car model:</h5>
      <p class="card-text">{{ car.model }}</p>
      <a href="#" class="btn btn-primary my-btn">Go somewhere</a>
      <my-button />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cars: [
        {
          id: 1,
          model: "Honda",
        },
        {
          id: 2,
          model: "Subaru",
        },
        {
          id: 3,
          model: "Jeep",
        },
        {
          id: 4,
          model: "Tesla",
        },
      ],
    };
  },
  components: {
  },
};
</script>

<style scoped>
.my-btn {
  background: red;
}
</style>
