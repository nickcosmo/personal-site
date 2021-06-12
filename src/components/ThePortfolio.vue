<template>
  <div class="portfolio">
    <div class="project">
      <h3>P.1 Chat-App</h3>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>
        A real time chat application utilizing web sockets with Socket.io. Users
        can user third party auth with Google or Github to create an account.
        Each user has the ability to create a new channel and all channels are
        accessible with the search functionality.
      </p>
      <p>
        URL:
        <a
          href="https://chat-app-7c403.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://chat-app-7c403.web.app
        </a>
      </p>
      <p>
        Github Repo:
        <a
          href="https://github.com/nickcosmo/chat-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nickcosmo/chat-app
        </a>
      </p>
      <div class="chipArea">
        <app-chip>JavaScript</app-chip>
        <app-chip>VueJS</app-chip>
        <app-chip>Vuetify</app-chip>
        <app-chip>NodeJS</app-chip>
        <app-chip>Express</app-chip>
        <app-chip>Socket.io</app-chip>
        <app-chip>MongoDB</app-chip>
      </div>
    </div>
    <AppDivider />
    <div class="project">
      <h3>P.2 My-Unsplash</h3>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>
        An app similar to unsplash.com where you can upload an image and
        download any images displayed. Some features include a drag and drop
        file uploader and searching by image name.
      </p>
      <p>
        URL:
        <a
          href="https://pomo-app.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming Soon...
        </a>
      </p>
      <p>
        Github Repo:
        <a
          href="https://github.com/nickcosmo/my-unsplash"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nickcosmo/my-unsplash
        </a>
      </p>
      <div class="chipArea">
        <app-chip>JavaScript</app-chip>
        <app-chip>VueJS</app-chip>
        <app-chip>NodeJS</app-chip>
        <app-chip>Express</app-chip>
        <app-chip>CSS</app-chip>
        <app-chip>Mongo DB</app-chip>
      </div>
    </div>
    <AppDivider />
    <div class="project">
      <h3>P.3 Pomo-app</h3>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>
        My first full stack app I created! Quite cliche, but this is a pomodoro
        timer allowing users to follows the pomoodoro technique while studying
        or completing tasks. Features include customizable settings, user
        account creation, and weekly progress tracking.
      </p>
      <p>
        URL:
        <a
          href="https://pomo-app.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://pomo-app.com
        </a>
      </p>
      <p>
        Github Repo:
        <a
          href="https://github.com/nickcosmo/pomo-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nickcosmo/pomo-app
        </a>
      </p>
      <div class="chipArea">
        <app-chip>JavaScript</app-chip>
        <app-chip>VueJS</app-chip>
        <app-chip>NodeJS</app-chip>
        <app-chip>Express</app-chip>
        <app-chip>MongoDB</app-chip>
        <app-chip>CSS</app-chip>
      </div>
    </div>
  </div>
</template>

<script>
import AppChip from "./AppChip.vue";

export default {
  components: { AppChip },
};
</script>

<style scoped>
.portfolio {
  overflow: scroll;
  padding-bottom: 30px;
}

.portfolio::-webkit-scrollbar {
  width: 5px;
}

.portfolio::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12);
  border-radius: 10px;
  border: 1px solid #fefefe;
}

h3,
p {
  text-align: left;
  /* padding-left: 15px;  */
}

h3 {
  font-family: var(--header-font);
}

p {
  font-family: var(--body-font);
}

img {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
  height: auto;
}

.project {
  padding: 0 15px 10px 15px;
}

.chipArea {
  display: flex;
  flex-wrap: wrap;
}
</style>