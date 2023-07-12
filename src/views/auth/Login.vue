<template>
    <div class="login">
        <div class="loginPart">
            <h2>用户登录</h2>
            <el-form 
            ref="ruleForm"
            status-icon
            label-width="100px"
            class="demo-ruleForm"
            style="transform:translate(-30px);"
            >
                <el-form-item label="账号：" prop="userName">
                    <el-input type="input" v-model="loginData.userName" placeholder="请输入账号" maxlength="20" autocomplete="off" clearable />
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="loginData.password" type="password" placeholder="请输入密码" maxlength="20" autocomplete="off" show-password clearable />
                </el-form-item>
                <el-button class="btn" type="primary"  @click="login(loginData)">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
 
<script setup name="Login" lang="ts">
    import { onMounted, reactive } from 'vue';
    import {login} from './Login'

    const loginData = reactive({
        userName: '',
        password: ''
    });

    onMounted(() => {

    });
</script>
 
<style scoped>
  .login {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .loginPart{
    position:absolute;
    top:50%;
    left:80%;
    transform:translate(-50%,-50%);
    width:450px;
    padding:50px;
    background: rgba(183, 220, 235, 0.3);
    box-sizing:border-box;
    box-shadow: 0px 15px 25px rgba(0,0,0,.5);
    border-radius:15px;
  }
  h2{
    margin:0 0 30px;
    padding:0;
    color: #fff;
    text-align:center;
    /*文字居中*/
  }
  .btn{
    transform:translate(170px);
    width:80px;
    height:40px;
    font-size:15px;
  }
</style>