<template>
  <div class="hello">
    这是HELLO组件{{ foo }}
  </div>
</template>

<script setup>
import {
  inject
} from "vue";
const foo = inject('foo',111);
console.log(2222,foo)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  /* display: flex; */
}
h1{
  /* flex-basis: auto; */
}
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
