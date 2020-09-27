<template>
  <div class="wrapper">
    <div class="testemonial">
      <div class="testemonial__content">
        <div class="testemonial__left">
          <div class="testemonial__avatar">
            <a href="#"><img :src="item.image" :alt="item.name" /></a>
          </div>
          <div class="socails">
            <ul class="socails__list">
              <li>
                <a :href="item.facebook"><facebook-icon /></a>
              </li>
              <li>
                <a :href="item.instagram"><instagram-icon /></a>
              </li>
              <li>
                <a :href="item.twitter"><twitter-icon /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="testemonial__right">
          <div class="testemonial__info">
            <h4 class="testemonial__name">
              <a href="#">{{ item.name }}</a>
            </h4>
            <p class="testemonial__title">{{ item.title }}</p>
          </div>
          <blockquote>
            {{ item.content }}
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import InstagramIcon from '@/assets/icons/instagram.svg?inline'
export default {
  name: 'Testemonial',
  props: {
    item: Object,
  },
  components: {
    'facebook-icon': FacebookIcon,
    'twitter-icon': TwitterIcon,
    'instagram-icon': InstagramIcon,
  },
}
</script>
<style scoped>
@import '../../assets/scss/partials/_testemonial.min.css';
</style>
