
const storage = {
    fetch() {
        const arr = [];
        const aLength = localStorage.length;
        if (aLength > 0){
            for (let i = 0; i < aLength; i++) {
                let aKeyName = localStorage.key(i);
                if (aKeyName !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(aKeyName)));
                }
            }
        }
        return arr;
    }

}

const state = {
    todoItems: storage.fetch()
}

const getters = {
    storedTodoItems(state) {
      return state.todoItems;
    }
};
const mutations = {
    addTodoItem(state, todoItem) {
        const newItem = {
            completed: false, item: todoItem
        }
        state.todoItems.push(newItem);
        localStorage.setItem(todoItem.toLowerCase(), JSON.stringify(newItem));

    },
    removeTodoItem(state, {todoItem, index}){
        localStorage.removeItem(todoItem.toLowerCase());
        state.todoItems.splice(index, 1);
    },
    toggleTodoItem(state, {todoItem, index}) {
        state.todoItems[index].completed = !state.todoItems[index].completed
        localStorage.removeItem(todoItem.toLowerCase());
        localStorage.setItem(todoItem.toLowerCase(), JSON.stringify(state.todoItems[index]));

    },
    clearAll() {
        state.todoItems = [];
        localStorage.clear();
    }
}

export default {
    state,
    getters,
    mutations
}