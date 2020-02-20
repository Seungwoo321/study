<template>
    <v-app>
        <todo-header></todo-header>
        <v-container>
            <todo-input></todo-input>
            <todo-item></todo-item>
            <todo-footer></todo-footer>    
        </v-container>
    </v-app>
</template>

<script>
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'

export default {
    components: {
        'todo-header': TodoHeader,
        'todo-input': TodoInput,
        'todo-item': TodoItem,
        'todo-footer': TodoFooter
    }
}

</script>

<style>

</style>
