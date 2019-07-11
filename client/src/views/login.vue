<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="login image" />
    </div>

    <!--  // phone -->
    <InputGroup
      placeholder="请输入手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      type="number"
      v-model="phone"
    />

    <!-- 验证码 -->
    <InputGroup placeholder="验证码" :error="errors.code" type="number" v-model="verifyCode" />

    <div class="login_des">
      <p>
        新用户登录便自动注册,表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>

    <div class="login_btn">
      <button>login</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/inputGroup";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false
    };
  },
  components: {
    InputGroup
  }
};
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  .logo {
    text-align: center;
    img {
      width: 150px;
    }
  }
  .text_group,
  .login_des,
  .login_btn {
    margin-top: 20px;
  }
  .login_des {
    color: #aaa;
    line-height: 22px;
  }
  .login_des span {
    color: #4d90fe;
  }
  .login_btn button {
    width: 100%;
    height: 40px;
    background-color: #48ca38;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;
  }
  .login_btn button[disabled] {
    background-color: #8bda81;
  }
}
</style>