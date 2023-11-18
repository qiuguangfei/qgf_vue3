<template>
  <h1>home页面</h1>
  <button @click="toList">列表页面</button>
  <hr />
  <router-view></router-view>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const toList = () => {
      router.push({
        path: "/home/list",
      });
    };
    return {
      toList,
    };
  },
};
</script>
<style scoped>
</style>
