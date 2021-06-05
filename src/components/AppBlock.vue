<template>
  <div class="app-block" :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["height"],
};
</script>

<style scoped>
.app-block {
  border: 1px solid black;
  width: 100%;
  color: black;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
  overflow: hidden;
}
</style>
