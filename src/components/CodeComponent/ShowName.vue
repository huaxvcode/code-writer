<script setup>

</script>

<template>
<div class="show-name">
  <el-button
    :disabled="false"
    color="rgb(64,158,255)"
  >
    <template #default><slot></slot></template>
  </el-button>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/deep/ .el-button {
  font-family: "Fira Code", monospace;
  font-size: 18px;
  font-weight: bold;
  color: #24292E;
}
</style>