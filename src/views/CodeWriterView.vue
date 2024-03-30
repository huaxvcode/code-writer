<script setup>

import MemuComponent from "@/components/MemuComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
</script>

<template>
<div class="code-writer">
  <div class="code-writer-menu"><memu-component/></div>
  <div class="code-writer-body"><body-component/></div>
</div>
</template>

<style scoped lang="less">
@width: 100vw;
@height: 100vh;
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
/deep/ .menu-component {
  height: 55px;
}
/deep/ .body-component {
  height: calc(100vh - 55px);
}
</style>