<template>
  <div id="app">
    <app-nav />
    <Header :page="pageTitle" />
    <!-- <transition name="router-anim" enter-active-class="animated active zoomInLeft" leave-active-class="animated active zoomOutRight"> -->
    <nuxt />
    <!-- </transition> -->
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
import AppNav from '@/components/layouts/AppNav.vue'
export default {
  components: {
    'app-footer': AppFooter,
    'app-nav': AppNav,
    Header,
  },
  data() {
    return {
      pageTitle: '',
    }
  },
}
</script>
