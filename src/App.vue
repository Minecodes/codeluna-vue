<template>
  <div id="nav">
    <router-link to="/"><img src="./assets/logo.png" /></router-link><br />
    <div id="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap");

@keyframes blink {
  0% {
    color: #ff3300;
  }
  100% {
    color: #aaaaaa;
  }
}

@keyframes flicker {
  0% {
    opacity: 0.4;
  }
  5% {
    opacity: 0.5;
  }
  10% {
    opacity: 0.6;
  }
  15% {
    opacity: 0.85;
  }
  25% {
    opacity: 0.5;
  }
  30% {
    opacity: 1;
  }
  35% {
    opacity: 0.1;
  }
  40% {
    opacity: 0.25;
  }
  45% {
    opacity: 0.5;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.85;
  }
  80% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

body {
  background-color: #1a1a1a;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-family: "Fira Mono", monospace;
  font-weight: bold;
  color: #aaaaaa;
}

#nav:hover a:hover {
  color: #9900ff;
}

#links a.router-link-exact-active {
  color: #ff3300;
  animation: flicker 1s;
}
</style>
