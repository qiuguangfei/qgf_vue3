<template>
  <h1>about页面</h1>
  <hr/>
  <div>params:{{ data.params }}</div>
  <div>query:{{ data.query }}</div>
</template>
<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const data = reactive({
      params: route.params,
      query: route.query,
    });
    return {
      data,
    };
  },
};
</script>
<style scoped>
</style>
