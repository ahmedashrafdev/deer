<template>
  <div class="book">
    <nuxt-link :to="{ name: 'release', params: { img: product.image } }">
      <div class="book__image">
        <div class="book__image--wrapper">
          <div class="front" style="position: relative">
            <lazyImage :source="product.image" :alt="product.name" />
          </div>
          <div class="back">
            <img :src="product.image" :alt="product.name" />
          </div>
        </div>
      </div>
    </nuxt-link>
    <div class="book__details">
      <div class="book__categories">
        <ul class="book__categories--list">
          <li>رواية</li>
          <li>دراما</li>
        </ul>
      </div>
      <div class="sale-lable"><span>خصم</span></div>
      <div class="book__title">
        <nuxt-link :to="{ name: 'release', params: { img: product.image } }">{{
          product.name
        }}</nuxt-link>
      </div>
      <div class="book__author">
        <span>{{ $t('by') }}: </span
        ><nuxt-link :to="{ name: 'author' }">{{ product.author }}</nuxt-link>
      </div>
      <div class="book__rate">
        <star-rating
          :rtl="true"
          :star-size="20"
          :read-only="true"
          text-class="hidden"
          :rating="product.rate"
        />
      </div>
      <div class="book__price price">
        <del> EGP50</del>
        <span class="space"></span>
        <ins> EGP35</ins>
      </div>
      <add-to-cart-btn />
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'ProuctPartial',
  components: {
    StarRating,
  },
  props: ['product'],
}
</script>

<style scoped>
@import '../../assets/scss/partials/_product.min.css';
</style>
