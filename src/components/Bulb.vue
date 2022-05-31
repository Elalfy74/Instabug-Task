<template>
  <div class="bulb">
    <div class="circle"></div>
    <div class="trapezoid"></div>
    <div class="bottom1"></div>
    <div class="bottom2"></div>
    <div class="bottom3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bulb {
  position: relative;
}
.circle {
  @include circle(62px);
  background-color: white;
  border: 1px solid $dark-grey;
}
.trapezoid {
  border-top: 56px solid $dark-grey;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-top: -20px;
  width: 95%;
  margin-left: 2px;
  position: relative;
}
.trapezoid::before {
  position: absolute;
  content: "";
  border-top: 56px solid white;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  width: 95%;
  @include centerHPosition;
  bottom: 1px;
  z-index: 99;
}
.bottom1 {
  position: absolute;
  width: 60%;
  @include centerHPosition;
  height: 10px;
  border-radius: 12px;
  bottom: 0px;
  z-index: 111;
  background: grey;
}

.bottom2 {
  position: absolute;
  width: 50%;
  @include centerHPosition;
  height: 10px;
  border-radius: 12px;
  bottom: -11px;
  z-index: 111;
  background: grey;
}

.bottom3 {
  position: absolute;
  width: 40%;
  @include centerHPosition;
  height: 10px;
  border-radius: 12px;
  bottom: -22px;
  z-index: 111;
  background: grey;
}
</style>
