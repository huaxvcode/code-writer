<script setup>
import CodeEditor from "@/components/CodeComponent/CodeEditor.vue";
import {ref, watchEffect} from "vue";
import CodeFileName from "@/components/CodeComponent/CodeFileName.vue";
import TextContent from "@/components/CodeComponent/TextContent.vue";
import SplitComponent from "@/components/SplitComponent.vue";
let lang = ref();
let code = ref('');
watchEffect(() => {
  // console.log(CodeComponent.value);
})
let margin = '20px';
let margin1 = '40px';
</script>

<template>
<div class="single-code-component">
  <code-file-name v-model:lang-mode="lang"/>
  <split-component :size="margin"/>
  <CodeEditor :lang="lang" v-model:code-string="code"/>
  <split-component :size="margin1"/>
  <text-content class="in-text-content" :name="'in.txt'"/>
  <split-component :size="margin1"/>
  <text-content class="ans-text-content" :name="'ans.txt'"/>
  <split-component :size="margin1"/>
  <text-content class="out-text-content" :name="'out.txt'"/>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.single-code-component {
  max-width: 1500px;
  padding: 40px;
  margin: auto;
  //border: 4px solid black;
  border-radius: 10px;
  background-color: #24292E;
}
/deep/ .el-button {
  width: 100px;
}
</style>