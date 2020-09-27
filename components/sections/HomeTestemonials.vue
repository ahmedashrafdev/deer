<template>
  <section id="testemonials">
    <div
      v-lazyload
      class="container animate__animated invisible"
      data-animation="bounceIn"
    >
      <section-header title="what_people_say">
        <div class="controllers">
          <div class="next" @click.prevent="$refs.carousel.goToNext()">
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
          <div
            class="prev"
            @click.prevent="$refs.testemonialsCarousel.goToPrev()"
          >
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
        ref="testemonialsCarousel"
        :nav-buttons="false"
        class="sliders"
        :slides-to-show="2"
        :infinite="true"
        :rtl="true"
        :dots="false"
        :responsive="testemoinalsResponsive"
        :mobile-first="true"
        ><Testemonial
          v-for="(testemonial, index) in testemonials"
          :key="index"
          class="single-slide-testemonial"
          :item="testemonial"
        />
      </agile>
    </div>
  </section>
</template>

<script>
import Testemonial from '@/components/partials/Testemonial.vue'
import SectionHeader from '@/components/layouts/SectionHeader.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Testemonial,
    SectionHeader,
  },
  data() {
    return {
      testemoinalsResponsive: [
        {
          breakpoint: 1200,
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
          breakpoint: 50,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
  },

  computed: {
    ...mapGetters('testemonials', ['testemonials']),
  },
}
</script>
