<template>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
            <el-input type="input" v-model="loginData.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginData.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="login(loginData)" type="primary">提交</el-button>
        </el-form-item>
    </el-form>
</template>
 
<script setup name="Login" lang="ts">
    import { onMounted, reactive } from 'vue';
    import {login} from './Login'

    const loginData = reactive({
        userName: 'admin',
        password: '123456'
    });

    onMounted(() => {

    });
</script>
 
<style scoped>
</style>