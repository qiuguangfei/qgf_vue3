<template>
  <div class="hello">
    <h1>生命周期</h1>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';
export default {
  beforeCreate(){
    console.log('---------beforeCreate---------')
  },
  created(){
    console.log('---------created---------')
  },
  beforeMount(){
    console.log('---------beforeMount---------')
  },
  mounted(){
    console.log('---------mounted---------')
  },
  beforeUpdate(){
    console.log('---------beforeUpdate---------')
  },
  updated(){
    console.log('---------updated---------')
  },
  beforeUnmount(){
    console.log('---------beforeUnmount---------')
  },
  unmounted(){
    console.log('---------unmounted---------')
  },
  setup(props, context) {
    console.log("-------setup-------");
    onBeforeMount(()=>{
      console.log('*************onBeforeMount*************')
    })
    onMounted(()=>{
      console.log('*************onMounted*************-')
    })
    onBeforeUpdate(()=>{
      console.log('*************onBeforeUpdate*************')
    })
    onUpdated(()=>{
      console.log('*************onUpdated*************')
    })
    onBeforeUnmount(()=>{
      console.log('*************onBeforeUnmount*************')
    })
    onUnmounted(()=>{
      console.log('*************onUnmounted*************')
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
