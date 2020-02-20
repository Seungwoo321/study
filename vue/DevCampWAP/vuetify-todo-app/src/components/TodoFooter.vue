<template>
    <v-form>
        <v-btn @click="clearAll" color="primary" large block>Clear</v-btn>
    </v-form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations(['clearAll'])
    }
}
</script>

<style>

</style>
