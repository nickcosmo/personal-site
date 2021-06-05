<template>
  <div id="main">
    <div id="left">
      <app-block height="40%">
        <h1 style="font-size: 150px; margin: 0px">Hi</h1>
        <h2 style="font-size: 70px; margin: 0px">I'm Nick!</h2>
      </app-block>
      <app-block style="margin: 16px 0px" height="10%">
        <ul>
          <li>
            <button><img src="../public/linkedin.png" /></button>
          </li>
          <li>
            <button><img src="../public/email.png" /></button>
          </li>
          <li>
            <button><img src="../public/github.png" /></button>
          </li>
          <li>
            <button><img src="../public/codepen.png" /></button>
          </li>
        </ul>
      </app-block>
      <app-block height="50%">My Skills are ...</app-block>
    </div>
    <div id="middle">
      <app-block style="margin-bottom: 8px" height="10%">
        I am a <span class="description">{{ description }}</span>
      </app-block>
      <app-block class="section-about" style="margin-top: 8px" height="90%">
        <div class="section_about_header">
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
        </div>
        <div
          class="section_about_body"
          :class="{ moveLeft: left, moveRight: right }"
        >
          <div style="border-right: 1px solid black;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo distinctio, quas accusamus modi labore aliquid laudantium soluta perspiciatis ipsum, necessitatibus eaque velit cumque quam corrupti impedit, aliquam quibusdam inventore!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse debitis repudiandae maxime architecto laborum, tenetur nisi doloremque sunt nulla necessitatibus vel animi, numquam error dolorem quis asperiores enim? Officiis, tenetur?
          </div>
        </div>
      </app-block>
    </div>
    <div id="right">
      <app-block style="margin-bottom: 8px" height="40%">
        This is what i am listening to ...
      </app-block>
      <app-block style="margin-top: 8px" height="60%">
        Contact info stuff
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock";

export default {
  components: { AppBlock },
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
#main {
  display: flex;
  max-width: 1150px;
  height: 100vh;
  margin: auto;
}

#left {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 8px;
}

#middle {
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 100px 8px;
}

#right {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 100px 8px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
  margin-right: 10px;
  margin-left: 10px;
}

button {
  background-color: white;
  border: 1px solid black;
  display: flex;
  cursor: pointer;
}

.section_about_header {
  display: flex;
}

.section_about_header div:nth-child(-n + 2) {
  width: 50%;
  border-style: solid;
  border-color: black;
  cursor: pointer;
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
