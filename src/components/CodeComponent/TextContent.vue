<script setup>
import CodeEditor from "@/components/CodeComponent/CodeEditor.vue";
import {watchEffect} from "vue";
import ShowName from "@/components/CodeComponent/ShowName.vue";
import SplitComponent from "@/components/SplitComponent.vue";
// eslint-disable-next-line no-undef
let code = defineModel('code');
watchEffect(() => {
})
// eslint-disable-next-line no-undef
let props = defineProps(['name']);
</script>

<template>
  <div class="text-content">
    <show-name>{{ props.name }}</show-name>
    <split-component :size="'5px'"/>
    <code-editor
      :style="{minHeight: '200px', maxHeight: '400px'}"
      v-model:code-string="code"
    />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>