<template>
  <h1>watch组件</h1>
  <button @click="change">{{ count }}</button>
  {{ text }}
  <div>{{ person.name }}{{ person.age }}</div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  setup() {
    const count = ref(0);
    const text = ref('文本');
    const person = reactive({
      name:'张三',
      age:28,
      job:{
        j1:'j1'
      }
    })
    // watch(count, (newValue, oldValue) => {
    //   console.log("count变化了", newValue, oldValue);
    //   text.value += '!'
    // },{immediate:true});

    // watch(person,(newValue, oldValue)=>{
    //   console.log("监听reactive类型数据变化", newValue, oldValue);
    // })

    // watch(()=>person.age,(newValue, oldValue)=>{
    //   console.log("监听reactive类型数据变化", newValue, oldValue);
    // })

    // watch([()=>person.age,count],(newValue, oldValue)=>{
    //   console.log("监听reactive类型数据变化", newValue, oldValue);
    // })


    // runtime-core.esm-bundler.js:41 [Vue warn]: Invalid watch source:  j1 A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
    watch(person.job,(newValue, oldValue)=>{
      console.log("监听reactive类型数据变化", newValue, oldValue);
    },{deep:true})
    const change = function () {
      count.value += 1;
      person.age += 2;
      person.job.j1 += '888'
    };
    //使用了谁，监听谁的变化
    watchEffect(()=>{
      console.log('watchEffect',text.value)
    })
    return {
      count,
      change,
      text,
      person

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
