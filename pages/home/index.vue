<script setup lang="ts">

const $router = useRouter()


</script>

<template>
  <el-row>
    <el-col :xs="0" :sm="24" style="height: 15vh"></el-col>
    <el-col :xs="24" :sm="24">
      <el-scrollbar style="height: calc(85vh - 64px)">
        <el-row>
          <el-col :xs="0" :sm="1"></el-col>
          <el-col :xs="24" :sm="22">
            <div class="introduce"><span>一名前端开发工程师</span></div>
            <div><span class="name">Rika</span></div>
            <div class="introduce"><span>喜欢</span><span style="color: #42D392">Vue</span><span>、</span><span
                style="color: #00B89B">TypeScript</span><span>和</span><span
                style="color: #CFFBE2">CSS</span><span>。</span>
            </div>
            <div class="introduce1" style="font-weight: bold">目标：最佳实践</div>
            <div class="introduce1">"你永远胜过别人"</div>
            <div style="margin-top: 10px">
              <el-button size="large" color="#8467AA" round @click="$router.push('/home/timeLine')">时间轴</el-button>
              <el-button size="large" color="#8467AA" round plain @click="$router.push('/home/about')">关于我
              </el-button>
            </div>
          </el-col>
          <el-col :xs="0" :sm="1"></el-col>
        </el-row>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>
c
<style scoped lang="scss">
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
