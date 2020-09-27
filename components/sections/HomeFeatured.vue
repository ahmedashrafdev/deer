<template>
  <section id="featured-book" class="">
    <div class="container">
      <div class="featured">
        <div
          v-lazyload
          class="animate__animated invisible featured__image"
          data-animation="fadeInRight"
        >
          <lazyImage :source="featuredBook.image" :alt="featuredBook.name" />
        </div>
        <div
          v-lazyload
          class="animate__animated invisible featured__details"
          data-animation="fadeInUp"
        >
          <div class="title">
            <h3>
              <nuxt-link to="">
                {{ featuredBook.name }}
              </nuxt-link>
            </h3>
          </div>
          <div class="author">
            <span>{{ $t('by') }}: </span
            ><nuxt-link to="">
              {{ featuredBook.author }}
            </nuxt-link>
          </div>
          <div class="featured__rate">
            <star-rating
              :rtl="true"
              :star-size="20"
              :read-only="true"
              text-class="hidden"
              :rating="featuredBook.rate"
            />
          </div>
        </div>
        <div
          v-lazyload
          class="animate__animated featured__price invisible featured__details"
          data-animation="fadeInLeft"
        >
          <div class="price">
            <ins> LE35</ins>
            <span class="space"></span>
            <del> LE50</del>
          </div>
          <add-to-cart-btn class="active" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from 'vue-star-rating'
import { mapGetters } from 'vuex'
export default {
  components: {
    StarRating,
  },
  computed: {
    ...mapGetters('products', ['featuredBook']),
  },
}
</script>
<style scoped>
@import '../../assets/scss/components/_featuredbook.min.css';
</style>
