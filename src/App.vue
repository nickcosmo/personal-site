<template>
  <div id="main">
    <div id="left">
      <app-block height="40%">
        <div><h1 style="font-size: 200px; margin: 0px">Hi</h1></div>
        <div><h2 style="font-size: 70px; margin: 0px">I'm Nick!</h2></div>
      </app-block>
      <app-block style="margin: 10px 0px" height="10%">
        <ul
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            list-style-type: none;
            margin: 0px;
            padding: 0px;
          "
        >
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
      <app-block style="margin-bottom: 5px" height="10%">
        I am a <span>{{ description }}</span>
      </app-block>
      <app-block style="margin-top: 5px" height="90%"
        >About/Portfolio section</app-block
      >
    </div>
    <div id="right">
      <app-block style="margin-bottom: 5px" height="40%"
        >This is what i am listening to ...</app-block
      >
      <app-block style="margin-top: 5px" height="60%"
        >Contact info stuff</app-block
      >
    </div>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock";

export default {
  components: { AppBlock },
  data() {
    return {
      description: null,
      descriptionArr: [
        "Web Developer",
        "Pizza Enthusiast",
        "Problem Solver",
        "Snowboarder",
        "Thinker",
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
  },
  created() {
    this.updateDescription();
  },
};
</script>

<style>
#main {
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
}

#left {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5px;
}

#middle {
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
}

#right {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
}
</style>
