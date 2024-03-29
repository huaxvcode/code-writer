<script setup>
import CodeEditor from "@/components/CodeComponent/CodeEditor.vue";
import {ref, watchEffect} from "vue";
import CodeFileName from "@/components/CodeComponent/CodeFileName.vue";
import TextContent from "@/components/CodeComponent/TextContent.vue";
let lang = ref('python');
let code = ref('');
watchEffect(() => {
  // console.log(CodeComponent.value);
})
</script>

<template>
<div class="single-code-component">
  <code-file-name/>
  <div class="sing-code-split"></div>
  <CodeEditor :lang="lang" v-model:code-string="code"/>
  <div class="sing-code-split"></div>
  <text-content class="in-text-content"/>
  <div class="sing-code-split"></div>
  <text-content class="ans-text-content"/>
  <div class="sing-code-split"></div>
  <text-content class="out-text-content"/>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@margin-bottom: 20px;
.single-code-component {
  max-width: 1500px;
  padding: 40px;
  margin: auto;
  //border: 4px solid black;
  border-radius: 10px;
  background-color: #24292E;
}
.sing-code-split {
  margin-bottom: @margin-bottom;
}
</style>