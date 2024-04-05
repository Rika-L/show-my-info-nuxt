<script setup lang="ts">
import {onMounted} from "vue";

const allBlog = ref()
onMounted(async () => {
  const res: any = await $fetch('/api/allBlog', {
    method: 'GET',
  })
  allBlog.value = res.body
})

</script>

<template>
  <div class="main">
    <el-row>
      <el-col :span="12">
        <div class="title">Blog</div>
        <el-row>
          <el-col :span="20">
            <el-scrollbar style="height: calc(100vh - 64px - 64px - 40px - 24px)">
              <div>
                <el-card
                    class="card"
                    v-for="item in allBlog"
                    :key="item.id"
                    @click="useRouter().push(`/home/blog/show?id=${item.id}`)"
                    style="--el-card-bg-color:rgba(255,255,255,0.2);">
                  <div style="font-weight: bold;font-size: 24px;line-height: 1.5">{{ item.title }}</div>
                  <div style="text-indent: 2em;opacity: .8;line-height: 2">{{ item.introduce }}</div>
                  <div style="opacity: .6;font-weight: lighter;font-size: 12px">{{ item.formatted_time }}</div>
                </el-card>
              </div>
            </el-scrollbar>
          </el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div style="margin-top: 150px">
          <h1 class="main-title">博客</h1>
          <div class="introduce">通常是一些<span style="color: #42D392;">学习过程</span>的记录</div>
        </div>
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

.card {
  position: relative;
  border-radius: 20px;
  margin-bottom: 12px;
  margin-top: 12px;
  border: none;
  box-shadow: none;
}

.card:hover {
  transform: translate(0%, -5%);
}
</style>
