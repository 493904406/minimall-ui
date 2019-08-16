<template>
  <div>
    <el-form>
      <el-form-item >
          <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" icon="el-input" style="width:300px">用户名</el-input>
      </el-form-item>
       <el-form-item >
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" icon="el-input" style="width:300px">密码</el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-on:click="login" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>
