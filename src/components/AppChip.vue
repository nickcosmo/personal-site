<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  padding: 4px 10px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: rgb(255, 255, 255);
  font-family: var(--header-font);
  font-size: 0.8rem;
  margin: 2.5px 5px;
}

/* div:first-child {
  margin: 2.5px 5px 2.5px 0;
}

div:not(:first-child) {
  margin: 2.5px 5px;
} */
</style>