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
    changeSlideAutomatically() {
      setInterval(() => {
        if (this.current < 2) {
          this.current = this.current + 1;
        } else {
          this.current = 0;
        }
      }, 5000);
    },
    changSlide(value) {
      this.current = value;
    },
  },
  mounted() {
    this.changeSlideAutomatically();
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
  min-width: 50vw;
  @include centering;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: $main-color;
  text-align: center;
  .slider_wrapper {
    @include transformX(v-bind(cssVars));
    display: flex;
    align-items: center;
    width: 100%;
    transition: $main-transition;
  }
}
.slider-buttons {
  margin-top: 20px;
  span {
    @include circle(20px);
    display: inline-block;
    border: 2px solid white;
    margin-right: 20px;
    cursor: pointer;
    &.active {
      background-color: white;
    }
  }
}
</style>
