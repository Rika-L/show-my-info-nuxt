<script setup lang="ts">
</script>

<template>
  <el-breadcrumb :separator-icon="ElIconArrowRight">
    <el-breadcrumb-item :to="{ path: '/home' }"><div class="font">首页</div></el-breadcrumb-item>
    <el-breadcrumb-item><div class="font"><slot>haha</slot></div></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">
.font{
  font-size: 20px;
  color: white;
  transition: all .1s linear;
}

.font:hover{
  color: #42D392;
}

</style>
