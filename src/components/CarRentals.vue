<template>
  <div :key="rental.id" v-for="rental in carRentals">
      <h3>{{ rental.pickupDate }}</h3>
  </div>
</template>

<script>
export default {
    name: "CarRentals",
    props: {
        carRentals: Array
    }
}
</script>

<style>

</style>

