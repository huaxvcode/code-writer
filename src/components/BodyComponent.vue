<script setup>

import CodeComponent from "@/components/CodeComponent/CodeComponent.vue";
</script>

<template>
<div class="body">
  <code-component/>
</div>
</template>

<style scoped lang="less">
@height: calc(100% - 50px);
.body {
  height: @height;
  width: 100%;
  margin: auto;
  display: flex;
}
</style>