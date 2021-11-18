<template>
  <button @click="handleClick" type="button" class="btn btn-success">Success</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('clicked...')
    },   
  },
}
</script>

<style>

</style>