<template>
  <div>
    <!-- <h1>404 Page Not Found</h1>
    <button @click="returnHome">Return To Home Page</button> -->
    <Shape />
  </div>
</template>

<script>
import Shape from "../components/Shape.vue";
export default {
  components: { Shape },
  methods: {
    returnHome() {
      this.$router.push({ name: "Welcome" });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 100px auto;
  text-align: center;
  h1 {
    color: $main-color;
    margin-bottom: 30px;
  }
  button {
    @include btn(15px, 20px);
    @include rounded;
    background-color: $main-color;
    color: white;
    font-size: 22px;
    &:hover {
      background-color: $main-color-alt;
    }
  }
}
</style>
