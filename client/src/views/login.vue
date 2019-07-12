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
      @btnClick="getVerifyCode"
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
      <button :disabled="isClick" @click="login">login</button>
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
  computed: {
    isClick() {
      if (!this.phone || !this.verifyCode) return true;
      else return false;
    }
  },
  components: {
    InputGroup
  },
  methods: {
    login() {
      this.errors = {};
      this.$axios
        .post("/api/posts/sms_back", {
          phone: this.phone,
          code: this.verifyCode
        })
        .then(res => {
          console.log(res);
          localStorage.setItem("ele_login", true);
          this.$router.push("/");
          console.log(1);
        })
        .catch(err => {
          this.errors = {
            code: err.response.data.msg
          };
        });
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        this.validateBtn();
        this.$axios
          .post("/api/posts/sms_send", {
            tpl_id: "172234",
            key: "4182e4d571287b9b903c037806a1b81c",
            phone: this.phone
          })
          .then(res => {
            console.log(res);
          });
      }
    },
    validateBtn() {
      let time = 59;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    validatePhone() {
      // 验证手机号码
      if (!this.phone) {
        this.errors = {
          phone: "号码不能为空"
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号"
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    }
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