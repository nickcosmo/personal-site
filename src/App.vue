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

.divider {
  display: inline-block;
  width: 90%;
  height: 0.75px;
  background-color: black;
}

#main {
  display: flex;
  max-width: 1150px;
  height: 100vh;
  margin: auto;
}

#left,
#right,
#middle {
  display: flex;
  flex-direction: column;
  padding: 5% 25px;
}

#left {
  width: 30%;
}

#middle {
  width: 45%;
}

#right {
  width: 25%;
}

@media screen and (max-height: 750px) {
  #right,
  #left,
  #middle {
    padding: 25px 13px;
  }
}

@media screen and (max-width: 750px) {
  #main {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  #right,
  #left,
  #middle {
    width: 90%;
    padding: 0;
    /* max-height: 700px; */
  }

  #left {
    margin-top: 15px;
  }
}
</style>
