<template>
  <div class="home">
    <CustomJumbotron />
  </div>
</template>

<script>
import CustomJumbotron from '@/components/CustomJumbotron.vue'

export default {
  components: {
    CustomJumbotron,
  },
}
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
