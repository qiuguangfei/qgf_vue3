<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld
    ref="helloWorld"
    msg="Welcome to Your Vue.js App"
    @handle="handle"
  />
</template>

<script setup>
import { ref, getCurrentInstance, onMounted,provide} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const handle = (value) => {
  console.log(value);
};
const helloWorld = ref(null);
const page = getCurrentInstance();
// 提供静态值
provide('foo', 'bar22222')
onMounted(() => {
  page.refs.helloWorld.add()
});

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
