<template>
  <div class="hello">
    <h1>这是HELLO组件</h1> 
    {{ title }}
    <br/>
    {{ info.name }}
    <br/>
    {{ info.age }}
    <button @click="toParent">点击向父组件传递数据</button>
  </div>
</template>

<script>
export default {
  props:['info','title'],
  emits:['childCompClick'],
  setup(props,context){
    console.log('props',props.info.name)
    const toParent = function(){
      context.emit('childCompClick','Hello组件数据')
    }
    return{
      toParent
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
