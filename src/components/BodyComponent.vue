<script setup>
import CodeComponent from "@/components/CodeComponent/CodeComponent.vue";
// eslint-disable-next-line no-undef
let focusFileName = defineModel('focusFileName');
</script>

<template>
<div class="body-component">
  <code-component v-model:focus-file-name="focusFileName"/>
</div>
</template>

<style scoped lang="less">
.body-component {
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>