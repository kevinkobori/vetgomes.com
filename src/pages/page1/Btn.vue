<template>
  <a href="#">
    <span>Agendar</span>
    <div class="liquid"></div>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  /* opacity: 1; */
  position: relative;
  /* top: 60%;
  left: 42%; */
  padding: 20px 40px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  overflow: hidden;
  border-radius: 40px;
}

a span {
  position: relative;
  color: #212121;
  text-shadow: 0px 1px 3px #333;
  font-size: 17px;
  font-family: Arial;
  letter-spacing: 7px;
  z-index: 1;
}

a .liquid {
  position: absolute;
  top: -50px;
  left: 0;
  width: 200px;
  height: 200px;
  background: #ff49ff;
  box-shadow: inset 0 0 50px rgb(255, 0, 0);
  transition: 0.5s;
}

a .liquid::after,
a .liquid::before {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: rgb(0, 0, 0);
}

a .liquid::before {
  border-radius: 45%;
  background: rgb(0, 0, 0);
  animation: animate 5s linear infinite;
}

a .liquid::after {
  border-radius: 40%;
  background: #00ffff;
  animation: animate 15s linear infinite;
}

a:hover .liquid {
  top: -120px;
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
