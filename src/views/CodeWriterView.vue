<script setup>

import MemuComponent from "@/components/MemuComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
</script>

<template>
<div class="code-writer">
  <memu-component/>
  <body-component/>
</div>
</template>

<style scoped lang="less">
@width: 100%;
@height: 100%;
.code-writer {
  background-color: #24292E;
  position: absolute;
  width: @width;
  height: @height;
}
</style>