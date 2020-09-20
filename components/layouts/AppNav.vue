<template>
  <header v-scroll="handleScroll" class="header">
    <div class="container z-i10">
      <div class="content">
        <div v-scroll="handleScroll" class="logobox">
          <nuxt-link :to="{ name: 'home' }" class="logo"
            ><img src="@/assets/images/logo.png"
          /></nuxt-link>
        </div>
        <div class="burger" @click="toggleNav">
          <div></div>
          <span>menue</span>
        </div>
        <nav class="mainnav">
          <ul class="nav__list">
            <nuxt-link tag="li" :to="{ name: 'home' }" class="nav__item">
              <a class="nav__link">{{ $t('home') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'about' }" class="nav__item">
              <a class="nav__link">{{ $t('about') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'releases' }" class="nav__item">
              <a class="nav__link">{{ $t('releases') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'blog' }" class="nav__item">
              <a class="nav__link">{{ $t('blog') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'gallery' }" class="nav__item">
              <a class="nav__link">{{ $t('gallery') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'stores' }" class="nav__item">
              <a class="nav__link">{{ $t('stores') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'authors' }" class="nav__item">
              <a class="nav__link">{{ $t('authors') }}</a>
            </nuxt-link>
            <nuxt-link tag="li" :to="{ name: 'contact' }" class="nav__item">
              <a class="nav__link">{{ $t('contact') }}</a>
            </nuxt-link>
          </ul>
          <span class="nav__close" @click="toggleNav">&times;</span>
        </nav>
        <div class="icons">
          <search-icon class="icons__search" @click="toggleSearch" />
          <div class="search-box">
            <form action="#" class="search-box__form">
              <input
                class="search-box__input"
                type="search"
                name="search"
                :placeholder="$t('im_looking_for')"
              />
              <search-icon class="search-box__icon" />
            </form>
            <strong class="search-box__close" @click="toggleSearch"
              >&times;</strong
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchIcon from '@/assets/icons/search.svg?inline'
export default {
  name: 'AppNavBar',
  components: {
    'search-icon': SearchIcon,
  },
  methods: {
    toggleSearch: () => {
      const search = document.querySelector('.search-box')
      search.classList.toggle('active')
    },
    handleScroll: (evt, el) => {
      window.scrollY > 50
        ? el.classList.add('mini')
        : el.classList.remove('mini')
    },
    toggleNav: () => {
      const nav = document.querySelector('.mainnav')
      nav.classList.toggle('active')
    },
    closeNav: () => {
      console.log('hi')
    },
    setLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ar' : 'en'
      localStorage.setItem('locale', this.$i18n.locale)
      if (this.$i18n.locale === 'ar') {
        localStorage.setItem('rtl', 'true')
      } else {
        localStorage.setItem('rtl', 'false')
      }
    },
  },

  watch: {
    $route() {
      const nav = document.querySelector('.mainnav')
      nav.classList.remove('active')
    },
  },
}
</script>

<style scoped>
@import '../../assets/scss/layout/_navbar.min.css';
</style>
