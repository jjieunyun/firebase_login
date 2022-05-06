import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistence, { VuexPersistence } from 'vuex-persist'
import modProvider from '@/store/provider'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    provider : modProvider,
  },
  plugins : [(new VuexPersistence({
    storage : window.localStorage
  })).plugin]
})
