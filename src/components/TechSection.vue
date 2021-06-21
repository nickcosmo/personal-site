<template>
  <div class="section">
    <h3>The Tech I Love</h3>
    <AppDivider />
    <div class="devIcons">
      <VueIcon />
      <NodeIcon />
      <ExpressIcon />
      <MongoIcon />
      <JSIcon />
      <HTMLIcon />
      <CSSIcon />
      <FirebaseIcon />
    </div>
    <h3>What I Am Learning</h3>
    <AppDivider />
    <div class="devIcons">
      <WebpackIcon />
      <SassIcon />
      <MySQLIcon />
    </div>
  </div>
</template>

<script>
import VueIcon from "./icons/VueIcon.vue";
import JSIcon from "./icons/JSIcon.vue";
import HTMLIcon from "./icons/HTMLIcon.vue";
import CSSIcon from "./icons/CSSIcon.vue";
import ExpressIcon from "./icons/ExpressIcon.vue";
import NodeIcon from "./icons/NodeIcon.vue";
import MongoIcon from "./icons/MongoIcon.vue";
import FirebaseIcon from "./icons/FirebaseIcon.vue";
import WebpackIcon from "./icons/WebpackIcon.vue";
import SassIcon from "./icons/SassIcon.vue";
import MySQLIcon from "./icons/MySQLIcon.vue";

export default {
  components: {
    VueIcon,
    JSIcon,
    HTMLIcon,
    CSSIcon,
    ExpressIcon,
    NodeIcon,
    MongoIcon,
    FirebaseIcon,
    WebpackIcon,
    SassIcon,
    MySQLIcon,
  },
};
</script>

<style scoped>
.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.devIcons {
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

h3 {
  font-family: var(--header-font);
  font-size: 1.3rem;
  line-height: 1;
  margin: 10px 0;
}
</style>