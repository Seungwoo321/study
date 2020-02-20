<template>
    <div class="header">
        <router-link to="/news"> News </router-link> |
        <router-link to="/ask"> Asks </router-link> |
        <router-link to="/jobs"> Jobs </router-link> |
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active {
    color: #35495e
}
.header a {
    color: white;
}
a {
    color: #34495e;
    text-decoration: none;
}
a.router-link-exact-active {
    text-decoration: underline;
}
</style>
