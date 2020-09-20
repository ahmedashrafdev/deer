import Vue from 'vue'
import LazyLoadDirective from '@/directives/LazyLoadDirective'
import Scroll from '@/directives/Scroll'

Vue.directive('lazyload', LazyLoadDirective)
Vue.directive('scroll', Scroll)
