<script setup lang="ts">
import {onMounted} from "vue";

const timeLine = ref()

const getTimeLine = async () => {
  const res: any = await $fetch('/api/allTimeLine', {
    method: 'GET',
  })
  timeLine.value = res.body
}

onMounted(async () => {
  await getTimeLine()
})

const deleteTimeLine = async (id: number) => {
  await $fetch(`/api/timeLine?id=${id}`, {
    method: 'DELETE',
  })
  await getTimeLine()
}

const addOrEdit = ref('add')

const add = () => {
  timeLimeForm.value.time = ''
  timeLimeForm.value.event = ''
  dialogFormVisible.value = true
  addOrEdit.value = 'add'
}

const edit = (scope) => {
  dialogFormVisible.value = true
  addOrEdit.value = 'edit'
  timeLimeForm.value.time = scope.row.time
  timeLimeForm.value.event = scope.row.event
  editId.value = scope.row.id
}

const dialogFormVisible = ref(false)

const timeLimeForm = ref({
  time: '',
  event: ''
})

const editId = ref()

const change = async () => {
  if (addOrEdit.value === 'add') {
    try {
      const res = await $fetch('/api/timeLine', {
        method: 'POST',
        body: {
          time: timeLimeForm.value.time,
          event: timeLimeForm.value.event
        }
      })
      if (res.code === 200) {
        timeLimeForm.value.time = ''
        timeLimeForm.value.event = ''
        dialogFormVisible.value = false
        await getTimeLine()
        ElNotification({
          type: 'success',
          message: '操作成功'
        })
      } else {
        ElNotification({
          type: 'error',
          message: '操作失败'
        })
      }
    } catch (error) {
      ElNotification({
        type: 'error',
        message: '操作失败'
      })
    }
  }else{
    try {
      const res = await $fetch(`/api/timeLine?id=${editId.value}`,{
        method:'PATCH',
        body: {
          time: timeLimeForm.value.time,
          event: timeLimeForm.value.event
        }
      })
      if (res.code === 200){
        timeLimeForm.value.time = ''
        timeLimeForm.value.event = ''
        dialogFormVisible.value = false
        await getTimeLine()
        ElNotification({
          type: 'success',
          message: '操作成功'
        })
      }else{
        ElNotification({
          type: 'error',
          message: '操作失败'
        })
      }
    }catch (error) {
      ElNotification({
        type: 'error',
        message: '操作失败'
      })
    }
  }
}
</script>

<template>
  <client-only>
    时间线管理模块
    <el-button @click="add">添加</el-button>
    <el-table :data="timeLine" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"/>
      <el-table-column prop="time" label="时间" width="180"/>
      <el-table-column prop="event" label="事件" width="180"/>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small"
                     @click="edit(scope)"
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


    <el-dialog v-model="dialogFormVisible" :title="addOrEdit==='add'?'添加时间节点':'编辑时间节点'" width="500">
      {{ timeLimeForm }}
      <el-form :model="timeLimeForm" label-width="auto" style="max-width: 600px">
        <el-form-item label="时间">
          <el-date-picker
              v-model="timeLimeForm.time"
              type="date"
              placeholder="Pick a Date"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
          />
        </el-form-item>
        <el-form-item label="事件">
          <el-input v-model="timeLimeForm.event"/>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="change">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </client-only>
</template>

<style scoped lang="scss">

</style>
