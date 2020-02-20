<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default { 
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'todo-list' : TodoList
  }
}
</script>

<style lang="scss">

</style>
