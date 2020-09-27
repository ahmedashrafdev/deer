<template>
  <div id="app">
    <div class="loading-screen">
      <img src="https://deerpublishing.b-cdn.net/loading.gif" alt="loading" />
    </div>
    <app-nav />
    <slider />
    <!-- <transition name="router-anim" enter-active-class="animated active zoomInLeft" leave-active-class="animated active zoomOutRight"> -->
    <nuxt />
    <!-- </transition> -->
    <app-footer />
  </div>
</template>

<script>
import Slider from '@/components/sections/Slider.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppNav from '@/components/layouts/AppNav.vue'
export default {
  components: {
    AppFooter,
    AppNav,
    Slider,
  },
  data() {
    return {
      pageTitle: '',
    }
  },
  mounted() {
    setTimeout(() => {
      const loading = document.querySelector('.loading-screen')

      loading.classList.add('hidden')
      document.getElementsByTagName('body').style.overflow = 'hidden'
    }, 10000)
  },
}
</script>
<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}

.loading-screen img {
  width: 300px;
  height: auto;
}
.loading-screen.hidden {
  display: none !important;
}
</style>
