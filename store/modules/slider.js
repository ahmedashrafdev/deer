export default {
  namespaced: true,
  state: {
    slides: [
      {
        src: 'https://deerpublishing.b-cdn.net/slide-1.jpg',
        caption: 'home.slides.slide1',
      },
      {
        src: 'https://deerpublishing.b-cdn.net/slide-2.jpg',
        caption: 'home.slides.slide2',
      },
      {
        src: 'https://deerpublishing.b-cdn.net/slide-3.jpg',
        caption: 'home.slides.slide2',
      },
    ],
  },

  getters: {
    slides: (state) => state.slides,
  },
  mutations: {},
  actions: {},
}
