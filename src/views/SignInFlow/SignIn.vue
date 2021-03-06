<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <Notification v-if="hasText" :text="text"/>
    <RequestAccount/>
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode">
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign In to your account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Your Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="email"
          required
        >
        <input
          type="password"
          placeholder="Password"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="password"
          required
        >
        <button class="btn">Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}"
      >Forgot your password?</router-link>
      <ThemeSwitch/>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import { auth } from "@/main";
import Notification from "@/components/Notification";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(response => {
          this.$router.replace("/");
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = "A recovery email has been sent to " + params.email;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = "Your request has been sent to an admin for" + params.email;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}

.btn {
  &:hover {
    cursor: pointer;
  }
}
</style>
