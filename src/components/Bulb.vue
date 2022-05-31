<template>
  <div class="box">
    <div id="circle">
      <div id="shine"></div>
    </div>

    <div id="trapezoid"></div>

    <div id="bottom1"></div>
    <div id="bottom2"></div>
    <div id="bottom3"></div>

    <div id="halfCircle"></div>

    <div class="drop" id="left"></div>
    <div class="drop" id="right"></div>

    <div id="wire"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  display: block;
  width: 600px;
  height: 600px;
  transform: scale(0.2);
}

#circle {
  position: absolute;
  width: 40%;
  height: 40%;
  background: white;
  border-top: 1px solid $dark-grey;
  border-right: 1px solid $dark-grey;
  border-left: 1px solid $dark-grey;
  top: 20%;
  left: 30%;
  margin: 0 auto;
  border-radius: 50%;
}

#trapezoid {
  border-top: 180px solid #555;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  position: absolute;
  width: 40%;
  left: 30%;
  top: 42%;
}
#trapezoid::before {
  position: absolute;
  content: "";
  border-top: 180px solid white;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  position: absolute;
  width: 100%;
  @include centerHPosition;
  bottom: 1px;
  z-index: 99999;
}
#bottom1 {
  position: absolute;
  height: 5%;
  width: 25%;
  background: grey;
  top: 72%;
  left: 37.5%;
  z-index: 1;
}

#bottom1:before {
  content: "";
  height: 100%;
  width: 20%;
  background: grey;
  display: block;
  position: absolute;
  border-radius: 50%;
  left: -8%;
}

#bottom1:after {
  content: "";
  height: 100%;
  width: 20%;
  background: grey;
  display: block;
  position: absolute;
  border-radius: 50%;
  right: -8%;
}

#bottom2 {
  position: absolute;
  height: 5%;
  width: 22%;
  background: grey;
  top: 78%;
  left: 39%;
}

#bottom2:before {
  content: "";
  height: 100%;
  width: 20%;
  background: grey;
  display: block;
  position: absolute;
  border-radius: 50%;
  left: -8%;
}

#bottom2:after {
  content: "";
  height: 100%;
  width: 20%;
  background: grey;
  display: block;
  position: absolute;
  border-radius: 50%;
  right: -8%;
}

#bottom3 {
  position: absolute;
  height: 5%;
  width: 18%;
  background: grey;
  top: 84%;
  left: 41%;
  z-index: 1;
}

#bottom3:before {
  content: "";
  height: 100%;
  width: 20%;
  background: grey;
  display: block;
  position: absolute;
  border-radius: 50%;
  left: -8%;
}

#bottom3:after {
  content: "";
  height: 100%;
  width: 20%;
  background: grey;
  display: block;
  position: absolute;
  border-radius: 50%;
  right: -8%;
}
</style>
