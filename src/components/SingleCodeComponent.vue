<script setup>
import CodeEditor from "@/components/CodeEditor.vue";
import {ref, watchEffect} from "vue";
let lang = ref('python');
let code = ref('');
watchEffect(() => {
  console.log(code.value);
})
</script>

<template>
<CodeEditor v-model:lang="lang" v-model:code-string="code"/>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
code-editor {
  font-size: 24px;
}
</style>