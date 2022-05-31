<template>
  <div class="shape">
    <div class="half-circule">
      <!-- Start Of Pyramids -->
      <div class="triangles">
        <div class="triangle"></div>
        <div class="triangle2"></div>
        <div class="triangle3"></div>
      </div>
      <!-- End Of Pyramids -->
      <!-- Start Of Sun -->
      <div class="sun"></div>
      <!-- End Of Sun -->
      <!-- Start Of Cloud -->
      <div class="cloud-holder">
        <div class="cloud"></div>
      </div>
      <div class="cloud-holder2">
        <div class="cloud2"></div>
      </div>
      <div class="cloud-holder3">
        <div class="cloud3"></div>
      </div>
      <div class="cloud-holder4">
        <div class="cloud4"></div>
      </div>
      <!-- End Of Cloud -->
      <!-- Start Of Trees -->
      <div class="tree-holder">
        <div class="tree">
          <div class="inside"></div>
        </div>
        <div class="bottom-circule"></div>
      </div>
      <div class="tree-holder2">
        <div class="tree">
          <div class="inside"></div>
        </div>
        <div class="bottom-circule"></div>
      </div>
      <div class="tree-holder3">
        <div class="tree">
          <div class="inside"></div>
        </div>
        <div class="bottom-circule"></div>
      </div>
      <div class="tree-holder4">
        <div class="tree">
          <div class="inside"></div>
        </div>
        <div class="bottom-circule"></div>
      </div>
      <div class="tree-holder5">
        <div class="tree">
          <div class="inside"></div>
        </div>
        <div class="bottom-circule"></div>
        <!-- End Of Trees -->
      </div>
      <!-- Start Of Birds -->
      <div class="bird-holder">
        <div class="bird"></div>
      </div>
      <div class="bird-holder2">
        <div class="bird"></div>
      </div>
      <div class="bird-holder3">
        <div class="bird"></div>
      </div>
      <div class="bird-holder4">
        <div class="bird"></div>
      </div>
      <div class="bird-holder5">
        <div class="bird"></div>
      </div>
      <!-- End Of Birds -->
      <!-- Start Of Bulb -->
      <div class="bulb-holder">
        <Bulb />
      </div>
      <!-- End Of Bulb -->
    </div>
    <div class="road1"></div>
    <div class="road2"></div>
    <div class="road3"></div>
  </div>
</template>

<script>
import Bulb from "./Bulb.vue";
export default {
  components: { Bulb },
};
</script>

<style lang="scss" scoped>
.shape {
  width: 400px;
  // Start Of Half Circle
  .half-circule {
    @include halfCircle(400px, 200px, "top");
    display: flex;
    background-color: rgba(238, 238, 238, 0.358);
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      background-color: $dark-grey;
      left: 0;
      bottom: 0;
      z-index: 10000;
    }
    // Start Of Pyramids
    .triangles {
      position: relative;
      align-self: flex-end;
      display: flex;
      align-items: flex-end;
      width: 400px;
      &::after {
        content: "";
        position: absolute;
        border-bottom: 90px solid #f1f5f8;
        border-right: 120px solid transparent;
        bottom: 1px;
        right: 110px;
        z-index: 10000;
      }
      .triangle {
        @include triangle(76px, 74px);
        z-index: 999;
      }
      .triangle2 {
        @include triangle(120px, 118px);
        transform: translateX(-100px);
      }
      .triangle3 {
        @include triangle(94px, 92px);
        transform: translateX(-200px);
        z-index: 5;
      }
    }
    // End Of Pyramids
    // Start Of Sun
    .sun {
      @include circle(140px);
      background-color: #ebf2fa;
      position: absolute;
      bottom: 1px;
      left: 60px;
      z-index: -1;
    }
    // End Of Sun
    // Start Of Clouds
    .cloud-holder {
      position: absolute;
      top: 100px;
      left: 40px;
      z-index: 111;
      .cloud {
        @include cloud(0.6);
      }
    }
    .cloud-holder2 {
      position: absolute;
      top: 60px;
      left: 120px;
      z-index: 111;
      .cloud2 {
        @include cloud(0.9);
      }
    }
    .cloud-holder3 {
      top: 40px;
      left: 200px;
      position: absolute;
      .cloud3 {
        @include cloud(1);
      }
    }
    .cloud-holder4 {
      top: 100px;
      right: 40px;
      position: absolute;
      .cloud4 {
        @include cloud(0.8);
      }
    }
    // End Of Clouds
    // Start Of Trees
    .tree-holder {
      position: absolute;
      bottom: -10px;
      z-index: 1111111;
      transform: scale(0.6);
      .tree {
        @include tree;
      }
      .bottom-circule {
        @include halfCircle(44px, 21px, "bottom");
        border: 1px solid $dark-grey;
        border-top: none;
        position: relative;
        background-color: white;
        left: 0px;
        top: -2px;
      }
    }
    .tree-holder2 {
      position: absolute;
      bottom: -10px;
      left: 80px;
      z-index: 1111111;
      transform: scale(0.6);
      .tree {
        @include tree;
      }
      .bottom-circule {
        @include halfCircle(44px, 21px, "bottom");
        border: 1px solid $dark-grey;
        border-top: none;
        position: relative;
        background-color: white;
        left: 0px;
        top: -2px;
      }
    }
    .tree-holder3 {
      position: absolute;
      bottom: -10px;
      left: 160px;
      z-index: 1111111;
      transform: scale(0.6);
      .tree {
        @include tree;
      }
      .bottom-circule {
        @include halfCircle(44px, 21px, "bottom");
        border: 1px solid $dark-grey;
        border-top: none;
        position: relative;
        background-color: white;
        left: 0px;
        top: -2px;
      }
    }
    .tree-holder4 {
      position: absolute;
      bottom: -10px;
      left: 240px;
      z-index: 1111111;
      transform: scale(0.6);
      .tree {
        @include tree;
      }
      .bottom-circule {
        @include halfCircle(44px, 21px, "bottom");
        border: 1px solid $dark-grey;
        border-top: none;
        position: relative;
        background-color: white;
        left: 0px;
        top: -2px;
      }
    }
    .tree-holder5 {
      position: absolute;
      bottom: -10px;
      left: 300px;
      z-index: 1111111;
      transform: scale(0.6);
      .tree {
        @include tree;
      }
      .bottom-circule {
        @include halfCircle(44px, 21px, "bottom");
        border: 1px solid $dark-grey;
        border-top: none;
        position: relative;
        background-color: white;
        left: 0px;
        top: -2px;
      }
    }
    // End Of Trees
    // Start Of Birds
    .bird-holder {
      position: absolute;
      top: 120px;
      left: 40px;
      z-index: 111111111;
      .bird {
        @include bird;
      }
    }
    .bird-holder2 {
      position: absolute;
      top: 80px;
      left: 90px;
      .bird {
        @include bird;
      }
    }
    .bird-holder3 {
      top: 100px;
      left: 120px;
      position: absolute;
      .bird {
        @include bird;
      }
    }
    .bird-holder4 {
      top: 70px;
      left: 220px;
      position: absolute;
      .bird {
        @include bird;
      }
    }
    .bird-holder5 {
      top: 100px;
      left: 350px;
      position: absolute;
      .bird {
        @include bird;
      }
    }
    // End Of Birds
    // Start Of Bulb
    .bulb-holder {
      position: absolute;
      transform: scale(0.6);
      top: 0px;
      right: 50px;
      z-index: 999999999;
    }
    // End Of Bulb
  }
  //End Of Half Circule
  // Start Of Roads
  .road1 {
    @include road1;
    margin-top: 10px;
  }
  .road2 {
    margin-top: 10px;
    @include road2;
  }
  // End Of Roads
}
</style>
