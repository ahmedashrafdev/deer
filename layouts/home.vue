<template>
  <div id="app">
    <app-nav />
    <!-- <transition name="router-anim" enter-active-class="animated active zoomInLeft" leave-active-class="animated active zoomOutRight"> -->
    <Nuxt />
    <!-- </transition> -->
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppNav from '@/components/layouts/AppNav.vue'
export default {
  components: {
    'app-footer': AppFooter,
    'app-nav': AppNav,
  },
}
</script>
