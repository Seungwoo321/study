<template>
    <div>
        <input type="text" v-model="inputValue">
        <ul v-for="item in items" :key="item">
            <li>{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            items: ['a','b','c','d'] 
        }
    }
}
</script>

<style>

</style>
