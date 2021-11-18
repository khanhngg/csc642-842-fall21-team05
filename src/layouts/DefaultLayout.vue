<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "DefaultLayout",
  components: {
    Navbar
  }
}
</script>