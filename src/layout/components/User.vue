<template>
  <div id="user">
    <a-switch
        checked-children="关闭配置栏"
        un-checked-children="打开配置栏"
        :checked='drawerVisible'
        @change="changeSwitch"
    />
    <a-dropdown>
      <div class="user-info">
        <img src="@/assets/logo.png" alt="">
        <span>小瓜仔</span>
      </div>
      <a-menu slot="overlay">
        <a-menu-item>
          <a-icon type="user" /> 个人中心
        </a-menu-item>
        <a-menu-item>
          <a-icon type="lock" /> 修改密码
        </a-menu-item>
        <a-menu-item>
          <a-icon type="poweroff" /> 退出
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "User",
  computed: {
    ...mapState({
      drawerVisible: (state) => state.app.drawerVisible
    })
  },
  methods: {
    changeSwitch(val) {
      this.$store.dispatch('app/changeDrawerVisible', val)
    }
  }
}
</script>

<style lang="scss" scoped>
#user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding-right: 20px;
  .user-info {
    margin-left: 30px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
    span {
      margin-left: 10px;
      color: #ffffff;
    }
  }
}
</style>
