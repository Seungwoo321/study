import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const storage = {
    fetch() {
        const arr = []
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(localStorage.key(i));
        }
        return arr;
    }
}

const store = new Vuex.Store({
    state: {
        message: 'Hello Vuex',
        todoItems: storage.fetch()
    },
    getters: {
        getMessage(state) {
            return state.message;
        }
    },
    mutations: {
        addTodoItem(state, item) {
            state.todoItems.push(item);
        },
        removeTodoItem(state, { item, index }) {
            state.todoItems.splice(index, 1);
            localStorage.removeItem(item);
        },
        removeAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
    // actions
});

export default store