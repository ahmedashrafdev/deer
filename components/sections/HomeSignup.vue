<template>
  <section id="prize">
    <div class="container">
      <div class="prize__content">
        <tabs
          v-lazyload
          class="animate__animated invisible"
          data-animation="slideInUp"
          data-starting-height="4"
        >
          <tab name="Award" :selected="true" class="tab-content">
            <div class="prize__tabs--content-paragraph">
              <div>
                <img
                  src="http://tawbahinstitute.com/design/images/logo/logo.png"
                />
              </div>
              <p class="text">
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
              <h6 class="title mg-bottom-25">
                <a>{{ $t('register_now') }}</a>
              </h6>
            </div>
          </tab>
          <tab name="Conditions" class="tab-content">
            <div class="prize__tabs--content-paragraph">
              <img
                src="http://tawbahinstitute.com/design/images/logo/logo.png"
              />
              <p class="text">
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              <h6 class="title mg-bottom-25">
                <a href="http://arabic.esolve-eg.com/register">{{
                  $t('register_now')
                }}</a>
              </h6>
            </div>
          </tab>
          <tab name="Requirements" class="tab-content">
            <div class="prize__tabs--content-paragraph">
              <img
                src="http://tawbahinstitute.com/design/images/logo/logo.png"
              />
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex
              </p>
              <h6 class="title mg-bottom-25">
                <a href="http://arabic.esolve-eg.com/register">{{
                  $t('register_now')
                }}</a>
              </h6>
            </div>
          </tab>
        </tabs>
        <div
          v-lazyload
          class="prize__form animate__animated invisible"
          data-animation="slideInUp"
          data-starting-height="4"
          data-delay=".1s"
        >
          <div class="prize__form--heading">
            <h4>{{ $t('home_form_content') }}</h4>
          </div>
          <form id="prize-form" class="prize__form--form app-form">
            <div class="form-controller">
              <input type="text" name="name" :placeholder="$t('your_name')" />
            </div>
            <div class="form-controller">
              <input
                type="email"
                name="email"
                :placeholder="$t('your_email')"
              />
            </div>
            <div class="form-controller">
              <input type="text" name="phone" :placeholder="$t('your_phone')" />
            </div>

            <div class="form-controller">
              <button class="btn-apply">{{ $t('apply_now') }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from '@/components/tabs/Tabs.vue'
import Tab from '@/components/tabs/Tab.vue'

export default {
  components: {
    Tab,
    Tabs,
  },
}
</script>
