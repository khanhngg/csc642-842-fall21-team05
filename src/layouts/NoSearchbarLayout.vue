<template>
  <div>
    <Navbar :has-search="false" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "NoSearchbarLayout",
  components: {
    Navbar,
  }
}
</script>