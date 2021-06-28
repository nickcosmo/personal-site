<template>
  <div id="middle">
    <app-block class="block-top">
      <div class="container-top">
        <h3>
          I am a <span class="description">{{ description }}</span>
        </h3>
      </div>
    </app-block>
    <app-block class="block-bottom">
      <header class="block-bottom_header">
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
        class="block-bottom_body"
        :class="{ moveLeft: left, moveRight: right }"
      >
        <div class="about-section">
          <p>
            I am a lot of things, but most of all I consider myself a web
            developer. I am self taught and my primary focus has been on
            Javascript, Vuejs, and Nodejs. I found a
            creative outlet with programming and I continue to find myself
            captivated by this vast universe of web dev. When I am not coding you
            will probably find me Snowboarding or continuing my search for the
            best IPA.
          </p>
        </div>
        <ThePortfolio />
      </div>
    </app-block>
  </div>
</template>

<script>
import ThePortfolio from "./ThePortfolio";

export default {
  components: { ThePortfolio },
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
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

h3 {
  font-family: var(--header-font);
  font-size: 2rem;
  vertical-align: middle;
  line-height: 1;
  margin: 0;
}

.about-section {
  text-align: left;
  border-right: 1px solid black;
  overflow: scroll;
  padding-bottom: 30px;
}

.about-section p {
  font-size: 2.5rem;
  font-family: var(--body-font);
  padding: 0 15px;
  margin-top: 15px;
}

.about-section::-webkit-scrollbar {
  width: 5px;
}

.about-section::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12);
  border-radius: 10px;
  border: 1px solid #fefefe;
}

.block-bottom {
  margin-top: var(--block-margin);
  height: 90%;
}

.block-bottom_header {
  display: flex;
}

.block-bottom_header div:nth-child(-n + 2) {
  width: 50%;
  border-style: solid;
  border-color: black;
  cursor: pointer;
  font-family: var(--header-font);
  font-size: 2rem;
}

.block-bottom_header div:nth-child(-n + 2):hover {
  background-color: black;
  color: white;
}

.block-bottom_header div:nth-child(1) {
  border-width: 0px 0px 1px 0px;
}

.block-bottom_header div:nth-child(2) {
  border-width: 0px 0px 1px 1px;
}

.block-bottom_body {
  display: flex;
  flex-direction: row;
  transition: all 1s ease;
  height: 100%;
}

.block-bottom_body div:nth-child(-n + 2) {
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

  .block-top h3 {
    font-size: 1.75rem;
  }

  .block-bottom {
    height: 500px;
  }

  .block-bottom_header div:nth-child(-n + 2) {
    font-size: 1.75rem;
  }

  .about-section p {
    font-size: 1.5rem;
  }
}
</style>