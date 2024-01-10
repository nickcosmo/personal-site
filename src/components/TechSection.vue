<template>
  <div class="section">
    <h3>the tech i love</h3>
    <AppDivider />
    <div class="devIcons">
      <TSIcon />
      <NodeIcon />
      <JSIcon />
      <NestJSIcon />
      <ExpressIcon />
      <PostgresIcon />
      <VueIcon />
      <GCPIcon />
      <MongoIcon />
    </div>
  </div>
</template>

<script>
import VueIcon from "./icons/VueIcon.vue";
import JSIcon from "./icons/JSIcon.vue";
import ExpressIcon from "./icons/ExpressIcon.vue";
import NodeIcon from "./icons/NodeIcon.vue";
import MongoIcon from "./icons/MongoIcon.vue";
import NestJSIcon from "./icons/NestJSIcon.vue";
import PostgresIcon from "./icons/PostgresIcon.vue";
import GCPIcon from "./icons/GCPIcon.vue";
import TSIcon from "./icons/TSIcon.vue";

export default {
  components: {
    VueIcon,
    PostgresIcon,
    JSIcon,
    ExpressIcon,
    NodeIcon,
    MongoIcon,
    TSIcon,
    NestJSIcon,
    GCPIcon,
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