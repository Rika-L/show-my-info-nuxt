<script setup lang="ts">
import {onMounted} from "vue";

const timeLine = ref()

const getTimeLine = async () => {
  const res: any = await $fetch('/api/timeLine', {
    method: 'GET',
  })
  timeLine.value = res.body
}

onMounted(async () => {
  await getTimeLine()
})

const deleteTimeLine = async (id: number) => {
  const res = await $fetch(`/api/timeLine?id=${id}`, {
    method: 'DELETE',
  })
  console.log(res);
  await getTimeLine()
}
</script>

<template>
  时间线管理模块
  <el-button>添加</el-button>
  <el-table :data="timeLine" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"/>
    <el-table-column prop="time" label="时间" width="180"/>
    <el-table-column prop="event" label="事件" width="180"/>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small"
        >Edit
        </el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="deleteTimeLine(scope.row.id)"
        >Delete
        </el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">

</style>
