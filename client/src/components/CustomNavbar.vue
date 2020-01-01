<template>
  <nav class="navbar custom-navbar">
    <b-link
      class="text-light navbar-brand"
      :to="{ path: '/' }"
      @click.prevent="deactivateAnchor"
      ><img
        src="../assets/wordpress-icon.png"
        width="40"
        height="40"
      />Mini-WP</b-link
    >
    <b-link
      class="btn text-light navbar-item custom-navbar-item"
      :to="{ path: '/explore' }"
      id="exploreAnchor"
      @click.prevent="activateAnchor"
    >
      Explore
    </b-link>
    <div class="navbar-nav ml-auto">
      <div class="d-flex mr-2">
        <b-link
          class="btn mr-2 text-light"
          :to="{ path: '/login' }"
          @click.prevent="deactivateAnchor"
          >Login</b-link
        >
        <b-link
          class="btn btn-info text-light"
          :to="{ path: '/register' }"
          @click.prevent="deactivateAnchor"
          >Register</b-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
  methods: {
    activateAnchor() {
      document.getElementById('exploreAnchor').classList.add('active')
    },
    deactivateAnchor() {
      document.getElementById('exploreAnchor').classList.remove('active')
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === '/explore') {
        this.$nextTick().then(() => this.activateAnchor())
      }
    },
  },
}
</script>

<style scoped>
.custom-navbar {
  background-color: rgb(0, 0, 0, 0.9);
  height: 6%;
  padding: 0 1rem !important;
}

.btn-info {
  background-color: #52a2d6 !important;
  border: 1px solid #52a2d6;
}

.btn-info:hover {
  background-color: #337fb0 !important;
  border: 1px solid #337fb0 !important;
}

.active {
  border-bottom: 2px solid white !important;
  box-shadow: none !important;
}

.custom-navbar-item {
  border-bottom: 2px solid rgb(0, 0, 0, 0.1);
  border-radius: 0 !important;
  box-shadow: none !important;
}
</style>
