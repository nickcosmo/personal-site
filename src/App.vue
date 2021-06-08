<template>
  <div id="main">
    <TheLeft />

    <TheMiddle />

    <TheRight />
  </div>
</template>

<script>
import TheMiddle from "./components/TheMiddle";
import TheLeft from "./components/TheLeft";
import TheRight from "./components/TheRight";

export default {
  components: { TheMiddle, TheLeft, TheRight },
};
</script>

<style>
:root {
  --header-font: "Roboto Mono", monospace;
  --body-font: "Roboto", sans-serif;
}

body {
  background-color: #faf9f6;
}

#main {
  display: flex;
  max-width: 1150px;
  height: 100vh;
  margin: auto;
}

#right {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 75px 8px;
}
</style>
