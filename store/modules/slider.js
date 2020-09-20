export default {
  namespaced: true,
  state: {
    slides: [
      {
        image:
          'https://image.freepik.com/free-photo/woman-reading-near-wall_23-2147797511.jpg',
        link: '#',
      },
      {
        image:
          'https://image.freepik.com/free-photo/top-view-book-flowers_23-2148213904.jpg',
        link: '#',
      },
      {
        image:
          'https://image.freepik.com/free-photo/flower-vase-front-young-woman-reading-yellow-book_23-2148066862.jpg',
        link: '#',
      },

      {
        image:
          'https://image.freepik.com/free-photo/education-concept-books-laptop-library_1150-10586.jpg',
        link: '#',
      },

      {
        image:
          'https://img.freepik.com/free-photo/girl-holding-book-front-face_23-2147690566.jpg?size=664&ext=jpg',
        link: '#',
      },
    ],
  },

  getters: {
    slides: (state) => state.slides,
  },
  mutations: {},
  actions: {},
}
