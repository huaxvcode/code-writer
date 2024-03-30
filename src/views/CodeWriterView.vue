<script setup>

import MemuComponent from "@/components/MemuComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
</script>

<template>
<div class="code-writer">
  <div class="code-writer-menu"><memu-component/></div>
  <body-component/>
</div>
</template>

<style scoped lang="less">
@width: 100%;
@height: 100%;
.code-writer {
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: @width;
  height: @height;
}
.code-writer-menu {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>