<template>
  <div class="wrapper">
    <Shape />
    <h2>404 - Page Not Found</h2>
    <p>Sorry, that page doesn't exist, What would you like to do?</p>
    <button @click="returnHome">Return To Home Page</button>
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
.wrapper {
  padding: 100px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    color: $main-color;
    margin: 80px 0px 20px;
  }
  p {
    color: rgb(87, 99, 159);
    margin-bottom: 40px;
  }
  button {
    @include btn(10px, 15px);
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
