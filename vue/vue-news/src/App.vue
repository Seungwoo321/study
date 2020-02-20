<template>
  <div id="app">
        <tool-bar></tool-bar>
        <transition name="page">
            <router-view/>
        </transition>
        <spinner :loading="loadingStatus"></spinner>
  </div>
</template>
<script>
import Spinner from '@/components/Spinner'
import ToolBar from '@/components/ToolBar'
import bus from '@/utils/bus'
export default {
    components: {
        ToolBar,
        Spinner
    },
    data () {
        return {
            loadingStatus: false
        }
    },
    methods: {
        startSpinner () {
            this.loadingStatus = true
        },
        endSpinner () {
            this.loadingStatus = false
        }
    },
    created () {
        bus.$on('start:spinner', this.startSpinner)
        bus.$on('end:spinner', this.endSpinner)
    },
    beforeDestroy () {
        bus.$off('start:spinner', this.startSpinner)
        bus.$off('start:spinner', this.endSpinner)
    }
}
</script>

<style lang="scss">
body {
    padding: 0;
    margin: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
