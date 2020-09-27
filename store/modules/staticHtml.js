export default {
  namespaced: true,
  state: {
    aboutImages: [
      {
        src:
          'https://img.freepik.com/free-photo/open-flying-old-books_1232-2096.jpg?size=664&ext=jpg',
        seo: 'deer',
      },
      {
        src:
          'https://image.freepik.com/free-photo/gorgeous-beautiful-clever-woman-eyeglasses-reading-interesting-book-looks-pensive_8353-6761.jpg',
        seo: 'deer',
      },
      {
        src:
          'https://image.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg',
        seo: 'deer',
      },
    ],
    aboutContent:
      '<p class="normalP">In 1792 the Counter Hill Academy opened its doors in New Cross, ina house built by Deptford distiller, William Goodhew. The RoyalNaval School then bought the site, building what is now ourRichard Hoggart Building in 1843.</p><p class="normalP special publico-font">A transformational experience that will shape your unique profile and help you launch your professional career.</p><p class="normalP">With the dawn of the twentieth century, the Company handed overthe Institute to the University of London. It was re-christenedGoldsmiths College and the modern era of Goldsmiths had begun.</p>',
  },

  getters: {
    aboutImages: (state) => state.aboutImages,
    aboutContent: (state) => state.aboutContent,
  },
  mutations: {},
  actions: {},
}
