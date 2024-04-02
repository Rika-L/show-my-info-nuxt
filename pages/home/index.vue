<script setup lang="ts">

const $router = useRouter()


</script>

<template>
  <div class="main">
    <div class="introduce"><span>一名前端开发工程师</span></div>
    <div><span class="name">Rika</span></div>
    <div class="introduce"><span>喜欢</span><span style="color: #42D392">Vue</span><span>、</span><span
        style="color: #00B89B">TypeScrpt</span><span>和</span><span style="color: #CFFBE2">CSS</span><span>。</span>
    </div>
    <div class="introduce1">在这个网站记录我的成长，努力成为一名优秀的程序员</div>
    <div style="margin-top: 10px">
      <el-button size="large" color="#8467AA" round @click="$router.push('/home/timeLine')">时间轴</el-button>
      <el-button size="large" color="#8467AA" round plain @click="$router.push('/home/about')">关于我</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: fixed;
  left: 10vw;
  top: 25vh;
  animation: .5s animate forwards;
}

.name {
  font-size: 96px;
  font-weight: bold;
  //background: linear-gradient(90deg, #42D392 0, #00B89B 100%);
  //color: transparent;
  //background-clip: text;
  color: white;
  opacity: .7;
  line-height: 1.2;
}

.introduce {
  font-size: 48px;
  color: white;
  line-height: 1.6;
}

.introduce1 {
  font-size: 24px;
  opacity: .8;
  color: white;
  line-height: 1.6
}


</style>
