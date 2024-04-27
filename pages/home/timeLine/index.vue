<script setup lang="ts">
import {onMounted} from "vue";

const timeLine = ref()
onMounted(async () => {
  const res: any = await $fetch('/api/timeLine', {
    method: 'GET',
  })
  timeLine.value = res.body
})

</script>

<template>
  <div class="main">
    <el-row>
      <el-col :xs="0" :sm="12">
        <div class="title">TimeLine</div>
        <el-timeline style="max-width: 100%">
          <el-timeline-item v-for="(item,index) in timeLine" :key="index" :timestamp="item.time" placement="top"
                            size="large">
            <el-card
                style="--el-card-bg-color:rgba(255,255,255,0.2);border: 0;border-radius: 15px;display: inline-block;">
              <div style="color: #fff;">{{ item.event }}</div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div style="margin-top: 150px">
          <h1 class="main-title">时间轴</h1>
          <div class="introduce">于此记录一些重要/关键的<span style="color: #42D392;">时间节点</span>。</div>
          <el-button size="large" color="rgba(255,255,255,0.2)"
                     style="--el-button-text-color:#fff;--el-button-hover-text-color:#fff" round
                     @click="useRouter().push('/home/timeLine/allTimeLine')">查看完整时间轴
          </el-button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="0">
        <div class="title">TimeLine</div>
        <el-timeline style="max-width: 100%">
          <el-timeline-item v-for="(item,index) in timeLine" :key="index" :timestamp="item.time" placement="top"
                            size="large">
            <el-card
                style="--el-card-bg-color:rgba(255,255,255,0.2);border: 0;border-radius: 15px;display: inline-block;">
              <div style="color: #fff;">{{ item.event }}</div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
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

.main {
  animation: .5s animate forwards;
}

.main-title {
  font-size: 96px;
  opacity: .7;
  font-weight: bold;
}

.introduce {
  line-height: 2;
  font-size: 48px;
  text-indent: 2em;
}
</style>
