import Vue from 'vue'
import Vuex from 'vuex'

import button from './button'
import showcase from './showcase'
import walle from './walle'
import colors from './colors'
import window from './window'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      button,
      showcase,
      walle,
      colors,
      window
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
