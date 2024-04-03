<script setup lang="ts">

const token = useCookie("token")
const test = () => {
  token.value = null
  console.log(token.value);
  useRouter().push('/home')
}

const test1 = () => {
  useRouter().push('/home')
}

const test2 = () => {
  useRouter().push('/management/timeLine')
}

const test3 = () => {
  useRouter().push('/management')
}
</script>

<template>
  <div>
    后台管理
    <el-button @click="test">退出登录</el-button>
    <el-button @click="test1">回到首页</el-button>
    <el-button @click="test3">管理页首页</el-button>
    <el-button @click="test2">时间线管理</el-button>
  </div>
  <div>
    <nuxt-page/>
  </div>

</template>

<style scoped lang="scss">
</style>
