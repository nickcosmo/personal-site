<template>
  <div id="left">
    <app-block class="block-top">
      <div class="section">
        <h1>HELLO</h1>
        <h2>my name is Nick!</h2>
      </div>
    </app-block>
    <app-block class="block-middle">
      <div class="section">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nicholasclansing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <LinkedInIcon class="icon" />
              </button>
            </a>
          </li>
          <li>
            <button @click="openEmail">
              <EmailIcon class="icon" />
            </button>
          </li>
          <li>
            <a
              href="https://github.com/nickcosmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <GithubIcon class="icon" />
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/nickcosmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <CodepenIcon class="icon" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </app-block>
    <app-block class="block-bottom">
      <TechSection />
    </app-block>
  </div>
</template>

<script>
import TechSection from "./TechSection.vue";
import EmailIcon from "./icons/EmailIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import CodepenIcon from "./icons/CodepenIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";

export default {
  components: { TechSection, EmailIcon, GithubIcon, CodepenIcon, LinkedInIcon },
  methods: {
    openEmail() {
      window.location.href = "mailto:nicklans92@gmail.com";
    },
  },
};
</script>

<style scoped>
h1 {
  line-height: 1;
  font-size: 5.61rem;
  margin: 0px;
  font-family: var(--header-font);
}

h2 {
  font-size: 3rem;
  margin: 0px;
  font-family: var(--header-font);
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

.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.block-top {
  height: 40%;
}

.block-middle {
  margin: var(--block-margin) 0px;
  height: 10%;
}

.block-bottom {
  height: 50%;
}

.icon {
  width: 35px;
  height: 35px;
  margin: 4px;
}

@media (max-width: 750px) {
  .block-bottom {
    display: none;
  }

  .block-top {
    height: 200px;
  }

  .block-middle {
    height: 60px;
  }

  h1 {
    font-size: 4.75rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>