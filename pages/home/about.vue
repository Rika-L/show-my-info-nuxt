<script setup lang="ts">
</script>

<template>
  <el-scrollbar style="height: calc(95vh - 64px)">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div class="font-black">hahaha</div>
        <my-breadcrumb>关于</my-breadcrumb>
        <div class="main">
          <div class="title" style="margin-top: 0">关于我</div>
          <div style="text-indent: 2em">一个2022届的穷鬼大学生，喜欢Coding和港乐</div>
          <div class="title">技术栈汇总</div>
          <div class="title-2">前端</div>
          <div style="margin-left: 2em">
            <div style="line-height: 1.6">
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/html.svg" alt="" style="height: 15px;">
              HTML + <img src="~/assets/img/css.svg"
                          alt=""
                          style="height: 15px;"> CSS +
              <img
                  src="~/assets/img/JavaScript.svg" alt="" style="height: 15px;"> JavaScript 熟练使用
            </div>
            <div style="line-height: 1.6">
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/vue.svg" alt="" style="height: 15px;"> VUE + <img src="~/assets/img/vite.svg"
                                                                                       alt=""
                                                                                       style="height: 15px;"> VITE +
              <img src="~/assets/img/typescript.svg" alt=""
                   style="height: 15px;"> TypeScript + <img src="~/assets/img/element-plus.svg" alt=""
                                                            style="height: 15px;"> ElementPlus 熟练使用
            </div>
            <div style="line-height: 1.6">
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/nuxt.svg" alt="" style="height: 15px;"> Nuxt 全栈开发 服务端简单CURD
            </div>
          </div>
          <div class="title-2">后端</div>
          <div style="margin-left: 2em">
            <div style="line-height: 1.6">
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/Python.svg" alt="" style="height: 15px;"> Python + <img
                src="~/assets/img/django.svg"
                alt=""
                style="height: 15px;"> Django
              简单CURD
            </div>
            <div style="line-height: 1.6">
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/Node.js.svg" alt="" style="height: 15px;"> Node.js Express CURD
            </div>
            <div style="line-height: 1.6">
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/golang%20(1).svg" alt="" style="height: 15px;"> Golang 学习中
            </div>
          </div>
          <div class="title">开发设备</div>
          <div style="line-height: 1.6;margin-left: 2em">
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            联想(Lenovo)小新Air14Plus : 16GB + 512GB
            <br>
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            小米(xiaomi)平板6Pro : 8GB + 128GB
            <br>
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            键盘 : 珂芝(KZZI)K68
            <br>
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            鼠标 : 罗技(Logitech)G102
          </div>
          <div class="title">联系我</div>
          <div>
            <img src="~/assets/img/GITEE.svg" alt="" style="height: 40px;margin-right: 20px">
            <img src="~/assets/img/github.svg" alt="" style="height: 40px">
          </div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.main {
  animation: .5s animate forwards;
}

.title {
  font-size: 32px;
  line-height: 2;
  font-weight: bold;
  transition: all .1s linear;
  margin-top: 40px;
}

.title:hover {
  color: #42D392;
}

.title-2 {
  font-size: 24px;
  font-weight: bold;
  line-height: 2;
}
</style>
