import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  featured: [
    {
      name: 'mai ahmed',
      title: 'Economist',
      image:
        'https://image.freepik.com/free-photo/smiling-young-pretty-woman-looking-camera-touching-face_1262-15253.jpg',
      description:
        'Lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae.',
      facebook: 'www.facebook.com',
      twitter: 'www.twitter.com',
      instagram: 'www.instagram.com',
    },
    {
      name: 'Sherif Saed',
      title: 'Economist',
      image:
        'https://image.freepik.com/free-photo/cheerful-businessman-enjoying-success_1262-16166.jpg',
      description:
        'Lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae.',
      facebook: 'www.facebook.com',
      twitter: 'www.twitter.com',
      instagram: 'www.instagram.com',
    },
    {
      name: 'sherif ellithy',
      title: 'Economist',
      image:
        'https://image.freepik.com/free-photo/young-businessman-holding-digital-tablet-hand-checking-time_23-2148190736.jpg',
      description:
        'Lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae.',
      facebook: 'www.facebook.com',
      twitter: 'www.twitter.com',
      instagram: 'www.instagram.com',
    },
  ],
}
const mutations = {}
const actions = {}
const getters = {
  featured: (state) => state.featured,
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
