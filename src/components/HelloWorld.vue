<template>
  <div class="hello">
    <!-- <h1>{{ msg1 }}</h1> -->
    <h1>{{ state.count }}0000000</h1>
    <button @click="add">{{ count }}</button>
  </div>
  <!-- <Hello></Hello> -->
</template>

<script setup>
// import Hello from './Hello.vue'
import {
  ref,
  toRefs,
  defineProps,
  defineEmits,
  computed,
  onMounted,
  defineExpose,
  shallowRef,
  inject,
} from "vue";
const count = ref(0);
const props = defineProps({
  msg: String,
});
const { msg } = toRefs(props);
const state = shallowRef({count:0})
// const msg1 = computed(() => msg.value + count.value);
const msg1 = computed({
  get(){
    return msg.value + count.value
  },
  set(val){
    count.value += val
  }
});
const emits = defineEmits(["handle"]);
const add = () => {
  msg1.value = 8
  // count.value++;
  emits("handle", count.value);
  state.value.count = 20
};
onMounted(() => {
  count.value = 10;
});
const foo = inject('foo','222')
console.log(foo)
defineExpose({count,add})
// export default {
//   props: { msg: String },
//   setup(props,{emit}) {
//     const count = ref(0);
//     const { msg } = toRefs(props);
//     const add = () => {
//       count.value++;
//       emit('handle',count.value);
//     };
//     return {
//       msg1: msg,
//       count,
//       add,
//     };
//   },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 300px;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  align-content:center
}
h1:nth-of-type(1){
  margin-right: auto;
  /* flex-basis: auto; */
}
h1{
  margin: 0;
}
/* button{
  height: 32px;
} */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
