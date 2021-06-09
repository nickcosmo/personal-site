<template>
  <div class="app-block">
    <slot></slot>
  </div>
</template>


<style scoped>
.app-block {
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16); */
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 1);
  border: 1px solid black;
  background-color: #fefefe;
  /* border-radius: 10px; */
  width: 100%;
  color: black;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
  overflow: hidden;
}
</style>
