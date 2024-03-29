<template>
  <div class="code-editor">
    <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :style="style_"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @ready="handleReady"
        @change="log('change', $event)"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
    />
  </div>
</template>

<script setup>
import {onMounted, reactive, ref, shallowRef, watch, watchEffect} from 'vue'
import { Codemirror } from 'vue-codemirror'
import { oneDark } from '@codemirror/theme-one-dark'
import { langMode } from "@/assets/static/LangMode";
// eslint-disable-next-line no-undef
let props = defineProps(['lang', 'style']);
const code = ref(``)
const extensions = [oneDark]
// eslint-disable-next-line no-undef
let codeString = defineModel('codeString');
watch(code, () => {
  codeString.value = code.value;
}, {immediate:true});
// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}
let style_ = reactive({
  minHeight: '400px',
  fontSize: '24px'
});
watchEffect(() => {
  if (props.lang && langMode[props.lang]) {
    while (extensions.length > 1) extensions.pop();
    extensions.push(langMode[props.lang])
  }
  else while (extensions.length > 1) extensions.pop();
})
watchEffect(() => {
  if (props.style && Object.prototype.toString.call(props.style) === '[object Object]') {
    if (props.style.minHeight) style_.minHeight = props.style.minHeight;
    if (props.style.maxHeight) style_.maxHeight = props.style.maxHeight;
  }
})
onMounted(() => {

})
let fontFamily = ref(['Fira Code', 'monospace']);
const log = () => {};
</script>

<style scoped>
/deep/ .cm-line {
  font-family: v-bind(fontFamily);
  font-size: 24px;
}
</style>