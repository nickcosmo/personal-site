<template>
  <div class="portfolio">
    <div class="project">
      <h4>P.0001 Pomo-app</h4>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad totam alias
        nam debitis delectus! Perferendis labore ea possimus laboriosam eum
        laborum magnam, enim repellendus accusamus molestias. Quaerat nesciunt
        cupiditate iusto!
      </p>
      <a href="https://pomo-app.com" target="_blank" rel="noopener noreferrer">
        <p>https://pomo-app.com</p>
      </a>
      <div class="chipArea">
        <app-chip>JavaScript</app-chip>
        <app-chip>VueJS</app-chip>
        <app-chip>NodeJS</app-chip>
        <app-chip>Express</app-chip>
      </div>
    </div>
    <div class="divider"></div>
    <div class="project">
      <h4>P.0001 Pomo-app</h4>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad totam alias
        nam debitis delectus! Perferendis labore ea possimus laboriosam eum
        laborum magnam, enim repellendus accusamus molestias. Quaerat nesciunt
        cupiditate iusto!
      </p>
      <a href="https://pomo-app.com" target="_blank" rel="noopener noreferrer">
        <p>https://pomo-app.com</p>
      </a>
      <div class="chipArea">
        <app-chip>JavaScript</app-chip>
        <app-chip>VueJS</app-chip>
        <app-chip>NodeJS</app-chip>
        <app-chip>Express</app-chip>
        <app-chip>Mongo DB</app-chip>
      </div>
    </div>
    <div class="divider"></div>
    <div class="project">
      <h4>P.0001 Pomo-app</h4>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad totam alias
        nam debitis delectus! Perferendis labore ea possimus laboriosam eum
        laborum magnam, enim repellendus accusamus molestias. Quaerat nesciunt
        cupiditate iusto!
      </p>
      <a href="https://pomo-app.com" target="_blank" rel="noopener noreferrer"
        ><p>https://pomo-app.com</p></a
      >
      <div class="chipArea">
        <app-chip>JavaScript</app-chip>
        <app-chip>VueJS</app-chip>
        <app-chip>NodeJS</app-chip>
        <app-chip>Express</app-chip>
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
  margin-bottom: 40px;
}

.portfolio::-webkit-scrollbar {
  width: 5px;
}

.portfolio::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12);
  border-radius: 10px;
  border: 1px solid #fefefe;
}

h4,
p {
  text-align: left;
  padding-left: 15px;
}

h4 {
  font-family: var(--header-font);
}

p {
  font-family: var(--body-font);
}

img {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 80%;
  height: auto;
}

.project {
  padding: 10px 30px;
}

.chipArea {
  display: flex;
  flex-wrap: wrap;
}
</style>