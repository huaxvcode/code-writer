<script setup>
import CodeEditor from "@/components/CodeComponent/CodeEditor.vue";
import {ref, watchEffect} from "vue";
import CodeFileName from "@/components/CodeComponent/CodeFileName.vue";
import TextContent from "@/components/CodeComponent/TextContent.vue";
import SplitComponent from "@/components/SplitComponent.vue";
import SingleCodeNew from "@/components/CodeComponent/SingleCodeNew.vue";

let lang = ref();
let code = ref('');
watchEffect(() => {
  // console.log(CodeComponent.value);
})
let margin = '20px';
let margin1 = '40px';
// eslint-disable-next-line no-undef
let newOne = defineModel('newOne');
// eslint-disable-next-line no-undef
let singleCodeRemove = defineModel('singleCodeRemove');
// eslint-disable-next-line no-undef
let props = defineProps(['hashId']);
</script>

<template>
  <div class="single-code-component-body">
    <div class="single-code-component">
      <div class="single-code-component-del-icon">
        <el-button
            @click="() => { singleCodeRemove = props.hashId; }"
            color="rgba(0, 0, 0, 0)"
            class="single-code-component-del-icon-button"
        >
          <template #icon>
            <svg t="1711811896490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="4295" width="24px" height="24px">
              <path
                  d="M547.14368 512l329.45664 329.45664a23.04 23.04 0 0 1-32.58368 32.58368L514.56 544.58368l-329.45664 329.45664a23.04 23.04 0 0 1-32.58368-32.58368L481.97632 512 152.51968 182.54336a23.04 23.04 0 0 1 32.58368-32.58368L514.56 479.41632l329.45664-329.45664a23.04 23.04 0 0 1 32.58368 32.58368L547.14368 512z"
                  fill="#d81e06" p-id="4296"></path>
            </svg>
          </template>
        </el-button>
      </div>
      <code-file-name v-model:lang-mode="lang"/>
      <split-component :size="margin"/>
      <CodeEditor :lang="lang" v-model:code-string="code"/>
      <split-component :size="margin1"/>
      <text-content class="in-text-content" :name="'in.txt'"/>
      <split-component :size="margin1"/>
      <text-content class="ans-text-content" :name="'ans.txt'"/>
      <split-component :size="margin1"/>
      <text-content class="out-text-content" :name="'out.txt'"/>
      <split-component :size="margin1"/>
      <div class="single-code-new-body" @click="() => { newOne = props.hashId; }">
        <single-code-new/>
      </div>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.single-code-component {
  --border-radius: 10px;
  position: relative;
  max-width: 1500px;
  padding: 40px;
  margin: auto;
  border-radius: var(--border-radius);
  background-color: #24292E;
}

/deep/ .el-button {
  width: 100px;
}

/deep/ .single-code-component-del-icon-button {
  height: unset;
  width: unset;
  font-size: 24px;
  padding: 8px;
  border: 0;
}

.single-code-component-del-icon {
  position: absolute;
  top: 0;
  right: 0;
}

.single-code-component-del-icon > .single-code-component-del-icon-button {
  border-radius: var(--border-radius);
}
</style>