<template>
  <div id="middle">
    <app-block class="block-top">
      <div class="container-top">
        <h3>
          I am a <span class="description">{{ description }}</span>
        </h3>
      </div>
    </app-block>
    <app-block class="section_about">
      <header class="section_about_header">
        <div
          @click="moveSection('about')"
          :class="{ active: activePage === 'about' }"
        >
          About
        </div>
        <div
          @click="moveSection('portfolio')"
          :class="{ active: activePage === 'portfolio' }"
        >
          Portfolio
        </div>
      </header>
      <div
        class="section_about_body"
        :class="{ moveLeft: left, moveRight: right }"
      >
        <div class="about">
          <p>
            I am many things but most of all, I consider myself a full stack
            JavaScript developer. I am self taught although I have a background
            in engineering. I have been self studying for about 2 years and am
            continuing to find myself getting excited to learn about new
            technology.
          </p>
        </div>
        <ThePortfolio />
      </div>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./AppBlock";
import ThePortfolio from "./ThePortfolio";

export default {
  components: { AppBlock, ThePortfolio },
  data() {
    return {
      activePage: "about",
      left: false,
      right: false,
      description: null,
      descriptionArr: [
        "Web Developer",
        "Pizza Enthusiast",
        "Problem Solver",
        "Snowboarder",
        "Thinker",
        "Nerd",
      ],
    };
  },
  methods: {
    updateDescription() {
      let i = 0;
      this.description = this.descriptionArr[i];
      setInterval(() => {
        this.description = this.descriptionArr[i];
        i++;
        if (i == this.descriptionArr.length) i = 0;
      }, 3000);
    },
    moveSection(section) {
      if (section === "about" && this.activePage !== "about") {
        this.left = false;
        this.right = true;
        this.activePage = section;
      }
      if (section === "portfolio" && this.activePage !== "portfolio") {
        this.left = true;
        this.right = false;
        this.activePage = section;
      }
    },
  },
  created() {
    this.updateDescription();
  },
};
</script>

<style scoped>
.container-top {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

h3 {
  font-family: var(--header-font);
  font-size: 2rem;
  vertical-align: middle;
  line-height: 1;
  margin: 0;
}

.about {
  text-align: left;
  border-right: 1px solid black;
}

.about p {
  font-size: 2em;
  font-family: var(--body-font);
  padding: 0 25px;
  margin-top: 15px;
}

.section_about {
  margin-top: 25px;
  height: 90%;
}

.section_about_header {
  display: flex;
}

.section_about_header div:nth-child(-n + 2) {
  width: 50%;
  border-style: solid;
  border-color: black;
  cursor: pointer;
  font-family: var(--header-font);
  font-size: 2rem;
}

.section_about_header div:nth-child(-n + 2):hover {
  background-color: black;
  color: white;
}

.section_about_header div:nth-child(1) {
  border-width: 0px 0px 1px 0px;
}

.section_about_header div:nth-child(2) {
  border-width: 0px 0px 1px 1px;
}

.section_about_body {
  display: flex;
  flex-direction: row;
  transition: all 1s ease;
  height: 100%;
}

.section_about_body div:nth-child(-n + 2) {
  flex: 0 0 100%;
}

.active {
  background-color: black;
  color: white;
}

.moveLeft {
  transform: translateX(-100.3%);
}

.moveRight {
  transform: translateX(0%);
}

.block-top {
  height: 10%;
}

@media (max-width: 750px) {
  .block-top {
    height: 60px;
  }

  .section_about {
    height: 500px;
  }
}
</style>