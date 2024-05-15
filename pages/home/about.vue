<script setup lang="ts">
</script>

<template>
  <el-scrollbar style="height: calc(95vh - 64px)">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <my-breadcrumb>关于</my-breadcrumb>
        <div class="main">
          <div class="title" style="margin-top: 0">关于本站</div>
          <div class="text-xl indent-[2em]">
            <span>技术选型：</span>
            <img src="~/assets/img/nuxt.svg" alt="" style="height: 1.25rem;">
            <span class="text-[#00da81]"> Nuxt.js&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src="~/assets/img/tailwindcss.svg" alt="" style="height: 1.25rem;">
            <span class="text-[#38bcf6]"> Tailwind CSS&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img src="~/assets/img/typescript.svg" alt="" style="height: 1.25rem;">
            <span class="text-[#04a2fa]"> TypeScript </span>
          </div>
          <div class="title">关于我</div>
          <div class="text-xl indent-[2em]">一个2022届的穷鬼大学生，喜欢Coding和港乐</div>
          <div class="title">技术栈</div>
          <div class="title-2">前端</div>
          <div style="margin-left: 2em" class="text-xl">
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/html.svg" alt="" style="height: 15px;">
              <span> HTML + </span>
              <img src="~/assets/img/css.svg" alt="" style="height: 15px;">
              <span> CSS + </span>
              <img src="~/assets/img/JavaScript.svg" alt="" style="height: 15px;">
              <span> JavaScript 熟练使用</span>
            </div>
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/tailwindcss.svg" alt="" style="height: 15px;">
              <span> Tailwind CSS + </span>
              <img src="~/assets/img/Sass.svg" alt="" style="height: 15px;">
              <span> SASS </span>
            </div>
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/axios.svg" alt="" style="height: 15px;">
              <span> axios </span>
            </div>
            <div>
              <el-icon>
                <ElIconCaretBottom/>
              </el-icon>
              <img src="~/assets/img/eslint.svg" alt="" style="height: 15px;">
              <span> 代码规范 </span>
              <div class="ml-[2em]">
                <div>
                  <el-icon>
                    <ElIconCaretRight/>
                  </el-icon>
                  <img src="~/assets/img/eslint.svg" alt="" style="height: 15px;">
                  <span> Eslint </span>
                </div>
                <div>
                  <el-icon>
                    <ElIconCaretRight/>
                  </el-icon>
                  <img src="~/assets/img/prettier.png" alt="" style="height: 15px;">
                  <span> Prettier </span>
                </div>
              </div>
            </div>
            <div>
              <el-icon>
                <ElIconCaretBottom/>
              </el-icon>
              <img src="~/assets/img/vue.svg" alt="" style="height: 15px;">
              <span> Vue系 [主] </span>
              <div class="ml-[2em]">
                <div>
                  <el-icon>
                    <ElIconCaretRight/>
                  </el-icon>
                  <img src="~/assets/img/vue.svg" alt="" style="height: 15px;">
                  <span> Vue + </span>
                  <img src="~/assets/img/vite.svg" alt="" style="height: 15px;">
                  <span> VITE + </span>
                  <img src="~/assets/img/Pinia.svg" alt="" style="height: 15px;">
                  <span> Pinia + </span>
                  <img src="~/assets/img/typescript.svg" alt="" style="height: 15px;">
                  <span> TypeScript + </span>
                  <img src="~/assets/img/element-plus.svg" alt="" style="height: 15px;">
                  <span> ElementPlus 熟练使用</span>
                </div>
                <div>
                  <el-icon>
                    <ElIconCaretRight/>
                  </el-icon>
                  <img src="~/assets/img/nuxt.svg" alt="" style="height: 15px;">
                  <span> Nuxt 全栈开发</span>
                </div>
              </div>
            </div>
            <div>
              <el-icon>
                <ElIconCaretBottom/>
              </el-icon>
              <img src="~/assets/img/react.svg" alt="" style="height: 15px;">
              <span> React系 </span>
              <div class="ml-[2em]">
                <div>
                  <el-icon>
                    <ElIconCaretRight/>
                  </el-icon>
                  <img src="~/assets/img/react.svg" alt="" style="height: 15px;">
                  <span> React + </span>
                  <img src="~/assets/img/JavaScript.svg" alt="" style="height: 15px;">
                  <span> JavaScript + </span>
                  <img src="~/assets/img/redux-store.svg" alt="" style="height: 15px;">
                  <span> Redux + </span>
                  <img src="~/assets/img/antd.svg" alt="" style="height: 15px;">
                  <span> Ant Design </span>
                </div>
                <div>
                  <el-icon>
                    <ElIconCaretRight/>
                  </el-icon>
                  <img src="~/assets/img/Ant%20Design%20Mobile.svg" alt="" style="height: 15px;">
                  <span> Ant Design Mobile </span>
                </div>
              </div>
            </div>
          </div>
          <div class="title-2">后端</div>
          <div style="margin-left: 2em" class="text-xl">
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/Python.svg" alt="" style="height: 15px;">
              <span> Python + </span>
              <img src="~/assets/img/django.svg"
                   alt=""
                   style="height: 15px;">
              <span> Django 简单CURD</span>
            </div>
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/Node.js.svg" alt="" style="height: 15px;">
              <span> Node.js Express CURD</span>
            </div>
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/golang%20(1).svg" alt="" style="height: 15px;">
              <span class="line-through"> Golang </span>
              <span>有兴趣，可能会学</span>
            </div>
          </div>
          <div class="title-2">其他</div>
          <div style="margin-left: 2em" class="text-xl">
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/mysql.svg" alt="" style="height: 15px;">
              <span> MySQL</span>
            </div>
          </div>
          <div style="margin-left: 2em" class="text-xl">
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/MongoDB.svg" alt="" style="height: 15px;">
              <span> MongoDB </span>
            </div>
          </div>
          <div style="margin-left: 2em" class="text-xl">
            <div>
              <el-icon>
                <ElIconCaretRight/>
              </el-icon>
              <img src="~/assets/img/git.svg" alt="" style="height: 15px;">
              <span> Git </span>
            </div>
          </div>
          <div class="title">开发设备</div>
          <div style="margin-left: 2em" class="text-xl">
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            <span> Lenovo XiaoXinAir 14+ : 16GB + 512GB</span>
            <br>
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            <span> Xiaomi Pad 6Pro : 8GB + 128GB</span>
            <br>
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            <span> Keyboard: Kzzi K68</span>
            <br>
            <el-icon>
              <ElIconCaretRight/>
            </el-icon>
            <span> Mouse : Logitech G102</span>
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
  margin-top: 32px;
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
