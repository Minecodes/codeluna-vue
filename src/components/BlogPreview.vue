<template>
  <div class="preview">
    <h1 id="title">{{ title }}</h1>
    <lable id="description">{{ msg }}</lable>
    <br/>
    <br/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    msg: String,
  },
})
export default class BlogPreview extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&display=swap');

.preview {
    width: 350px;
}

#title {
    color: #f0f0f0;
    font-family: 'Fira Mono', cursive;
}

#description {
    color: #dbdbdb;
    font-size: 20px;
    font-family: 'Lobster', cursive;
}
</style>
