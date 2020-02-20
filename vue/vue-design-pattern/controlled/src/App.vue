<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from '@/components/CheckBox'
export default {
  components: {
    CheckBox
  },
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style>

</style>
