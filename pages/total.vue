<script setup lang="ts">
import * as echarts from 'echarts';
//获取dom元素
let screen = ref();
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  window.addEventListener('resize', resizeHandler)
  console.log(echarts);
})

//定义缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w;
  const wh = window.innerHeight / h;
  return ww < wh ? ww : wh;
}

const resizeHandler = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<template>
  <div class="container">
    <!--  展示内容区域-->
    <div class="screen" ref="screen">
      <div class="top">顶部</div>
      <div class="bottom">
        <el-row>
          <el-col :span="8" style="height: 1016px;">1</el-col>
          <el-col :span="8">2</el-col>
          <el-col :span="8">3</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(60deg, #2E1953 0, #583F7D 25%, #8467AA 50%, #B293D9 75%, #E1C1FF 100%) no-repeat;
  background-size: cover;

  .screen {
    width: 1920px;
    height: 1080px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform-origin: left top;
  }
}

.top{
  height: 64px;
  background: rgba(255,255,255,0.2);
}
</style>
