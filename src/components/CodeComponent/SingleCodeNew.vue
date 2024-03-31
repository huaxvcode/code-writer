<script setup>
// eslint-disable-next-line no-undef
let props = defineProps(['close']);
</script>

<template>
  <div class="single-code-new" v-if="props.close">
    <el-button
        class="single-code-new-button"
        color="#24292E"
    >
      <template #icon>
        <svg t="1711858933022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5139" width="30px" height="30px"><path d="M984.6 472.6H551.4V39.4C551.4 17.6 533.7 0 512 0s-39.4 17.6-39.4 39.4v433.2H39.4C17.6 472.6 0 490.2 0 512c0 21.7 17.6 39.4 39.4 39.4h433.2v433.2c0 21.7 17.6 39.4 39.4 39.4s39.4-17.6 39.4-39.4V551.4h433.2c21.7 0 39.4-17.6 39.4-39.4 0-21.8-17.6-39.4-39.4-39.4z" fill="#409EFF" p-id="5140"></path></svg>
      </template>
    </el-button>
  </div>
</template>

<style scoped lang="less">
.single-code-new > .single-code-new-button {
  width: 100%;
  border: 0;
  height: 50px;
  font-size: 26px;
}
</style>