<template>
  <div id="app">
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
}
</script>
