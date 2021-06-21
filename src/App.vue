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
  --block-margin: 25px;
}

body {
  background-color: #faf9f6;
}

#main {
  display: flex;
  max-width: 1350px;
  height: 100vh;
  margin: auto;
}

#left,
#right,
#middle {
  display: flex;
  flex-direction: column;
  padding: 5% 0;
}

#left {
  width: 27%;
  margin-right: var(--block-margin);
}

#middle {
  width: 50%;
}

#right {
  width: 23%;
  margin-left: var(--block-margin);
}

.devIcon {
  width: 40px;
  height: 40px;
  margin: 5px 10px;
}

@media screen and (max-height: 750px) {
  #right,
  #left,
  #middle {
    padding: 25px 0;
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
    margin: auto;
    /* max-height: 700px; */
  }

  #left {
    margin-top: 25px;
  }

  #right {
    margin-bottom: 25px;
  }
}
</style>
