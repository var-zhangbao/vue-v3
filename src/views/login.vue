<template>
   <div>
     <NavBar />
     登录
   </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar.vue";
@Options({
  components: {
    NavBar
  }
})
export default class Main extends Vue {}
</script>
