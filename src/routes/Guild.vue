<template>
  <div class="discord">
    <div class="container text-center">
      <h1>LUNA'S COMMUNITY</h1>
      <p class="my-5">
        Hey! We are a friendly and open community of <i>(mostly german and english)</i> young developers open for
        your ideas, projects and questions to share information and skills and having a nice time with friends and other people!
      </p>
      <a href="https://codeluna.page.link/discord">Pls join my Discord</a>
      <br/><br/>
      <iframe
          class="mx-auto dc-frame"
          src="https://discord.com/widget?id=822024093120462868&theme=dark" 
          allowtransparency="true" 
          frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { RouterEventBus } from '../js/router-eventbus';

export default {
  name: 'Guild',

  components: {

  },

  props: {
    
  },

  data() {
    return {
      
    };
  },

  mounted() {
    RouterEventBus.$emit('mounted', this.$options.name);
  }
}
</script>

<style scoped>
  .discord {
    margin-top: 120px;
    margin-left: auto;
    margin-right: auto;
    width: 50vw;
  }

  .dc-frame {
    height: 700px;
    width: 100%;
  }

  .dc-info {
    /* width: 50vw; */
  }
</style>
