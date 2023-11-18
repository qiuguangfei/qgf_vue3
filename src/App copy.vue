<template>
  <h1>父组件数据展示</h1>
  <h1>X:{{ point.x }} Y:{{ point.y }}</h1>
  <p>{{ info.name }}</p>
  <p>{{ info.age }}</p>
  <p>{{ info.sex }}</p>
  <button @click="handle">click</button>
  <hr/>
  <Hello
    :info="info"
    title="父组件传递过来的props"
    @childCompClick="handleChildClick"
  >
  </Hello>
  <hr/>
  <SlotComp>
    <template v-slot="helloSlot">
      <div>{{ helloSlot.text }}</div>
    </template>
    <template v-slot:slotName>
      <div>具名插槽</div>
    </template>
  </SlotComp>
  <hr/>
  <Computed/>
  <hr/>
  <Watch/>
  <hr/>
  <CustomRef/>
  <hr/>
  <LifeCycle/>
</template>

<script>
import { ref, reactive } from "vue";
import Hello from "./components/Hello.vue";
import SlotComp from "./components/Slot.vue";
import Computed from "./components/Computed.vue";
import Watch from "./components/watch.vue";
import CustomRef from "./components/CustomRef.vue";
import LifeCycle from "./components/LifeCycle.vue";
import usePoint from './hooks/usePoint';
export default {
  // data:function(){
  //   return {
  //     name:'options Api'
  //   }
  // },
  // methods:{
  //   handle(){
  //     console.log(this.title,this.name)
  //   }
  // },
  components: {
    Hello,
    SlotComp,
    Computed,
    Watch,
    CustomRef,
    LifeCycle
  },
  // beforeCreate() {
  //   console.log("-----beforeCreate------");
  // },
  setup() {
    const title = ref("composition Api");
    const info = reactive({
      name: "App组件里面的name",
      age: 30,
    });
    const point = usePoint();
    const handle = function () {
      console.log(info.age);
      info.sex = "男";
    };
    const handleChildClick = function (...args) {
      console.log("父组件接收到子组件传递过来的数据：", args);
    };
    return {
      title,
      info,
      handle,
      handleChildClick,
      point
    };
  },
};
</script>

<style>
</style>
