<script setup lang="ts">
import {onMounted} from "vue";

const timeLine = ref()
onMounted(async () => {
  const res: any = await $fetch('/api/allTimeLine', {
    method: 'GET',
  })
  timeLine.value = res.body
})

</script>

<template>
  <div style="display: flex;justify-content: center;
  animation: .5s animate forwards;
">
    <div>
      <div style="  display: flex;
  align-items: center;margin-top: 20px;margin-bottom: 20px">
        <div style="font-size: 48px;font-weight: bold;">完整时间轴</div>
        <el-button size="large" color="rgba(255,255,255,0.2)"
                   style="--el-button-text-color:#fff;--el-button-hover-text-color:#fff;margin-left: 20px" round
                   @click="useRouter().push('/home/timeLine')">返回
        </el-button>
      </div>
      <el-timeline style="max-width: 100%">
        <el-timeline-item v-for="(item,index) in timeLine" :key="index" :timestamp="item.time" placement="top"
                          size="large">
          <el-card
              style="--el-card-bg-color:rgba(255,255,255,0.2);border: 0;border-radius: 15px;display: inline-block;">
            <div style="color: #fff;">{{ item.event }}</div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-timeline-item__timestamp) {
  font-size: 24px;
  color: #fff;
}
</style>
