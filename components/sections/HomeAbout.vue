<template>
  <section class="about">
    <div class="container">
      <div class="about__content">
        <div
          v-lazyload
          class="left animate__animated invisible"
          data-animation="fadeInUp"
          data-starting-height="2"
        >
          <div class="about__header">
            <h4 class="main-header">{{ $t('about_deer') }}</h4>
          </div>
          <div class="about__info">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="aboutContent"></div>
            <router-link :to="{ name: 'release' }" class="btn-text"
              >{{ $t('read_more') }}<arrow-right class="icon"
            /></router-link>
          </div>
        </div>
        <div
          v-lazyload
          class="right animate__animated invisible"
          data-animation="fadeInLeft"
          data-starting-height="2"
        >
          <div class="composition">
            <LazyImage
              v-for="(image, index) in aboutImages"
              :key="index"
              data-animation="pulse"
              class="animate__animated invisible composition__image"
              :source="image.src"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowRight from '@/assets/icons/arrow-right.svg?inline'
import { mapGetters } from 'vuex'
export default {
  components: {
    ArrowRight,
  },
  computed: {
    ...mapGetters('staticHtml', ['aboutContent', 'aboutImages']),
  },
}
</script>
