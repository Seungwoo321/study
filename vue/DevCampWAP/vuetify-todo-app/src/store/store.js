import Vue from 'vue'
import Vuex from 'vuex'
import TodoItems from './modules/TodoItems.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    TodoItems
  }
});
