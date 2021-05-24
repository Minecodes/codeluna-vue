<template>
  <div class="home">
  <title>CodeLuna Blog</title>
  <img alt="Vue logo" src="../assets/logo.png" />
  <br/>
  <br/>
  <!--<HelloWorld msg="Hello Privacy! :D" />-->
  <center>
    <a href="/#/Minecodes/0"><BlogPreview title="Hello World" msg="Why does everyone use as example script Hello World? Nobody know that, but my reason is..." /></a>
    <br/><br/><br/>
  </center>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import BlogPreview from "@/components/BlogPreview.vue";

@Options({
  components: {
    HelloWorld,
    BlogPreview
  },
})
export default class Home extends Vue {}
</script>

<style>
.home {
    align-content: center;
    align-items: center;
    text-align: center;
}

#previews {
    align-self: center;
    width: 500px;
}
</style>