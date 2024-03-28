<script setup>
// eslint-disable-next-line no-undef
let fileName = defineModel();
fileName.value = 'Untitled.???'
</script>

<template>
  <div class="menu">
      <div class="menu-run">
        <div class="menu-name">{{ fileName }}</div>
          <div class="menu-icon">
            <svg t="1711616921685" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="4436">
              <path
                  d="M170.666667 128l2.133333 768c0 34.133333 36.266667 53.333333 64 34.133333l597.333333-384c25.6-17.066667 25.6-53.333333 0-70.4L234.666667 91.733333C206.933333 74.666667 170.666667 93.866667 170.666667 128z"
                  fill="#1afa29" p-id="4437"></path>
            </svg>
          </div>
      </div>
  </div>
</template>

<style scoped lang="less">
@height: 50px;
.menu {
  width: 100%;
  height: @height;
  display: flex;
  color: #FFFFFF;
  font-weight: bold;
}
.menu-run {
  display: flex;
  margin: auto;
  height: @height;
  padding: 0 10px 0 20px;
  border-radius: 5px;
  background-color: #0D1117;
  justify-content: center;
  align-items: center;
  -moz-user-select:none; /* Firefox私有属性 */
  -webkit-user-select:none; /* WebKit内核私有属性 */
  -ms-user-select:none; /* IE私有属性(IE10及以后) */
  -khtml-user-select:none; /* KHTML内核私有属性 */
  -o-user-select:none; /* Opera私有属性 */
  user-select:none; /* CSS3属性 */
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.menu-name {
  display: inline-block;
  max-width: 500px;
  height: @height;
  overflow: hidden;
  line-height: @height;
}

.menu-icon {
  width: (@height / 2);
  height: (@height / 2);
  padding-left: 5px;
}
</style>