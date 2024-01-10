<template>
  <div id="right">
    <app-block class="block-top">
      <TechSection />
    </app-block>
    <app-block class="block-middle">
      <div class="container-songs-header">
        <h3>the last few songs i listened to on spotify</h3>
      </div>
      <AppDivider />
      <div class="container-songs-body" v-if="songData">
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
          <!-- <AppDivider /> -->
        </div>
      </div>
    </app-block>
    <app-block class="block-bottom">
      <div class="section-weather">
        <h3>
          you probably already knew this but it is {{ temperature }}&deg;F in
          {{ location }} right now.
        </h3>
      </div>
    </app-block>
  </div>
</template>

<script>
import TechSection from "./TechSection";

export default {
  components: { TechSection },
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
.container-songs-header {
  display: flex;
  padding: 10px 15px 0 15px;
}

img {
  width: 60%;
  height: auto;
  /* border-radius: 5px; */
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

.container-songs-body p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.container-songs-body {
  height: 100%;
  overflow: scroll;
  padding: 10px 10px 10px 10px;
}

.container-songs-body div:not(:first-child) {
  margin-top: 20px;
}

.container-songs-body::-webkit-scrollbar {
  width: 5px;
}

.container-songs-body::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12);
  border-radius: 10px;
  border: 1px solid #fefefe;
}

.section-weather {
  padding: 10px;
}

.block-middle {
  height: 80%;
  padding-bottom: 80px;
}

.block-top {
  display: none;
}

.block-bottom {
  margin-top: var(--block-margin);
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 750px) {
  .block-middle {
    margin-top: var(--block-margin);
    height: 250px;
  }

  .block-top {
    display: flex;
    justify-content: center;
    height: 285px;
    margin-top: var(--block-margin);
  }

  .block-bottom {
    height: 100px;
    margin-top: var(--block-margin);
  }

  img {
    width: 40%;
  }
}
</style>