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
