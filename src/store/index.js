import Vue from 'vue'
import Vuex from 'vuex'

import {taskModule} from './modules/taskModule'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{},
  modules: {
    task: taskModule
  }
})
