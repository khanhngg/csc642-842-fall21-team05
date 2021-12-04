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