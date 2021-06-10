<template>
  <div id="right">
    <app-block class="block-top">
      <TechSection />
    </app-block>
    <app-block class="block-middle">
      <div class="container-songs">
        <h3>The last few songs I listened to on Spotify</h3>
      </div>
      <div class="divider"></div>
      <div class="songData" v-if="songData">
        <div v-for="song in songData" :key="song.mbid">
          <div>
            <a :href="song.url" target="_blank" rel="noopener noreferrer">
              <img :src="song.image[3]['#text']" :alt="song.name" />
            </a>
          </div>
          <p>{{ song.name }}</p>
          <p>
            {{ song.album["#text"] }}
          </p>
          <p>
            {{ song.artist["#text"] }}
          </p>
        </div>
      </div>
    </app-block>
    <app-block class="block-bottom">
      <div class="section-weather">
        <p>
          You probably already knew this but it is {{ temperature }}&deg;F in
          {{ location }} right now.
        </p>
      </div>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./AppBlock";
import TechSection from "./TechSection";

export default {
  components: { AppBlock, TechSection },
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
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${long}&appid=${process.env.VUE_APP_OWM_KEY}`
      );
      const weatherJson = await weatherResponse.json();
      this.temperature = Math.floor(weatherJson.main.temp);
      this.location = weatherJson.name;
    },
  },
  async created() {
    const lastFMData = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nickcosmo&api_key=${process.env.VUE_APP_LASTFM_KEY}&format=json&limit=3`
    );
    const lastFMJson = await lastFMData.json();
    this.songData = lastFMJson.recenttracks.track;

    console.log(lastFMJson);

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
.container-songs {
  display: flex;
}

img {
  width: 60%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.16);
}

h3 {
  font-family: var(--header-font);
  font-size: 1.125rem;
  margin: 0;
}

p {
  font-family: var(--body-font);
  margin: 2px;
  font-size: 1rem;
}

.songData p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.songData {
  height: calc(82% - 0.75px);
  overflow: scroll;
  padding: 20px 10px 10px 10px;
}

.songData div:not(:first-child) {
  margin-top: 20px;
}

.songData::-webkit-scrollbar {
  width: 5px;
}

.songData::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12);
  border-radius: 10px;
  border: 1px solid #fefefe;
}

.section-weather {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.block-middle {
  height: 80%;
}

.block-top {
  display: none;
}

.block-bottom {
  margin-top: 25px;
  height: 20%;
}

@media (max-width: 750px) {
  .block-middle {
    margin: 16px 0 0 0;
    height: 400px;
  }

  .block-top {
    margin: 16px 0 0 0;
    display: inline;
    height: 300px;
  }

  .block-bottom {
    margin: 16px 0;
    height: 80px;
  }

  /* .songData {
    display: flex;
    flex-direction: row;
  } */
}
</style>