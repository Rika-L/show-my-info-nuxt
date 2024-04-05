<script setup lang="ts">
import {onMounted} from "vue";

const getBlog = async () => {
  const res: any = await $fetch('/api/blog', {
    method: 'GET',
  })
  allBlog.value = res.body
}

const allBlog = ref()
onMounted(async () => {
  await getBlog()
})

const dialogFormVisible = ref(false)

const addOrEdit = ref('add')

const add = () => {
  blogForm.value.title = '';
  blogForm.value.time = '';
  blogForm.value.introduce = '';
  addOrEdit.value = 'add'
  dialogFormVisible.value = true
}

const editId = ref()

const edit = (scope) => {
  dialogFormVisible.value = true
  addOrEdit.value = 'edit'
  blogForm.value.title = scope.row.title
  blogForm.value.time = scope.row.formatted_time
  blogForm.value.introduce = scope.row.introduce
  editId.value = scope.row.id
}

const blogForm = ref({
  title: '',
  time: '',
  introduce: ''
})

const change = async () => {
  if (addOrEdit.value === 'add') {
    try {
      const res = await $fetch('/api/blog', {
        method: 'POST',
        body: {
          title: blogForm.value.title,
          time: blogForm.value.time,
          introduce: blogForm.value.introduce
        }
      })
      if (res.code === 200) {
        blogForm.value.title = '';
        blogForm.value.time = '';
        blogForm.value.introduce = '';
        dialogFormVisible.value = false
        await getBlog()
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
  }else {
    try {
      const res = await $fetch(`/api/blog?id=${editId.value}`, {
        method: 'PATCH',
        body: {
          title: blogForm.value.title,
          time: blogForm.value.time,
          introduce: blogForm.value.introduce
        }
      })
      if (res.code === 200) {
        blogForm.value.title = '';
        blogForm.value.time = '';
        blogForm.value.introduce = '';
        dialogFormVisible.value = false
        await getBlog()
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
  }
}

const deleteBlog = async (id: number) => {
  await $fetch(`/api/blog?id=${id}`, {
    method: 'DELETE',
  })
  await getBlog()
}


</script>

<template>
  博客管理模块
  <el-button @click="add">添加</el-button>
  <el-table :data="allBlog" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"/>
    <el-table-column prop="title" label="标题" width="180"/>
    <el-table-column prop="formatted_time" label="时间" width="180"/>
    <el-table-column prop="introduce" label="内容" width="180"/>
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
            @click="deleteBlog(scope.row.id)"
        >Delete
        </el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogFormVisible" :title="addOrEdit==='add'?'添加博客':'编辑博客'" width="500">
    {{ blogForm }}
    <el-form :model="blogForm" label-width="auto" style="max-width: 600px">
      <el-form-item label="标题">
        <el-input v-model="blogForm.title"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
            v-model="blogForm.time"
            type="datetime"
            placeholder="Pick a Date"
            format="YYYY/MM/DD hh:mm:ss"
            value-format="YYYY-MM-DD hh:mm:ss"
        />
      </el-form-item>
      <el-form-item label="事件">
        <el-input v-model="blogForm.introduce"/>
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

</template>

<style scoped lang="scss">

</style>
