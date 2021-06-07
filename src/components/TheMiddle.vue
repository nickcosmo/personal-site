<template>
  <div id="middle">
    <app-block
      style="margin-bottom: 8px; display: flex; justify-content: center"
      height="10%"
    >
      <h3
        style="
          font-family: var(--header-font);
          font-size: 2em;
          vertical-align: middle;
          line-height: normal;
        "
      >
        I am a <span class="description">{{ description }}</span>
      </h3>
    </app-block>
    <app-block class="section_about" height="90%">
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
        <div
          class="about"
          style="text-align: left; border-right: 1px solid black"
        >
          <p
            style="font-size: 2em; font-family: var(--body-font); padding: 10px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quo distinctio, quas accusamus modi labore aliquid laudantium soluta
            perspiciatis ipsum, necessitatibus eaque velit cumque quam corrupti
            impedit, aliquam quibusdam inventore!
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
#middle {
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 100px 8px;
}

/*  */

.section_about {
  margin-top: 8px;
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
  font-size: 2em;
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
</style>