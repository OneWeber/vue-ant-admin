<template>
  <div class="login">
    <h3>后台管理系统</h3>
    <div class="login-form">
      <a-form :form="form">
        <a-form-item>
          <a-input
              class="input"
              placeholder="请输入账号"
              v-decorator="[
              'account',
              {
                rules: [{ required: true, message: '请输入账号' }],
              },
            ]"
          >
            <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item class="password">
          <a-input-password
              class="input"
              placeholder="请输入密码"
              v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }],
              },
            ]"
          >
            <a-icon
                slot="prefix"
                type="unlock"
                style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-item>
        <a-button type="primary" class="btn" @click="login"> 登录 </a-button>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    login() {
      this.form.validateFields((err) => {
        // eslint-disable-next-line no-empty
        if (!err) {

        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &-form {
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 5px;
    .password {
      margin-top: -10px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
