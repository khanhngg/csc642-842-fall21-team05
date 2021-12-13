<template>
  <Tabsbar activeTab="Payments"/>

  <h1>
    {{ title }}
    <h2></h2>
    <div class="add">
      <button
        class="btn btn-primary-theme"
        type="submit"
        v-on:click="addPaymentButton()"
      >
        Add Payment
      </button>
    </div>
  </h1>
</template>

<script>
import Tabsbar from "@/components/Tabsbar";

export default {
  name: "My Payments",
  components: {
    Tabsbar,
  },
  data() {
    return {
      title: "Payments",
    };
  },
  methods: {
    addPaymentButton() {
      this.$router.push({ name: "PaymentForm" });
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
  width: 100%;
  margin: 0;
  text-align: center;
}
body > div {
  height: 100%;
  width: 90%;
  margin: 0 auto;
}
h1 {
  background-color: white;
  border-radius: 2%;
  padding: 77px 30px;
}
h2 {
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
  padding: 3%;
}
</style>
