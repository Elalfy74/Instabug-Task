<template>
  <router-view />
</template>

<script>
import { users } from "./data/users";
import { validatePassword } from "./helper/validation";

export default {
  data() {
    return {
      users: users,
      loginError: "",
    };
  },

  provide() {
    // to make the childern listen to changes
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
    onLoggedIn(inputValues) {
      const emailName = inputValues.email.split("@")[0];
      const passwordIsValid =
        validatePassword(inputValues.password) &&
        !inputValues.password.includes(emailName);

      // check that the password is valid and doesn't contain the email name
      if (!passwordIsValid) {
        this.loginError = "Your email and/or password are incorrect";
        return;
      }

      const user = this.users.find(
        (user) =>
          user.email === inputValues.email.toLowerCase() &&
          user.password === inputValues.password
      );

      if (user) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userEmail", inputValues.email.toLowerCase());
        this.loginError = "";
        this.$router.push({ name: "Welcome", replace: true });
      } else {
        this.loginError = "Your email and/or password are incorrect";
      }
    },

    onLoggedOut() {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      this.$router.push({ name: "Login", replace: true });
    },
  },
};
</script>
<style></style>
