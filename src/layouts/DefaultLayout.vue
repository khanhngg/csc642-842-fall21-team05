<template>
  <div>
    <Navbar />
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
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
