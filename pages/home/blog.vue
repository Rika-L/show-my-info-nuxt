<script setup lang="ts">

</script>

<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <my-breadcrumb>博客</my-breadcrumb>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <el-scrollbar style="height: calc(95vh - 64px)">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <nuxt-page/>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </el-scrollbar>
</template>
