// import Vue from 'vue'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// import 'animate.css'
// import VueFullpageJS from 'vue-fullpage.js'

// VueFullpageJS.install(Vue)

// import 'fullpage-vue/src/fullpage.css'
// import VueFullpage from 'fullpage-vue'
// VueFullpage.install(Vue)

// import animate from 'animate.css'
// import fullpage from 'fullpage-vue/src/fullpage.css'
// animate.install(Vue)
// fullpage.install(Vue)
// GobblyGook.install(Vue);
// export default ({ Vue }) => {
//   Vue.use(VueFullpage)
// }
import ScrollAnimation from '../directives/scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation);

import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
// import VueFullPage from '../../dist/vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css'
import 'fullpage.js/vendors/scrolloverflow'

// VueFullpage.install(Vue)
Vue.use(VueFullPage)

// import AOS from 'aos'
// import 'aos/dist/aos.css'

// import Vue from 'vue'
// import VueAnimateOnScroll from 'vue-animate-onscroll'

// Vue.use(VueAnimateOnScroll)
