<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
        >
        <template v-for="(route) in routerList" :key="route.path">
          <el-menu-item :index="route.path">
            <span>{{ route.meta.title }}</span>
          </el-menu-item>
        </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <!-- <h1>这是APP</h1> -->
  <!-- <router-link to="/">主页</router-link>
  <router-link to="/about">关于</router-link> -->
  <!-- <button @click="toHome">主页</button>
  <button @click="toAbout">关于</button>
  <el-button type="primary" @click="changeCount"
    >我是 ElButton,counter数字：{{ countStore.count }}doubleCount:{{
      countStore.doubleCount
    }}</el-button
  >
  <el-button disabled>Default</el-button>
  <router-view></router-view> -->
</template>

<script>
import { getCurrentInstance, onMounted,ref } from 'vue';
import { useRouter } from "vue-router";
import useCountStore from "./store/counter";
export default {
  setup() {
    const data1 = ref(0)
    const countStore = useCountStore();
    const router = useRouter();
    const routerList = router.getRoutes().filter((item) => item.meta.isShow);
    
    onMounted(()=>{
      //获取组件实例
      const instance = getCurrentInstance();
      console.log('instance',instance.ctx.data1)
    })
    
    const toHome = function () {
      router.push({
        path: "/",
      });
    };
    const toAbout = function () {
      router.push({
        name: "about",
        query: {
          name: "about",
        },
        params: {
          keyword: "1",
        },
      });
    };
    const changeCount = () => {
      countStore.changeCount(80);
      // countStore.count ++
      // countStore.$reset()
      // countStore.$patch({ count: 90 });
    };
    return {
      toHome,
      toAbout,
      changeCount,
      countStore,
      routerList,
      data1
    };
  },
};
</script>

<style type="less" scoped>
:global(body) {
  margin: 0;
  padding: 0;
}
.common-layout {
  height: 100vh;
  .el-container {
    height: 100%;
    .el-aside {
      height: 100%;
      background-color: #545c64;
    }
    .el-header {
      background-color: #c6e2fe;
    }
    .el-main {
      background-color: #ecf5ff;
    }
  }
}
</style>
