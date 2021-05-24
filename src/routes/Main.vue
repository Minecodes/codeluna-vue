<template>
  <div>
    <div class="main-header">
      <div class="color-overlay"></div>
      <!--<video id="vid" autoplay loop muted>
        <source src="/bg.mp4" type="video/mp4">
      </video>-->
      <b-container fluid class="header-cont">
        <div class="logo mx-auto text-center">
          <img width="300" height="300" src="../assets/logo-1000x1000.png" />
          <h1 class="font-montserrat mt-3 mb-0">luna</h1>
          <h2 class="font-montserrat">CODELUNA</h2>
          <button class="down" @click="scrollTo('#scroll-about')">
            <p>READ MORE</p>
            <div style="top: -20px;">
              <img width="80" src="../assets/down-vec.svg" />
            </div>
            <div style="top: -60px;">
              <img width="80" src="../assets/down-vec.svg" />
            </div>
          </button>
        </div>
      </b-container>
    </div>
    <a id="scroll-about"></a>
    <b-container id="about" class="content mt-6">
      <h1 class="page-header">ABOUT ME</h1>
      <p class="mt-5">
        'ello, my name is Thies. 😉
        <br />
        <br />
        I'm {{ calculateAge(new Date('2007-03-13')) }} years old and a passionate developer and coder since around 2016. Back then,
        I've started creating small tools using .NET (C#), consoles and Windows Forms. Also, I've created some
        Bots using the Discord API to dive deeper into Javascript and object oriented programming in general.
        <br />
        <br />Currently, I am working as front and back end developer as well as DevOps administrator at a german software security
        and communications company. Primarily, I am working with .NET (C#), Go, NodeJS.
        <br />
        <br />I've created a lot of open source projects published on
        <a
          href="https://github.com/Minecodes"
          _target="blank"
        >GitHub</a>, generally to dive deep into technologies, frameworks or languages and to publish and document my
        colelcted knowledge for everyone in the open source community. In these projects, I often work with techniques like
        Go, C#/.NET, NodeJS, Deno, Python or - as front end techniques - stuff like Vue
        <i>
          (which was also
          used for this page by the way)
        </i>, React.
        <br />
        <br />In general, I've collected some experience working with general DevOps and deployment tools like Docker/docker-compose.
      </p>
      <h1 class="page-header mt-6">YOUTUBE</h1>
      <p class="text-center mt-4">
        Here you can see the latest video on my
        <i>(german and english)</i>&nbsp;
        <a href="https://youtube.com/Minecodes" target="_blank">YouTube channel</a>.
      </p>
      <div class="yt-iframe d-flex mt-5">
        <iframe
          title="My last Youtube video"
          src="https://www.youtube-nocookie.com/embed/aRevFcIBEw0"
          allowfullscreen
        ></iframe>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
/** @format */

import { RouterEventBus } from '../js/router-eventbus';

export default {
  name: 'Main',

  props: {
    msg: String,
  },

  components: {},

  methods: {
    scrollTo(el) {
      var elem = this.$el.querySelector(el);
      if (elem) elem.scrollIntoView();
    },

    calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },

  mounted() {
    RouterEventBus.$emit('mounted', this.$options.name);
  },
};
</script>

<style scoped>
/** @format */

/**video {
  width: 100%;
  height: 100%;
  filter: blur(10px);
}**/

a {
  text-decoration: underline;
}

.main-header {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/main-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: transform 0.25s ease-in-out;
}

.header-cont {
  padding: 20vh 0px;
}

.logo {
  opacity: 0.9;
}

.logo > h1 {
  font-weight: 300;
  font-size: 80px;
}

.logo > h2 {
  font-weight: 200;
  font-size: 27px;
}

.down {
  position: absolute;
  left: calc(50% - 50px);
  top: calc(100% - 150px);
  margin-top: auto;
  color: white !important;
}

.down > div {
  position: relative;
}

.mt-6 {
  margin-top: 100px;
}

.yt-iframe > iframe {
  max-width: 100%;
  width: 900px;
  height: 510px;
  border: 0;
  margin: 0px auto;
}

@media screen and (max-height: 750px), screen and (max-width: 690px) {
  .logo > img {
    width: 150px;
    height: 150px;
  }

  .logo > h1 {
    font-weight: 300;
    font-size: 55px;
  }

  .logo > h2 {
    font-weight: 200;
    font-size: 19px;
  }
}
</style>
