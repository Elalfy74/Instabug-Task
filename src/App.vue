<template>
  <router-view />
</template>

<script>
import { users } from "./data/users";

export default {
  data() {
    return {
      users: users,
      loginError: "",
    };
  },

  provide() {
    const loginError = {};
    Object.defineProperty(loginError, "info", {
      enumerable: true,
      get: () => this.loginError,
    });
    return {
      loginError,
      onLoggedIn: this.onLoggedIn,
      onLoggedOut: this.onLoggedOut,
    };
  },

  methods: {
    onLoggedIn(InputValues) {
      const user = this.users.find(
        (user) =>
          user.email === InputValues.email &&
          user.password === InputValues.password
      );

      if (user) {
        localStorage.setItem("isLoggedIn", true);
        this.loginError = "";
        this.$router.push({ name: "Welcome" });
      } else {
        this.loginError = "Your email and/or password are incorrect";
      }
    },

    onLoggedOut() {
      localStorage.removeItem("isLoggedIn");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style></style>
