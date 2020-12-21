import Vue from 'vue';
import Vuex from 'vuex';
import state from './State'
import actions from './Actions'
import mutations from './Mutatios'
import getters from './Getters'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    plugins: [createPersistedState()],
})