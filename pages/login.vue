<script setup lang="ts">
let loginForm = ref({
  username:'',
  password:'',
})
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
        <div style="margin-top: 6px">
          <el-form :model="loginForm" label-width="auto" style="max-width: 600px">
            <el-form-item>
              <el-input v-model="loginForm.username" class="input"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.password" class="input"/>
            </el-form-item>
          </el-form>
        </div>
        <div style="text-align: right">
          <el-button color="rgba(255, 255, 255, 0.2)" round>
            <div style="color: white">登录</div>
          </el-button>
          <el-button color="rgba(255, 255, 255, 0.2)" round @click="useRouter().push('/home')">
            <div style="color: white">返回</div>
          </el-button>
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

.input {
  margin-bottom: 20px;
}
</style>
