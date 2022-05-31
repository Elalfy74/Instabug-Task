<template>
  <div class="slide-item">
    <img :src="slide.img" alt="slide_img" />
    <h2>{{ slide.title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["slide"],
};
</script>

<style scoped lang="scss">
.slide-item {
  min-width: 50vw;
  color: white;
  img {
    max-height: 100%;
    max-width: 90%;
  }
  h2 {
    margin: 30px auto 0px;
    font-weight: 400;
    width: 80%;
  }
}
</style>
