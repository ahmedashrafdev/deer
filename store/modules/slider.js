export default {
  namespaced: true,
  state: {
    slides: [
      {
        src:
          'https://image.freepik.com/free-photo/woman-reading-near-wall_23-2147797511.jpg',
        caption: 'home.slides.slide1',
      },
      {
        src:
          'https://image.freepik.com/free-photo/woman-reading-near-wall_23-2147797511.jpg',
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
