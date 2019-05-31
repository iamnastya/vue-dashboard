<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "animate.css";
import Vue from "vue";
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-141217049-1"
});

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "f0f3f5";
  },
  methods: {
    track() {
      this.$ga.page("/");
    }
  }
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

body {
  margin: 0;
  background: $dark-blue;
}

line,
text {
  stroke: $light-gray;
  opacity: 0.2;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
  text-align: center;
}

.h4 {
  margin: 0;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  height: 60px;

  font-size: 20px;
  color: white;
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;

  text-decoration: none;
}

// Theme
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: $black;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
