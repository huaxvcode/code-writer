<script setup>

import CodeComponent from "@/components/CodeComponent.vue";
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
  padding: 20px;
}
</style>