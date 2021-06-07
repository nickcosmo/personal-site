<template>
  <div id="main">
    <TheLeft />

    <TheMiddle />

    <div id="right">
      <app-block style="margin-bottom: 8px" height="40%">
        This is what i am listening to ...
      </app-block>
      <app-block style="margin-top: 8px" height="60%">
        Contact info stuff
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock";
import TheMiddle from "./components/TheMiddle";
import TheLeft from "./components/TheLeft";

export default {
  components: { AppBlock, TheMiddle, TheLeft },
};
</script>

<style>
:root {
  --header-font: "Roboto Mono", monospace;
  --body-font: "Roboto", sans-serif;
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
  padding: 100px 8px;
}
</style>
