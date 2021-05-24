<template>
    <div>
        <title>About - CodeLuna</title>
        <img src="/img/blog/CodeLuna.png" width="250" height="250" />
        <h1 id="minecodes">About</h1>
        <br/><br/>
        <label id="text">
            CodeLuna is an blog and documentation of <a id="m" href="/#/Minecodes">Minecodes</a>.<br/>
            He is the founder of "⫷ 𝓒𝓸𝓭𝓮 𝓛𝓾𝓷𝓪 ⫸" (CodeLuna) and uploads here his stuff.
        </label>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&display=swap');

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

#m a.router-link-exact-active {
  color: #ff3300;
  animation: flicker 1s;
}

#m a {
  color: #ff3300;
  animation: flicker 1s;
}

#minecodes {
    color: #ffffff;
}

#text {
    color: #e7e7e7;
    font-size: 25px;
    font-family: 'Lobster', cursive;
}
</style>