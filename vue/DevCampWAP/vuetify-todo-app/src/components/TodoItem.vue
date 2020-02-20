<template>
    <v-list>
        <v-list-tile-content v-for="(todoItem, index) in storedTodoItems" v-bind:key="index" px-10>
            <v-container>
                <v-layout row wrap>
                    <v-checkbox @click="toggleTodoItem({todoItem: todoItem.item, index})" color="success" v-model="todoItem.completed" :label="todoItem.item"></v-checkbox>
                    <v-btn @click="removeTodoItem({todoItem: todoItem.item, index})" color="red" large round dark>X</v-btn>
                </v-layout>
            </v-container>
        </v-list-tile-content>
    </v-list>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'TodoItem',
    computed: {
        ...mapGetters(['storedTodoItems']) 
    },
    methods: {
       ...mapMutations({
           removeTodoItem: 'removeTodoItem',
           toggleTodoItem: 'toggleTodoItem'
        })
    }
}
</script>

<style>

</style>
