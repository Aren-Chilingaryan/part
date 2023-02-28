<template >
    <div class="part1">
        <Task1/>
        <Task2/>
        <Task3/>
    </div>
</template>

<script>
    import Task1 from "./Part1/Task1.vue";
    import Task2 from "./Part1/Task2.vue";
    import Task3 from "./Part1/Task3.vue";
    export default {
        data(){
            return{

            }
        },
        components : {
            Task1,
            Task2,
            Task3
        }
    }
</script>
<style lang="scss">
    @import "../css/Part1.scss";
</style>