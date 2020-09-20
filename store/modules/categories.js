export default {
  namespaced: true,
  state: {
    categories: [
      {
        name: 'Sports, Hobbies & Games',
        slug: '#',
      },
      {
        name: "Children's & Young Adult",
        slug: '#',
      },
      {
        name: 'History & Archaeology',
        slug: '#',
      },
      {
        name: 'Personal Development & Self-Help',
        slug: '#',
      },
      {
        name: 'Fiction',
        slug: '#',
      },
      {
        name: 'Mind, Body & Spirit',
        slug: '#',
      },
      {
        name: 'Business, Finance & Law',
        slug: '#',
      },
      {
        name: 'Society & Social Sciences',
        slug: '#',
      },
      {
        name: 'Art & Photography',
        slug: '#',
      },
    ],
  },

  getters: {
    categories: (state) => state.categories,
  },
  mutations: {},
  actions: {},
}
