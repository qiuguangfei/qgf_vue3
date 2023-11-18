<template>
  <div>姓：<input v-model="person.firstName" /></div>
  <div>名：<input v-model="person.secondName" /></div>
  <div><input v-model="person.fullName" /></div>
  {{ person.fullName }}
</template>

<script>
import { ref, computed, reactive } from "vue";
export default {
  setup(props, context) {
    // const firstName = ref('1');
    // const secondName = ref('2');
    const person = reactive({
      firstName: "1",
      secondName: "2",
    });
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.secondName;
      },
      set(value) {
        const arr = value.split("-");
        person.firstName = arr[0];
        person.secondName = arr[1];
      },
    });
    return {
      person,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
