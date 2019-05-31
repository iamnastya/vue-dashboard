<template>
  <div id="app" :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}">
    <router-view/>
  </div>
</template>

<script>
import "animate.css";
import Vue from "vue";

export default {
  name: "App",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "f0f3f5";
  }
};
</script>

<style lang="scss">
* {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

body {
  margin: 0;
  background: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

line,
text {
  stroke: $dark-gray;
  opacity: 0.2;
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
  line,
  text {
    stroke: $dark-gray;
  }
}

.dark-background {
  background-color: $dark-blue;
  line,
  text {
    stroke: $light-gray;
  }
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

.light-box {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.dark-box {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
