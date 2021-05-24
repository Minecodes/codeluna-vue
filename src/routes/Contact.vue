<template>
  <div class="contact">
    <h1 class="page-header mb-5">CONTACT</h1>
    <b-container class="d-flex">
      <div class="d-flex mx-auto">
        <a
          v-for="sl in socialLinks"
          :key="sl.link"
          :href="sl.link"
          target="_blank"
          class="mx-2 social-btn"
        >
          <img :src="sl.img" height="60" width="60" />
        </a>
      </div>
    </b-container>
    <b-container class="mt-5 tfont">
      <table class="mx-auto">
        <tr>
          <td>Mail</td>
          <td>
            <a href="mailto:minecodes13@gmail.com">minecodes13[a]gmail.com</a>
          </td>
        </tr>
        <tr>
          <td>Discord</td>
          <td>
            <a href="https://discord.gg/hjwYPE2ZXu">Minecodes#6701</a>
          </td>
        </tr>
        <tr>
          <td>Shout out</td>
          <td>
            Big big shout out to <a href="https://zekro.de">zekro/zekroTJA</a>, my site is based on his site.<br/>
            Please take a look at his code and his website.
          </td>
        </tr>
      </table>
    </b-container>
    <div class="text-center" style="margin-top: 100px;">
      Verantwortlich im Sinne der Gesetzgebung bin ich. Ich betreibe diesen WWW-Server privat und ohne gewerblichen Interessen bzw. Angebote.<br/>
      Falls sich fehlerhafte Links oder Angaben eingeschlichen haben sollten, so bitte ich Sie, dies einerseits zu entschuldigen, andererseits<br/>
      mich zu informieren, so dass ich Korrekturen vornehmen kann. Für Inhalte von Seiten, auf die ich per Link verweise, bin ich nicht verantwortlich und kann ich keine Haftung übernehmen.<br/><br/>

      Meine Kontaktdaten:<br/><br/>

      Thies Ohme<br/>
      Kirchentellinsfurter Str. 34/1<br/>
      72827 Wannweil<br/><br/>

      Tel. 07121 / 509 612<br/>
      Fax: 07121 / 509 642 (24h)<br/>
      E-Mail: <a href="mailto:minecodes13@gmail.com">minecodes13@gmail.com</a>
    </div>
    <div class="built-with-banner text-center">
      <div class="hr"></div>
      <div class="mt-3">
        <p>
          © 2021 Thies Ohme (CodeLuna/Minecodes)
          <br />
          <br />You are
          <strong>not allowed</strong> to use the CodeLuna/Minecodes logo anywhere without explicit permission.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/** @format */

import logoDiscord from '../assets/social/discord-128x128.png';
import logoYoutube from '../assets/social/youtube-128x128.png';
import logoGithub from '../assets/social/github-128x128.png';
import logoTwitch from '../assets/social/twitch-128x128.png';

import { RouterEventBus } from '../js/router-eventbus';

export default {
  name: 'Contact',

  props: {},

  data() {
    return {
      socialLinks: [
        {
          img: logoDiscord,
          link: 'https://discord.gg/hjwYPE2ZXu',
        },
        {
          img: logoYoutube,
          link: 'https://youtube.com/Minecodes',
        },
        {
          img: logoGithub,
          link: 'https://github.com/Minecodes',
        },
        {
          img: logoTwitch,
          link: 'https://twitch.tv/Minecodes',
        },
      ],
    };
  },

  mounted() {
    RouterEventBus.$emit('mounted', this.$options.name);
  },
};
</script>

<style scoped>
/** @format */

a {
  text-decoration: underline;
}

td {
  padding-right: 20px;
}

.contact {
  margin-top: 120px;
}

.social-btn {
  transition: all 0.25s ease-in-out;
}

.social-btn:hover {
  transform: scale(1.06);
}

.tfont {
  font-size: 20px;
}

.imprint-btn {
  background-color: var(--c-bg-sec);
  padding: 15px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  text-decoration: none;
  border: 3px solid var(--c-highlight);
  color: white;

  transition: all 0.25s ease-in-out;
}

.imprint-btn:hover {
  background-color: var(--c-highlight);
  border: 6px solid #a30834;
}

.built-with-banner {
  margin-top: 100px;
}

.built-with-banner > .hr {
  width: 80%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.25);
  margin: 0px auto;
}

@media screen and (max-width: 690px) {
}
</style>
