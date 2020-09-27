import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  featured: [
    {
      name: 'احمد هاني',
      title: 'طبيب نفسي',
      image:
        'https://image.freepik.com/free-photo/smiling-young-pretty-woman-looking-camera-touching-face_1262-15253.jpg',
      description:
        'يواي دولوريم ايبسأديبايسكاي فيلايت, سيد        كيواي نون نيومكيوام ايايوس موداي تيمبورا ',
      facebook: 'www.facebook.com',
      twitter: 'www.twitter.com',
      instagram: 'www.instagram.com',
    },
    {
      name: 'محمود احمد',
      title: 'كاتب',
      image:
        'https://image.freepik.com/free-photo/cheerful-businessman-enjoying-success_1262-16166.jpg',
      description:
        ' كيوايرات فوليوبتس نوستريوم أكسيركايتاشيم                      كونسيكيواتشر؟',
      facebook: 'www.facebook.com',
      twitter: 'www.twitter.com',
      instagram: 'www.instagram.com',
    },
    {
      name: 'احمد مراد',
      title: 'شاعر',
      image:
        'https://image.freepik.com/free-photo/young-businessman-holding-digital-tablet-hand-checking-time_23-2148190736.jpg',
      description:
        ' أت فيرو ايوس ايتايموس ديوكايميوس كيواي        بلاندايتاييس برايسينتايوم فوليوبتاتيوم               سيما يليكيوسيونت ',
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
