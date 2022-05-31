<template>
  <div class="login-view">
    <Slider class="sliderr" />
    <Login />
  </div>
</template>

<script>
import Slider from "../components/Slider/Slider.vue";
import Login from "../components/Login/Login.vue";

export default {
  name: "LoginView",
  components: {
    Slider,
    Login,
  },
};
</script>
<style lang="scss" scoped>
.login-view {
  display: flex;
  align-items: center;
  height: 100vh;
  @media (max-width: 767px) {
    .sliderr {
      display: none;
    }
  }
}
</style>
