<template>
  <div class="login-view">
    <Slider v-if="windowWidth > 767" />
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
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view {
  display: flex;
  align-items: center;
  height: 100vh;
  @media ($mobile-max) {
    padding-top: 40px;
    align-items: flex-start;
  }
}
</style>
