<template>
    <form>
        <v-text-field placeholder="What needs to be done?" v-model='todoItem'></v-text-field>
        <v-layout row wrap>
            <v-btn @click="addTodoItem" color="green" dark large block>Add</v-btn>
        </v-layout>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            todoItem : ''
        }
    },
    methods: {
        addTodoItem() {
            if (this.todoItem !== ''){
                this.$store.commit('addTodoItem', this.todoItem);
            }
        }
    }
}
</script>

<style>

</style>
