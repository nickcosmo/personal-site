<template>
  <div id="right">
    <app-block style="margin-bottom: 8px" height="80%">
      <h3>The last song I listened to on Spotify was...</h3>
      <div class="divider"></div>
      <div class="songData" v-if="songData">
        <div>
          <a :href="songData.url" target="_blank" rel="noopener noreferrer">
            <img :src="songData.image[3]['#text']" :alt="songData.name" />
          </a>
        </div>
        <p>
          {{ songData.name }}
        </p>
        <p>
          {{ songData.album["#text"] }}
        </p>
        <p>
          {{ songData.artist["#text"] }}
        </p>
      </div>
    </app-block>
    <app-block height="20%">
      <div>
        <h3>
          You probably already knew this but it is {{ temperature }}&deg;F in
          {{ location }} right now.
        </h3>
      </div>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./AppBlock";

export default {
  components: { AppBlock },
  data() {
    return {
      songData: null,
      temperature: null,
      location: null,
    };
  },
  methods: {
    async getWeather(lat, long) {
      const weatherResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${long}&appid=${process.env.VUE_APP_OWM_KEY}`
      );
      const weatherJson = await weatherResponse.json();
      this.temperature = Math.floor(weatherJson.main.temp);
      this.location = weatherJson.name;
    },
  },
  async created() {
    const lastFMData = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nickcosmo&api_key=${process.env.VUE_APP_LASTFM_KEY}&format=json`
    );
    const lastFMJson = await lastFMData.json();
    this.songData = lastFMJson.recenttracks.track[0];

    let long, lat;

    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      this.getWeather(lat, long);
    });
  },
};
</script>

<style scoped>
img {
  height: 130px;
  width: auto;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.16);
}

h3 {
  font-family: var(--header-font);
  margin: 10px 0;
}

p {
  font-family: var(--body-font);
  margin: 4px;
  font-size: 1.1rem;
}

.songData {
  margin-top: 20px;
}

.divider {
  display: inline-block;
  width: 90%;
  height: 0.75px;
  background-color: black;
}
</style>