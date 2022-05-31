<template>
  <div class="social-link" v-for="link in socialLinks" :key="link.id">
    <a
      :href="link"
      :style="{
        'background-color': link.bgColor,
        color: link.color,
        'border-color': link.border,
      }"
    >
      <img :src="link.logo" class="logo" />
      <p>{{ link.name }}</p>
    </a>
  </div>
</template>

<script>
import { socialLinks } from "../data/social-links";

export default {
  data() {
    return {
      socialLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
.social-link {
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    @include centering;
    @include rounded;
    width: 100%;
    height: 40px;
    position: relative;
    margin-bottom: 10px;
    border: 1px solid;
    .logo {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 10px;
    }
  }
}
</style>
