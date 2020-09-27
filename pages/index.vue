<template>
  <div class="home">
    <home-about />
    <home-products />
    <home-banner />
    <home-bestsellers />
    <home-featured />
    <home-signup />
    <home-authors />
    <home-testemonials />
  </div>
</template>

<script>
import HomeAbout from '@/components/sections/HomeAbout.vue'
import HomeProducts from '@/components/sections/HomeProducts.vue'
import HomeBanner from '@/components/sections/HomeBanner.vue'
import HomeBestsellers from '@/components/sections/HomeBestsellers.vue'
import HomeSignup from '@/components/sections/HomeSignup.vue'
import HomeAuthors from '@/components/sections/HomeAuthors.vue'
import HomeFeatured from '@/components/sections/HomeFeatured.vue'
import HomeTestemonials from '@/components/sections/HomeTestemonials.vue'
export default {
  layout: 'home',
  components: {
    HomeAbout,
    HomeProducts,
    HomeFeatured,
    HomeSignup,
    HomeBestsellers,
    HomeAuthors,
    HomeBanner,
    HomeTestemonials,
  },
}
</script>
<style>
@import '../assets/scss/pages/_home.min.css';
.invisible {
  visibility: hidden;
}
</style>
