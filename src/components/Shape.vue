<template>
  <div class="half-circule">
    <div class="triangles">
      <div class="triangle"></div>
      <div class="triangle2"></div>
      <div class="triangle3"></div>
    </div>
    <div class="sun"></div>
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
    <div class="tree-holder">
      <div class="tree">
        <div class="inside"></div>
      </div>
    </div>
    <div class="tree-holder2">
      <div class="tree">
        <div class="inside"></div>
      </div>
    </div>
    <div class="tree-holder3">
      <div class="tree">
        <div class="inside"></div>
      </div>
    </div>
    <div class="tree-holder4">
      <div class="tree">
        <div class="inside"></div>
      </div>
    </div>
    <div class="tree-holder5">
      <div class="tree">
        <div class="inside"></div>
      </div>
    </div>
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
    <div class="bulb-holder">
      <Bulb />
    </div>
  </div>
</template>

<script>
import Bulb from "./Bulb.vue";
export default {
  components: { Bulb },
};
</script>

<style lang="scss" scoped>
.half-circule {
  @include halfCircle(600px, 300px);
  display: flex;
  background-color: rgba(238, 238, 238, 0.358);
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: black;
    left: 0;
    bottom: 0;
    z-index: 10000;
  }
  .triangles {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      border-bottom: 100px solid $triangle-color;
      border-right: 100px solid transparent;
      bottom: 1px;
      right: 392px;
      z-index: 10000;
    }
    display: flex;
    align-items: flex-end;
    .triangle {
      @include triangle(100px, 98px);
      z-index: 999;
    }
    .triangle2 {
      @include triangle(150px, 149px);
      transform: translateX(-120px);
      z-index: 5;
    }
    .triangle3 {
      @include triangle(125px, 123px);
      transform: translateX(-240px);
    }
  }
  .sun {
    @include circle(170px);
    background-color: #ebf2fa;
    position: absolute;
    bottom: 1px;
    left: 60px;
  }
  .tree-holder {
    position: absolute;
    bottom: 12px;
    .tree {
      @include tree;
    }
  }
  .tree-holder2 {
    position: absolute;
    bottom: 12px;
    left: 140px;
    .tree {
      @include tree;
    }
  }
  .tree-holder3 {
    position: absolute;
    bottom: 12px;
    left: 240px;
    .tree {
      @include tree;
    }
  }
  .tree-holder4 {
    position: absolute;
    bottom: 12px;
    left: 300px;
    .tree {
      @include tree;
    }
  }
  .tree-holder5 {
    position: absolute;
    bottom: 12px;
    left: 400px;
    .tree {
      @include tree;
    }
  }
  .cloud-holder {
    top: 180px;
    left: 40px;
    position: absolute;
    .cloud {
      @include cloud(0.6);
    }
  }
  .cloud-holder2 {
    top: 140px;
    left: 160px;
    position: absolute;
    .cloud2 {
      @include cloud(1);
    }
  }
  .cloud-holder3 {
    top: 100px;
    left: 270px;
    position: absolute;
    .cloud3 {
      @include cloud(1.2);
    }
  }
  .cloud-holder4 {
    top: 150px;
    right: 40px;
    position: absolute;
    .cloud4 {
      @include cloud(1);
    }
  }
  .bird-holder {
    position: absolute;
    top: 180px;
    left: 100px;
    .bird {
      @include bird;
    }
  }
  .bird-holder2 {
    position: absolute;
    top: 160px;
    left: 140px;
    .bird {
      @include bird;
    }
  }
  .bird-holder3 {
    top: 180px;
    left: 160px;
    position: absolute;
    .bird {
      @include bird;
    }
  }
  .bird-holder4 {
    top: 170px;
    left: 350px;
    position: absolute;
    .bird {
      @include bird;
    }
  }
  .bird-holder5 {
    top: 190px;
    left: 450px;
    position: absolute;
    .bird {
      @include bird;
    }
  }
  .bulb-holder {
    position: absolute;
    top: -180px;
    right: -150px;
    z-index: 999999999;
  }
}
</style>
