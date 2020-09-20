import Vuex from 'vuex'
import authors from './modules/authors.js'
import gallery from './modules/gallery.js'
import products from './modules/products.js'
import testemonials from './modules/testemonials.js'
import ui from './modules/ui.js'
import slider from './modules/slider.js'
import categories from './modules/categories.js'
import user from './modules/user.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      authors,
      gallery,
      products,
      testemonials,
      ui,
      slider,
      categories,
      user,
    },
  })
}

export default createStore
