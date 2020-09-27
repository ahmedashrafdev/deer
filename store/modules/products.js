export default {
  namespaced: true,
  state: {
    featured: [
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-01.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-02.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-03.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-04.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-05.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-06.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-07.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-08.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-09.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
      {
        name: 'اسم الكتاب',
        rate: 3,
        link: '#',
        image:
          'http://exprostudio.com/html/book_library/images/books/img-10.jpg',
        author: 'احمد مراد',
        date: '2019-03-09 22:05:42',
      },
    ],

    featuredBook: {
      name: 'اشياء لتعرفها عن التصميم الاخضر',
      rate: 4,
      link: '#',
      image: 'http://exprostudio.com/html/book_library/images/img-02.png',
      author: 'احمد مراد',
      date: '2019-03-09 22:05:42',
    },
  },

  getters: {
    featured: (state) => state.featured,
    bestsellers: (state) => state.featured,
    featuredBook: (state) => state.featuredBook,
  },
  mutations: {},
  actions: {},
}
