<template>
  <h1>自定义Ref</h1>
  <input v-model="value"/>
  <div>{{ value }}</div>
</template>

<script>
import { customRef, ref } from 'vue';
export default {
  setup(props, context) {
    const myRef = function(value,delay){
      return customRef((track,trigger)=>{
        let timer;
        return{
          get(){
            //追踪数据被使用
            track()
            return value
          },
          set(newValue){
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              //设置新值时触发模板解析
              trigger()
            }, delay);
            
          }
        }
      })
    }
    const value = myRef('',500)
    return{
      value
    }
  }
};
</script>

<style scoped>
</style>
