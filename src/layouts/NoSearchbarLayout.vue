<template>
  <div>
    <Navbar :has-search="false" />
    <main class="main container">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "NoSearchbarLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.form-section {
  padding: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 1px;
  border-radius: 0.25rem;
  border: solid #dee2e6;
  border-width: 1px;
}
</style>