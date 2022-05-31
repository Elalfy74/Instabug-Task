<template>
  <div class="welcome">
    <h1>This is Welcome Page</h1>
    <button @click="onLoggedOut">Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  inject: ["onLoggedOut"],
};
</script>

<style scoped lang="scss">
.welcome {
  text-align: center;
  margin-top: 100px;
  h1 {
    color: cadetblue;
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
