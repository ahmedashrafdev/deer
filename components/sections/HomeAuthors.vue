<template>
  <section id="authors">
    <div>
      <div class="container">
        <div
          v-lazyload
          class="animate__animated invisible"
          data-animation="bounceInRight"
        >
          <section-header title="our_authors">
            <div class="controllers">
              <div class="viewmore">
                <a class="btnrounded">{{ $t('view_all') }}</a>
              </div>
              <div class="next" @click.prevent="$refs.authors.goToNext()">
                <a class="btncircle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.949 511.949"
                  >
                    <path
                      d="M386.235 248.308L140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 000 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 000-15.041z"
                    />
                  </svg>
                </a>
              </div>
              <div class="prev" @click.prevent="$refs.authors.goToPrev()">
                <a class="btncircle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.949 511.949"
                  >
                    <path
                      d="M386.235 248.308L140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 000 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 000-15.041z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section-header>
          <agile
            ref="authors"
            class="sliders"
            :slides-to-show="5"
            :infinite="true"
            :rtl="true"
            :dots="false"
            :nav-buttons="false"
            :responsive="AuthorResponsive"
            :mobile-first="true"
          >
            <author
              v-for="(author, index) in featured"
              :key="index"
              :author="author"
            />
          </agile>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Author from '@/components/partials/Author.vue'
import SectionHeader from '@/components/layouts/SectionHeader.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      components: {
        Author,
        SectionHeader,
      },
      AuthorResponsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 50,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
  },
  computed: {
    ...mapGetters('authors', ['featured']),
  },
}
</script>

<style>
.sliders {
  direction: ltr !important;
}
</style>
