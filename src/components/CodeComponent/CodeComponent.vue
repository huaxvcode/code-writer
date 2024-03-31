<script setup>

import SingleCodeComponent from "@/components/CodeComponent/SingleCodeComponent.vue";
</script>

<template>
  <div class="code-component">
    <single-code-component/>
    <div class="code-component-split"></div>
    <single-code-component/>
    <div class="code-component-split"></div>
    <single-code-component/>
    <div class="code-component-split"></div>
    <single-code-component/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.code-component {
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: auto;

  &::before {
    content: '';
    display: table;
  }

  &::after {
    content: '';
    display: table;
  }

  .code-component-split {
    @margin-split: 50px;
    margin-top: @margin-split;
  }

}
</style>