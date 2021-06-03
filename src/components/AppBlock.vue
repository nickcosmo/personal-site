<template>
  <div :style="{ height: height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["height"],
};
</script>

<style scoped>
div {
  border: 1px solid black;
  width: 100%;
  color: black;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
}
</style>
