<script lang="ts" setup>
import {useRouter} from "vue-router";

const $router = useRouter()
</script>


<template>
  <div style="position: fixed;width: 100%">
    <el-container>
      <el-header class="header">
        <div><span @click="$router.push('/login')">Rika</span></div>
        <div></div>
        <div><span @click="$router.push('/home')">首页</span><span @click="$router.push('/home/timeLine')">时间轴</span><span
            @click="$router.push('/home/about')">关于</span><span><img src="~/assets/img/download.svg"
                                                                 style="height: 24px"></span></div>
      </el-header>
      <el-main class="main">
        <nuxt-page/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    span {
      display: inline-block;
      font-size: 24px;
      color: white;
      padding: 10px;
      border-radius: 24px;
      font-weight: lighter;
      margin-left: 5px;
    }

    span:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}


</style>
