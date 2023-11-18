<template>
  <div class="hello">
    <h1>这是Slot组件</h1>
    <!-- 作用域插槽 -->
    <slot text="作用域插槽"> </slot>
    <!-- 具名插槽 -->
    <slot name="slotName"> </slot>
  </div>
</template>

<script>
export default {
  setup(props, context) {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
