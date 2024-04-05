<script setup lang="ts">

let blog = ref()

onBeforeMount(async () => {
  const res = await $fetch(`/api/blog?id=${useRoute().query.id}`, {
    method: 'GET',
  })
  blog.value = res.body[0]
})

import hljs from 'highlight.js'

onMounted(() => {
})

</script>

<template>
  <div>
    <div style="text-align: center;font-size: 38px;font-weight: bold;line-height: 2">{{blog?blog.title:''}}</div>
    <div style="text-align: center;font-size: 12px;font-weight: lighter">{{blog?blog.formatted_time:''}}</div>
    <div style="text-indent: 2em" v-html="blog?blog.content:''"></div>
  </div>

</template>

<style scoped lang="scss">
pre{
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
}
</style>
