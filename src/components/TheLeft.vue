<template>
  <div id="left">
    <app-block height="40%">
      <div class="section">
        <h1
          style="font-size: 8rem; margin: 0px; font-family: var(--header-font)"
        >
          Hi
        </h1>
        <h2
          style="font-size: 3rem; margin: 0px; font-family: var(--header-font)"
        >
          I'm Nick!
        </h2>
      </div>
    </app-block>
    <app-block style="margin: 16px 0px" height="10%">
      <div class="section">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nicholasclansing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <img src="../../public/linkedin.png" />
              </button>
            </a>
          </li>
          <li>
            <button @click="openEmail">
              <img src="../../public/email.png" />
            </button>
          </li>
          <li>
            <a
              href="https://github.com/nickcosmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button><img src="../../public/github.png" /></button>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/nickcosmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button><img src="../../public/codepen.png" /></button>
            </a>
          </li>
        </ul>
      </div>
    </app-block>
    <TechSection />
  </div>
</template>

<script>
import TechSection from "./TechSection.vue";
import AppBlock from "./AppBlock";

export default {
  components: { AppBlock, TechSection },
  methods: {
    openEmail() {
      window.location.href = "mailto:nicklans92@gmail.com";
    },
  },
};
</script>

<style scoped>
#left {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 75px 8px;
}

ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
  margin-right: 20px;
  margin-left: 20px;
}

button {
  background-color: white;
  border: 1px solid black;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-5px);
  box-shadow: 3px 5px 0 black;
}

h3 {
  font-family: var(--header-font);
}

.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>