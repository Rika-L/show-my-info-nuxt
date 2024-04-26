<script lang="ts" setup>
const darkStore = useDarkStore()
const changeDark = () => {
  //获取HTML根节点
  darkStore.dark = !darkStore.dark
  let html = document.documentElement
  darkStore.dark ? (html.className = 'dark') : (html.className = '')
}
</script>


<template>
  <div style="position: fixed;width: 100%">
    <el-container>
      <el-header class="header">
        <el-row style="align-items: center;height: 100%">
          <el-col :xs="2" :sm="2"
          >
            <div style="background: #0AF7E5"
            ></div>
          </el-col>
          <el-col :xs="12" :sm="12"
          >
            <nuxt-link to="/login">Rika</nuxt-link>
          </el-col>
          <el-col :xs="0" :sm="8">
            <div style="display: flex;justify-content: right; /* 水平居中 */
  align-items: center; /* 垂直居中 */">
              <nuxt-link to="/home">首页</nuxt-link>
              <nuxt-link to="/home/blog">博客</nuxt-link>
              <nuxt-link to="/home/timeLine">时间轴</nuxt-link>
              <nuxt-link
                  to="/home/about">关于
              </nuxt-link>
              <el-icon @click="changeDark" size="24" class="inline-block ml-[10px]" style="position: relative">
                <transition name="el-fade-in-linear">
                  <ElIconSunny v-show="!darkStore.dark" style="position: absolute"/>
                </transition>
                <transition name="el-fade-in-linear">
                  <ElIconMoon v-show="darkStore.dark" style="position: absolute"/>
                </transition>
              </el-icon>
            </div>
          </el-col>
          <el-col :xs="8" :sm="0"
          >
            <div style="display: flex;justify-content: right; /* 水平居中 */
  align-items: center; /* 垂直居中 */">
            <el-dropdown trigger="click" size="large">
    <span>
      <el-icon size="32px">
        <ElIconArrowDownBold/>
      </el-icon>
    </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="useRouter().push('/home')">首页</el-dropdown-item>
                  <el-dropdown-item @click="useRouter().push('/home/blog')">博客</el-dropdown-item>
                  <el-dropdown-item @click="useRouter().push('/home/timeLine')">时间轴</el-dropdown-item>
                  <el-dropdown-item @click="useRouter().push('/home/about')">关于</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
              <el-icon @click="changeDark" size="24" class="inline-block ml-[10px]" style="position: relative">
                <transition name="el-fade-in-linear">
                  <ElIconSunny v-show="!darkStore.dark" style="position: absolute"/>
                </transition>
                <transition name="el-fade-in-linear">
                  <ElIconMoon v-show="darkStore.dark" style="position: absolute"/>
                </transition>
              </el-icon>
            </div>
          </el-col>
          <el-col :xs="2" :sm="2"
          >
            <div style="color: #0AF7E5"
            />
          </el-col>
        </el-row>
      </el-header>
      <el-main class="main">
        <nuxt-page/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 64px;
  width: 100%;

  div {
    white-space: nowrap;

    a {
      display: inline-block;
      font-size: 24px;
      color: white;
      padding: 10px;
      border-radius: 24px;
      font-weight: lighter;
      margin-left: 5px;
      text-decoration: none;
    }

    a:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}

:deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
  color: #8467AA;
  background-color: rgba(131, 106, 172, 0.2);
  font-size: 20px;
}

:deep(.el-dropdown-menu__item:not(.is-disabled)) {
  font-size: 20px;
}
</style>
