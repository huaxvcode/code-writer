<template>
  <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ minHeight: '400px', fontSize: '24px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
  />
</template>

<script setup>
import {ref, shallowRef, watch, watchEffect} from 'vue'
import { Codemirror } from 'vue-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { python } from '@codemirror/lang-python'
import { java } from '@codemirror/lang-java'
import { oneDark } from '@codemirror/theme-one-dark'

// eslint-disable-next-line no-undef
let props = defineProps(['lang']);
const code = ref(`console.log('Hello, world!')`)
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
watchEffect(() => {
  if (props.lang === 'c') extensions[1] = cpp();
  else if (props.lang === 'cpp') extensions[1] = cpp();
  else if (props.lang === 'java') extensions[1] = java();
  else if (props.lang === 'python') extensions[1] = python();
})
const log = () => {};
</script>