<template>
  <div class="author">
    <div class="author__content hover-2">
      <div class="author__imagebox">
        <div class="overlay">
          <span class="vline top"></span>
          <span class="vline bottom" style="background: transparent"></span>
        </div>
        <nuxt-link :to="{ name: 'author' }">
          <LazyImage class="img" :source="author.image" :alt="author.name"
        /></nuxt-link>
      </div>
      <div class="author__details">
        <h6 class="author__name">
          <router-link :to="{ name: 'author' }">{{ author.name }}</router-link>
        </h6>
        <p class="author__title">{{ author.title }}</p>
        <p class="author__description">
          {{ author.description }}
        </p>
      </div>
      <div class="icons">
        <ul class="icons__list">
          <li class="facbook">
            <a :href="author.facebook">
              <facebook-icon class="icons__list--icon facebook"></facebook-icon>
            </a>
          </li>
          <li class="instagram">
            <a :href="author.instagram">
              <instagram-icon class="icons__list--icon" />
            </a>
          </li>
          <li class="twitter">
            <a :href="author.twitter">
              <twitter-icon class="icons__list--icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import InstagramIcon from '@/assets/icons/instagram.svg?inline'

export default {
  name: 'Author',
  components: {
    'facebook-icon': FacebookIcon,
    'twitter-icon': TwitterIcon,
    'instagram-icon': InstagramIcon,
  },
  props: {
    author: Object,
  },
}
</script>
<style scoped>
@import '../../assets/scss/partials/_author.min.css';
</style>
