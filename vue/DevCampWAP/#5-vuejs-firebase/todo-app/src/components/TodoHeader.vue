<template>
    <header>
        <h1>
            <h1>{{ this.$store.state.message }}</h1>
        </h1>
    </header>
</template>
<script>
export default {
    data() {
        return {
            headerText: 'Todo App'
        }
    },
    computed: {
        appHeader() {
            return this.headerText.split('').reverse().join('');
        }
    },
    created() {
        //console.log(this.$store);
    }
}
</script>

<style>
    h1 {
        color: #2f3b52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>
