<script setup>
import {ref, watch} from "vue";
import ShowName from "@/components/CodeComponent/ShowName.vue";
import SplitComponent from "@/components/SplitComponent.vue";
import { langMode } from "@/assets/static/LangMode";
// eslint-disable-next-line no-undef
let fileName = defineModel('fileName');
let fontColor = ref('rgb(67,105,182)');
// eslint-disable-next-line no-undef
let onFocus = defineModel('onFocus');
let lang = ref();
// eslint-disable-next-line no-undef
let lm = defineModel('langMode');
onFocus.value = false;
watch(
    onFocus,
    () => {
      if (onFocus.value) fontColor.value = 'rgb( 92,188,104)';
      else fontColor.value = 'rgb(67,105,182)';
    },
    { immediate: true }
)

const getLangMode = (name) => {
  if (!name) return null;
  let ans = '';
  let reverse = (s) => {
    if (!s) return null;
    let ans = '';
    for (let i = s.length - 1; i > -1; i --) {
      ans += s.charAt(i);
    }
    return ans;
  }
  for (let i = name.length - 1; i > -1; i --) {
    if (name[i] === '.') { return reverse(ans); }
    ans += name[i];
  }
  return null;
};
watch(fileName, () => {
  let ans = getLangMode(fileName.value);
  if (ans && langMode[ans]) {
    lang.value = ans;
    lm.value = ans;
  }
  else {
    lang.value = null;
    lm.value = null;
  }
})
</script>

<template>
  <div>
    <div class="code-file-name-show-button">
      <show-name>{{ lang }}</show-name>
    </div>
    <split-component :size="'5px'"/>
    <div class="code-file-name">
      <el-input
          :maxlength="25"
          v-model="fileName"
          clearable
          show-word-limit
          placeholder="File name here ..."
      />
  </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.code-file-name {
  --code-file-name-margin-bottom: 0px;
  --code-file-name-height: 50px;
  margin-bottom: var(--code-file-name-margin-bottom);
  height: var(--code-file-name-height);
}
/deep/ .el-input {
  --el-input-bg-color: rgb( 40, 44, 52);
  --el-input-height: var(--code-file-name-height);
  --el-input-text-color: v-bind(fontColor);
  font-size: 26px;
  --el-input-placeholder-color: rgb(136,136,136);
  --el-input-border-radius: 0;
}
/deep/ .el-input__wrapper {
  box-shadow: none;
}
/deep/ .el-input__inner {
  font-family: monospace;
  font-weight: bold;
}
/deep/ .el-input__count-inner {
  --el-fill-color-blank: rgb( 30, 31, 34);
}
</style>