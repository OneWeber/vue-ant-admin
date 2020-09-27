<template>
  <a-layout id="layout">
    <a-layout-header class="header">
      <Title />
      <User />
    </a-layout-header>
    <a-layout>
      <a-layout-sider style="background: #fff">Sider</a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-drawer
        title="系统配置"
        :placement="placement"
        :closable="false"
        :width="300"
        :visible="drawerVisible"
        @close="onClose"
    >
      <Config />
    </a-drawer>
  </a-layout>
</template>

<script>
import Title from "@/layout/components/Title";
import User from "@/layout/components/User";
import Config from "@/layout/components/Config";
import { mapState } from 'vuex'
export default {
  name: "Default",
  components: {
    Title,
    User,
    Config,
  },
  computed: {
    ...mapState({
      drawerVisible: (state) => state.app.drawerVisible
    })
  },
  data() {
    return {
      placement: 'right',
    }
  },
  methods: {
    onClose() {
      this.$store.dispatch('app/changeDrawerVisible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
#layout {
  height: 100vh;
  .header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
}
</style>
