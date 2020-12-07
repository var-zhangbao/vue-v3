<template>
  <ul class="nav nav-justified">
    <li class="nav-item">
        <a class="nav-link active" href="#">首页</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">职拓产品</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">关于我们</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">成功案列</a>
    </li>
</ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Main extends Vue {}
</script>
<style lang="scss" scoped>
// .nav{
//     justify-content: center;
// }
</style>