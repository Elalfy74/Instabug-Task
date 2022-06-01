<template>
  <div class="welcome">
    <h2>Welcome {{ userEmail }}</h2>
    <button @click="onLoggedOut">Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userEmail: null,
    };
  },
  mounted() {
    this.userEmail = localStorage.getItem("userEmail");
  },
  inject: ["onLoggedOut"],
};
</script>

<style scoped lang="scss">
.welcome {
  padding: 100px 20px 0px;
  text-align: center;
  h2 {
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
