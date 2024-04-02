<script setup lang="ts">
const timeLine = ref()
</script>

<template>
  <el-scrollbar style="height: calc(95vh - 64px)">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <my-breadcrumb>时间轴</my-breadcrumb>
        <div class="main">
          <div class="title">TimeLine</div>
          <el-timeline style="max-width: 600px">
            <el-timeline-item v-for="(item,index) in timeLine" :key="index" :timestamp="item.time" placement="top" size="large">
              <el-card style="--el-card-bg-color:rgba(255,255,255,0.2);border: 0;border-radius: 15px;display: inline-block;">
                <div style="color: #fff;">{{item.event}}</div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </el-scrollbar>
</template>

<style scoped lang="scss">
:deep(.el-timeline-item__timestamp) {
  font-size: 24px;
  color: #fff;
}

.title {
  font-size: 32px;
  line-height: 2;
  font-weight: bold;
}

.main{
  animation: .5s animate forwards;
}
</style>
