<script setup lang="ts">

//定义登陆的路由中间件
import type {userLoginRes} from "~/types/user";

definePageMeta({
  middleware: ["login"]
  // 或 middleware: 'auth'
})

let username = useCookie("username", {maxAge: 86400})
let password = useCookie("password", {maxAge: 86400})

let loginForm = ref({
  username: username.value,
  password: password.value,
})


let checked = useCookie("loginChecked", {maxAge: 86400})

let check = ref(!!checked.value)

let token = useCookie('token', {maxAge: 86400})

const login = async () => {
  const result: userLoginRes = await $fetch('/api/login', {
    method: 'POST',
    body: {
      username: loginForm.value.username,
      password: loginForm.value.password
    },
    headers: {
      token: token.value as any
    }
  })
  if (result.code === 200) {
    if (check.value) {
      username.value = loginForm.value.username
      password.value = loginForm.value.password
      checked.value = 'check'
    } else {
      username.value = null
      password.value = null
      checked.value = null
    }
    token.value = result.data.token
    await useRouter().push('/management')
    ElNotification({
      type: 'success',
      message: '登陆成功'
    })
  } else {
    ElNotification({
      type: 'error',
      message: result.error
    })
  }
}
</script>

<template>
  <div
      style="height: 100vh;background: linear-gradient(120deg, #0AF7E5 0,#00D8F6 20%,#00B5F4 40%,#5E90D9 60%,#836AAC 80%,#894876 100%)">
  </div>
  <el-card class="login-card">
    <div class="main">RIKA后台管理</div>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <div style="margin-top: 20px">
          <el-form :model="loginForm" label-width="auto" style="max-width: 600px">
            <el-form-item>
              <el-input v-model="loginForm.username" class="input" placeholder="UserName"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.password" class="input" type="password" show-password
                        placeholder="Password" style="margin-bottom: 10px"/>
            </el-form-item>
          </el-form>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <el-checkbox v-model="check" size="large"/>
            <div style="color: #fff; display: inline-block;margin-left: 4px">记住我</div>
          </div>
          <div>
            <el-button color="rgba(255, 255, 255, 0.2)" round size="large">
              <div style="color: white" @click="login">登录</div>
            </el-button>
            <el-button color="rgba(255, 255, 255, 0.2)" round @click="useRouter().push('/home')" size="large">
              <div style="color: white">返回</div>
            </el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </el-card>
</template>

<style scoped lang="scss">
.login-card {
  --el-card-bg-color: rgba(255, 255, 255, 0.2);
  border: 0;
  border-radius: 15px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 50vw;
}

.main {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  line-height: 2;
}

:deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.2);
  border: 0;
  height: 50px;
  border-radius: 15px;
  box-shadow: none;
}

:deep(.el-input__inner) {
  color: white;
  font-size: 24px;
}

.input {
  margin-bottom: 20px;
}

input {
  color: white;
}

:deep(.el-input__password) {
  color: rgba(255, 255, 255, 0.5);
}

:deep(.el-input__password:hover) {
  color: white;
}

:deep(.el-input__inner::placeholder) {
  opacity: 0;
  color: rgba(255, 255, 255, 0.7);
  transition: all .5s linear;
}

:deep(.el-input__wrapper:hover) {
  .el-input__inner::placeholder {
    opacity: 1;
  }
}

:deep(.el-checkbox__inner) {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border: none;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #00D8F6FF
}
</style>
