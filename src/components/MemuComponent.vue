<script setup>
// eslint-disable-next-line no-undef
let fileName = defineModel('fileName');
fileName.value = 'Main.py'
</script>

<template>
  <div class="menu-component">
    <div class="menu-file-name">
      <el-button
          color="#191919"
          class="menu-file-button"
      >
        <template #default>{{ fileName }}</template>
      </el-button>
    </div>
    <div class="menu-icon">
      <el-button
        color="unset"
        class="menu-icon-button menu-icon-run-button"
      >
        <svg t="1711796551861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7939" width="24px"><path d="M264.3 141.6l275.4 179.3 284 184.8c1 0.6 3.6 2.4 3.6 6.7 0 4.3-2.6 6.1-3.6 6.7L539.8 704 264.3 883.3c-0.2-1-0.3-2.1-0.3-3.5V145.1c0-1.3 0.2-2.5 0.3-3.5M262 66.2c-36.5 0-70 32.9-70 78.9v734.6c0 46 33.5 78.9 70 78.9 11.6 0 23.6-3.3 34.8-10.7L579 764.2l284-184.8c48.5-31.6 48.5-102.5 0-134.1L579 260.5 296.9 76.9c-11.3-7.3-23.2-10.7-34.9-10.7z" fill="#5FAD65" p-id="7940"></path></svg>
      </el-button>
    </div>
    <div class="menu-icon">
      <el-button
        color="unset"
        class="menu-icon-button menu-icon-run-button"
      >
        <svg t="1711808350487" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4246" width="24px" height="24px"><path d="M512.558545 1024c-282.321455 0-512-229.678545-512-512 0-282.298182 229.678545-512 512-512s512 229.701818 512 512C1024.558545 794.321455 794.88 1024 512.558545 1024zM512.558545 44.520727C254.789818 44.520727 45.079273 254.231273 45.079273 512s209.710545 467.502545 467.479273 467.502545S980.037818 769.768727 980.037818 512 770.350545 44.520727 512.558545 44.520727z" fill="#d81e06" p-id="4247"></path><path d="M867.863273 856.250182c-5.957818 0-11.915636-2.280727-16.453818-6.818909L173.591273 171.613091c-9.099636-9.099636-9.099636-23.808 0-32.907636s23.808-9.099636 32.907636 0l677.818182 677.818182c9.099636 9.099636 9.099636 23.808 0 32.907636C879.778909 853.969455 873.821091 856.250182 867.863273 856.250182z" fill="#991908" p-id="4248"></path></svg>
      </el-button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menu-component {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-icon, .menu-file-name {
  display: inline-block;
}
.menu-icon-button {
  height: 40px;
  width: 40px;
  border: 0;
}
.menu-file-button {
  font-family: monospace;
  font-size: 24px;
  height: 40px;
}
</style>