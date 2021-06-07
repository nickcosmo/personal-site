<template>
  <div class="portfolio">
    <div class="project">
      <h4>Pomo-app</h4>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>This was one of the first apps I made!</p>
      <p>URL to the project</p>
      <p>Tech used</p>
    </div>
    <div class="divider"></div>
    <div class="project">
      <h4>Pomo-app</h4>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>This was one of the first apps I made!</p>
      <p>URL to the project</p>
      <p>Tech used</p>
    </div>
    <div class="divider"></div>
    <div class="project">
      <h4>Pomo-app</h4>
      <img src="../../public/pomo.jpg" alt="pomo-app.com" />
      <p>This was one of the first apps I made!</p>
      <a href="https://pomo-app.com">URL to the project</a>
      <p>Tech used</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.portfolio {
  overflow: scroll;
}

h4 {
  text-align: left;
  padding-left: 15px;
  font-family: var(--header-font);
}

p {
  font-family: var(--body-font);
}

img {
  height: 200px;
  width: auto;
}

.project {
  padding: 10px;
}

.divider {
  display: inline-block;
  width: 90%;
  height: 1px;
  background-color: black;
}
</style>