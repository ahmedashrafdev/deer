<template>
  <div id="ThemesSlideshow">
    <agile
      :nav-buttons="false"
      :dots="false"
      :pause-on-hover="false"
      class="sliders"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="h-screen w-screen"
      >
        <div
          class="h-full w-full slide-img relative flex items-center flex-col sliders-overlay"
          :style="`background-image: url('${slide.src}')`"
        ></div>
      </div>
    </agile>
  </div>
</template>
<script>
import { VueAgile } from 'vue-agile'
import { mapGetters } from 'vuex'
export default {
  compinents: {
    VueAgile,
  },
  computed: {
    ...mapGetters('slider', ['slides']),
  },
}
</script>

<style scoped>
@import '../../assets/scss/components/_slider.min.css';
</style>
