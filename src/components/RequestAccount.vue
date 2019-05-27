<template>
  <transition name="slide-in-right" enter-active-class="animated jackInTheBox">
    <div
      v-show="show"
      class="request"
      :class="{'light-request' : isDarkMode, 'dark-request' : !isDarkMode}"
    >
      Don't have account?
      <router-link to="/request">Sign up</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.2);
  a {
    color: $black;
  }
}
</style>