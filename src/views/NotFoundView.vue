<template>
  <div>
    <h1>404 Page Not Found</h1>
    <button @click="returnHome">Return To Home Page</button>
  </div>
</template>

<script>
export default {
  methods: {
    returnHome() {
      this.$router.push({ name: "Welcome" });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 100px;
  text-align: center;
  h1 {
    margin-bottom: 30px;
  }
  button {
    border: none;
    padding: 15px 20px;
    background-color: cadetblue;
    color: white;
    border-radius: 4px;
    font-size: 22px;
    cursor: pointer;
    &:hover {
      background-color: rgb(60, 97, 98);
    }
  }
}
</style>
