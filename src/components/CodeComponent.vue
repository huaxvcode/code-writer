<script setup>

import SingleCodeComponent from "@/components/SingleCodeComponent.vue";
</script>

<template>
<div class="code">
<single-code-component/>
<single-code-component/>
<single-code-component/>
<single-code-component/>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.code {
  width: 100%;
  height: 100%;
  //background-color: rgb(22, 27, 34);
  padding: 20px;
  overflow: auto;
  &::before {
    content: '';
    display: table;
  }
  &::after {
    content: '';
    display: table;
  }
}
</style>