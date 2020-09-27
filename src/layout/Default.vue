<template>
  <a-layout id="layout">
    <a-layout-header class="header">
      <Title />
      <User />
    </a-layout-header>
    <a-layout>
<!--      <a-layout-sider>Sider</a-layout-sider>-->
      <a-layout-content>
        <router-view />
      </a-layout-content>
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
