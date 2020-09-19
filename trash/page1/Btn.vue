<template>
  <a
    v-scrollanimation
    href="#"
  >
    <span>Serviços</span>
    <div class="liquid"></div>
  </a>
</template>

<script>
export default {

}
</script>

<style scoped>
.before-enter {
  opacity: 0;
  position: absolute;
  top: 80%;
  height: 0px;
  padding: 0px 40px;
  /* position: bottom; */
  /* transform: translateY(100px); */
  -webkit-filter: blur(5px);
  filter: blur(5px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  position: absolute;
  top: 60%;
  height: 65px;
  padding: 20px 40px;
  /* background-position: top; */
  -webkit-filter: blur(0px);
  filter: blur(0px);
  /* transform: translateY(0px); */
}
/*
@keyframes colorText {
  21% {
    color: #4e5559;
  }
  30% {
    color: #fff;
  }
  51% {
    color: #4e5559;
  }
  60% {
    color: #fff;
  }
  81% {
    color: #4e5559;
  }
  90% {
    color: #fff;
  }
} */

/* @keyframes colorText {
  21% {
    color: #4e5559;
  }
  30% {
    color: #fff;
  }
  51% {
    color: #4e5559;
  }
  60% {
    color: #fff;
  }
  81% {
    color: #4e5559;
  }
  90% {
    color: #fff;
  }
}

@keyframes nudgeText {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(2px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(2px);
  }
  90% {
    transform: translateY(0);
  }
} */

@keyframes boxShadow {
  21% {
    /* box-shadow: inset 0 0 50px rgb(255, 0, 0); */
  }
  30% {
    /* box-shadow: inset 0 0 50px rgb(0, 0, 0); */
  }
  51% {
    /* box-shadow: inset 0 0 50px rgb(255, 0, 0); */
  }
  60% {
    /* box-shadow: inset 0 0 50px rgb(0, 0, 0); */
  }
  81% {
    /* box-shadow: inset 0 0 50px rgb(255, 0, 0); */
  }
  90% {
    /* box-shadow: inset 0 0 50px rgb(0, 0, 0); */
  }
}

a {
  /* position: relative; */
  /* padding: 20px 40px; */
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  overflow: hidden;
  border-radius: 40px;
}

a span {
  animation: colorText 10s ease-out infinite, nudgeText 10s ease-out infinite;
  position: relative;
  color: #000;
  /* text-shadow: 0px 1px 3px #edaabc; */
  font-size: 15px;
  font-family: Arial;
  letter-spacing: 7px;
  z-index: 1;
}
a:hover {
  animation: rotate 0.7s ease-in-out both;
  /* color: #fff; */
}

a span:hover {
  animation: storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
  color: #fff;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}

a .liquid {
  position: absolute;
  top: -50px;
  left: 0;
  width: 200px;
  height: 200px;
  background: #edaabc;
  animation: boxShadow 10s ease-out infinite;
  /* box-shadow: inset 0 0 50px rgb(255, 0, 0); */
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
  /* background: #e0d0d1; */
}

a .liquid::before {
  border-radius: 45%;
  background: #e0d0d1;
  animation: animate 5s linear infinite;
}

a .liquid::after {
  border-radius: 40%;
  background: #cce7fc;
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
