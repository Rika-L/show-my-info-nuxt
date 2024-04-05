<script lang="ts" setup>
import {useRouter} from "vue-router";

const $router = useRouter()
</script>


<template>
  <div style="position: fixed;width: 100%">
    <el-container>
      <el-header class="header">
        <div>
          <nuxt-link to="/login">Rika</nuxt-link>
        </div>
        <div></div>
        <div>
          <nuxt-link to="/home">首页</nuxt-link>
          <nuxt-link to="/home/blog">博客</nuxt-link>
          <nuxt-link to="/home/timeLine">时间轴</nuxt-link>
          <nuxt-link
              to="/home/about">关于
          </nuxt-link>
          <span><img src="~/assets/img/download.svg"
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
    a {
      display: inline-block;
      font-size: 24px;
      color: white;
      padding: 10px;
      border-radius: 24px;
      font-weight: lighter;
      margin-left: 5px;
      text-decoration: none;
    }

    a:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}


</style>
