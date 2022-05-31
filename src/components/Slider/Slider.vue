<template>
  <div class="wrapper">
    <div class="slider_wrapper">
      <SliderItem v-for="slide in sliderItems" :key="slide.id" :slide="slide" />
    </div>
    <div class="slider-buttons">
      <span
        v-for="button in sliderItems"
        :key="button.id"
        :class="{ active: current === button.value }"
        @click="changSlide(button.value)"
      ></span>
    </div>
  </div>
</template>

<script>
import SliderItem from "./SliderItem.vue";
import { sliderItems as slideItemsData } from "../../data/slider";

export default {
  name: "Slider",
  components: {
    SliderItem,
  },
  data() {
    return {
      current: 0,
      sliderItems: slideItemsData,
    };
  },
  methods: {
    changSlide(value) {
      this.current = value;
    },
  },
  computed: {
    cssVars() {
      return this.current * -50 + "vw";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include centering;
  flex-direction: column;
  height: 100%;
  width: 50vw;
  overflow: hidden;
  background-color: $main-color;
  text-align: center;
  .slider_wrapper {
    @include tansform(v-bind(cssVars));
    display: flex;
    align-items: center;
    width: 100%;
    height: 80%;
    transition: $main-transition;
  }
}
.slider-buttons {
  margin-top: 20px;
  span {
    @include circule;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid white;
    margin-right: 20px;
    cursor: pointer;
    &.active {
      background-color: white;
    }
  }
}
</style>
