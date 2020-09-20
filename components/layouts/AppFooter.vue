<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="content">
          <div class="about animated" data-animation="zoomIn">
            <div class="about__header">
              <h4 class="white-header">{{ $t('about_deer') }}</h4>
            </div>
            <div class="about__content">
              <p class="normmalP">
                ليست مجرد دار نشر تتبنى أي موهبة حقيقية، وإنما هي شركة توزيع
                لكافة دور النشر العربية. معنا، سيصل كتابك إلى كل مكتبة، وكل
                محافظة، وكل بلد.
              </p>
            </div>
            <div class="contacts">
              <ul class="contacts__list">
                <li class="contacts__item">
                  <AdressIcon />
                  <span class="contacts__content">
                    عمارات الوادي رقم 2 ِ المنطقه ( 11 ) الحي الثامنِ ِ مدينه
                    نصر‎ Cairo, Cairo Governorate, Egypt
                  </span>
                </li>
                <li class="contacts__item">
                  <phone-icon class="phone-icon" />
                  <span class="contacts__content"> 01010106268</span>
                </li>
                <li class="contacts__item">
                  <email-icon />
                  <span class="contacts__content"> info@deer.com </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="links animated" data-animation="zoomIn">
            <div class="links__content">
              <div class="links__header">
                <h4 class="white-header">{{ $t('useful_links') }}</h4>
              </div>
              <ul class="links__list">
                <div class="left">
                  <li class="links__item">
                    <nuxt-link :to="{ name: 'home' }" class="links__link"
                      ><span>></span>{{ $t('home') }}</nuxt-link
                    >
                  </li>
                  <li class="links__item">
                    <nuxt-link :to="{ name: 'about' }" class="links__link"
                      ><span>></span>{{ $t('about') }}</nuxt-link
                    >
                  </li>
                  <li class="links__item">
                    <nuxt-link :to="{ name: 'releases' }" class="links__link"
                      ><span>></span>{{ $t('releases') }}</nuxt-link
                    >
                  </li>
                  <li class="links__item">
                    <nuxt-link :to="{ name: 'contact' }" class="links__link"
                      ><span>></span>{{ $t('contact') }}</nuxt-link
                    >
                  </li>
                </div>
                <div class="right">
                  <li class="links__item">
                    <nuxt-link :to="{ name: 'blog' }" class="links__link"
                      ><span>></span>{{ $t('blog') }}</nuxt-link
                    >
                  </li>
                  <li class="links__item">
                    <nuxt-link :to="{ name: 'authors' }" class="links__link"
                      ><span>></span>{{ $t('authors') }}</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div class="gallery animated" data-animation="zoomIn">
            <div class="gallery__header">
              <h4 class="white-header">{{ $t('deer_gallery') }}</h4>
            </div>
            <div class="gallery__images">
              <div
                v-for="(image, index) in footerImages"
                :key="index"
                class="gallery__images--imagebox hover-2"
              >
                <img
                  src="@/assets/images/load.gif"
                  :data-src="image.src"
                  :alt="image.alt"
                />
                <div class="overlay small">
                  <span class="vline top"></span>
                  <span class="vline bottom"></span>
                </div>
              </div>
            </div>
            <div class="viewmore">
              <nuxt-link :to="{ name: 'gallery' }"
                >{{ $t('view_more') }}<span> &#8811; </span></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="bottom animated" data-animation="fadeInUp">
      <div class="container">
        <div class="bottom__content">
          <div class="copyright">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p v-html="$t('copyrights')"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/icons/email.svg?inline'
import AdressIcon from '@/assets/icons/map-pin.svg?inline'
import { mapGetters } from 'vuex'
import PhoneIcon from '@/assets/icons/phone.svg?inline'
export default {
  name: 'AppFooter',

  components: {
    EmailIcon,
    AdressIcon,
    PhoneIcon,
  },
  computed: {
    ...mapGetters('gallery', ['footerImages']),
  },
}
</script>

<style scoped>
@import '../../assets/scss/layout/_footer.min.css';
</style>
