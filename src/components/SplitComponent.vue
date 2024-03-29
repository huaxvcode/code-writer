<script setup>
// eslint-disable-next-line no-undef
let props = defineProps(['size'])
</script>

<template>
<div class="split-component" :style="{'--size': props.size}"></div>
</template>

<style scoped lang="less">
.split-component {
  margin-top: var(--size);
}
</style>