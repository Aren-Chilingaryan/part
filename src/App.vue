<template>
  <div id="app">
    <!-- <Part1/> -->
    <!-- Please uncomment this for part2 -->
    <Part2/>
  </div>
</template>

<script>
import Part1 from "./components/Part1.vue";
import Part2 from "./components/Part2.vue";
export default {
  name: 'App',
  components: {
    Part1,
    Part2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
