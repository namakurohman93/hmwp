<template>
  <div class="body">
    <CustomNavbar />
    <div class="custom-container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'

export default {
  components: {
    CustomNavbar,
  },
}
</script>

<style scoped>
.body {
  background-image: url('./assets/photo-home.jpg');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.custom-container {
  height: 94%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
