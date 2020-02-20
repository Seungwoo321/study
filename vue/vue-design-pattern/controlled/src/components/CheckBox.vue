<template>
  <div>
    <input type="checkbox"
      :value="value" @click="toggleCheckBox">
  </div>
</template>

<script>
export default {
  // @input 이벤트
  // :value 값
  props: ['value'], // false
  methods: {
    toggleCheckBox () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style>

</style>
