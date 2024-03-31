<script setup>
import SingleCodeComponent from "@/components/CodeComponent/SingleCodeComponent.vue";
import {ref, watchEffect} from "vue";

let randomInt = (n) => {
  // 获取随机整数
  let ans = Math.trunc(n * Math.random());
  while (ans === n) ans = Math.trunc(n * Math.random());
  return ans;
}

let randomString = (n) => {
  // 获取随机字符串, a-z, A-Z
  let s = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz";
  let ans = '';
  while (n --) {
    ans += s.charAt(randomInt(s.length));
  }
  return ans;
}

let singleCodeArraysDom = ref([]);
let singleCodeArrays = ref([randomString(20)]);
let singleCodeRemove = ref();
let singleCodeNewOne = ref();

watchEffect(() => {
  if (!singleCodeRemove.value) return;
  if (singleCodeArrays.value.length === 1) {
    singleCodeRemove.value = null;
    return;
  }
  for (let i = 0; i < singleCodeArrays.value.length; i ++) {
    if (singleCodeArrays.value[i] === singleCodeRemove.value) {
      singleCodeArrays.value.splice(i, 1); // 删除
      singleCodeRemove.value = null;
      return;
    }
  }
})

let insert = (a) => {
  for (let i = 0; i < singleCodeArrays.value.length; i ++) {
    if (singleCodeArrays.value[i] === a) {
      let ans = randomString(20);
      let isExist = (a, s) => {
        for (let i = 0; i < a.length; i ++) {
          if (a[i] === s) return true;
        }
        return false;
      }
      while (isExist(singleCodeArrays.value, ans)) {
        ans = randomString(20);
      }
      singleCodeArrays.value.splice(i + 1, 0, ans);
      return;
    }
  }
}

watchEffect(() => {
  if (!singleCodeNewOne.value) return;
  insert(singleCodeNewOne.value);
  singleCodeNewOne.value = null;
})

</script>

<template>
  <div class="code-component">
    <div
        class="code-component-single-code"
        ref="singleCodeArraysDom"
        v-for="e in singleCodeArrays"
        v-bind:key="e"
        :class="e"
    >
      <single-code-component
          :hash-id="e"
          v-model:single-code-remove="singleCodeRemove"
          v-model:new-one="singleCodeNewOne"
      />
      <div class="code-component-split"></div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.code-component {
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: auto;

  &::before {
    content: '';
    display: table;
  }

  &::after {
    content: '';
    display: table;
  }

  .code-component-split {
    @margin-split: 50px;
    margin-top: @margin-split;
  }

}
</style>