<template>
  <q-layout
    v-scrollanimation
    class="bg-image"
    v-cloak
  >
    <div class="blur">
      <q-page-container>
        <q-page class="flex flex-center">
          <div
            v-scrollanimation
            class="fit row wrap justify-center items-center content-center"
          >
            <div>
              <h1 class="heading heading--stroke-shadow">Atendimento a domicílio</h1>
              <p class="heading heading--stroke-shadow2">Seu pet <strong>sendo cuidado</strong> no conforto de
                <strong>sua casa</strong>.
              </p>
            </div>
          </div>
          <Btn>
          </Btn>
          <div class="mouse"></div>
        </q-page>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import Btn from './Btn'

export default {
  name: "P1",
  components: {
    Btn
  }
}
</script>

<style scoped>
.blur {
  background: rgba(197, 0, 148, 0.2);
  /* background: rgba(0, 0, 0, 0.3); */
  backdrop-filter: blur(2px);
}

.bg-image {
  background-image: url("../../assets/img/manu/manu1.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

[v-cloak] {
  display: none !important;
}

.before-enter {
  opacity: 0;
  background-position: bottom;
  -webkit-filter: blur(5px);
  filter: blur(5px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  background-position: top;
  -webkit-filter: blur(0px);
  filter: blur(0px);
}
</style>

<style scoped>
.mouse {
  opacity: 0.5;
  position: absolute;
  top: 90%;
  background: #fff
    linear-gradient(transparent 0%, transparent 50%, #fff 50%, #fff 100%);
  width: 26px;
  height: 44px;
  background-size: 50% 50%;
  border-radius: 100px;
  background-size: 225%;
  animation: nudgeMouse 10s ease-out infinite;
}
.mouse:before,
.mouse:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.mouse:before {
  width: 23px;
  height: 41px;
  background-color: #fa5bff;
  border-radius: 100px;
}
.mouse:after {
  background-color: #fff;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  animation: trackBallSlide 10s linear infinite;
}

@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(2.5px);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(20px);
  }
  15%,
  19% {
    opacity: 0;
    transform: scale(0.4) translateY(-10px);
  }
  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(2.5px);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(20px);
  }
  45%,
  49% {
    opacity: 0;
    transform: scale(0.4) translateY(-10px);
  }
  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(2.5px);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(20px);
  }
  75%,
  79% {
    opacity: 0;
    transform: scale(0.4) translateY(-10px);
  }
  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-10px);
  }
}
@keyframes nudgeMouse {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(8px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(8px);
  }
  90% {
    transform: translateY(0);
  }
}
</style>


<style scoped>
/* a {
  text-decoration: none;
  color: #9ca0b1;
}
.wrapper {
  text-align: center;
}
.wrapper h1 {
  color: #fff;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  background: linear-gradient(to right, #ff5bdb 10%, #5bfaff 50%, #ff5bdb 80%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5.5s linear infinite;
  display: inline-block;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
} */
</style>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Dancing+Script);
@import url(https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Pacifico);
@import url(https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Merienda+One&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Codystar&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Sarina&display=swap);

h1,
p {
  font-weight: 700;
  /* font-family: "Petit Formal Script", cursive; */
  font-family: "Dancing Script", cursive;
  /* font-family: "Codystar", cursive; */
  /* font-family: "Cinzel Decorative", cursive; */
  /* font-family: "Mansalva", cursive; */
  /* font-family: "Sarina", cursive; */
  /* font-family: "Gloria Hallelujah", cursive; */
  /* font-family: "Leckerli One", cursive; */
  /* font-family: "Merienda One", cursive; */
  /* font-family: "Pacifico", cursive; */
  margin: 0 0 0.5rem;
}
h1 {
  font-size: 4rem;
  /* position: relative;
  color: #fff;
  background: linear-gradient(to right, #f3bd3a 10%, #5bffd6 50%, #f3bd3a 80%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5.5s linear infinite;
  display: inline-block;
  font-size: 4rem;
  text-shadow: 2px -2px 1px #fa5bff; */
}
p {
  /* color: #f3bd3a; */
  font-size: 2rem;
}

strong::after {
  content: "";
  position: absolute;
  z-index: -1;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

p > strong::after {
  bottom: -0.2rem;
  height: 1rem;
  left: -0.25rem;
  right: -0.25rem;
}

p strong {
  position: relative;
  display: inline-block;
  /* color: #f3bd3a; */
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>

<style scoped>
/* .heading {
  font-size: 6rem;
  letter-spacing: 6px;
  margin: 0;
} */
/* .heading--stroke {
  -webkit-text-stroke-width: 2px;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-color: #0d1b1e;
  -moz-text-stroke-color: #0d1b1e;
  color: transparent;
} */
/* .heading--shadow {
  text-shadow: 6px 6px #2dc7ff;
} */
.heading--stroke-shadow {
  color: #f2cee6;
  text-shadow: -1px 0 #0d1b1e, 0 -1px #0d1b1e, 1.5px 0 #0d1b1e, 0 1.5px #0d1b1e,
    1.5px 1.5px #0d1b1e, -1px -1px #0d1b1e, -1px 1.5px #0d1b1e, 4px 4px #f3bd3a;
}
.heading--stroke-shadow2 {
  color: #f2cee6;
  text-shadow: -1px 0 #0d1b1e, 0 -1px #0d1b1e, 1.5px 0 #0d1b1e, 0 1.5px #0d1b1e,
    1.5px 1.5px #0d1b1e, -1px -1px #0d1b1e, -1px 1.5px #0d1b1e,
    1.5px -1px #0d1b1e;
}
/* .heading--halftone {
  position: relative;
} */
/* .heading--halftone:after {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAHElEQVQYV2NUVFT8f//+fUYGBgYGMAEDcA5IBQCKJQVmn76DhAAAAABJRU5ErkJggg==")
    repeat;
  -webkit-text-stroke-width: 0;
  -moz-text-stroke-width: 0;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 6rem;
  letter-spacing: 6px;
  left: calc(50% + 6px);
  top: calc(50% + 6px);
  content: "Atendimento a domicílio";
  z-index: -1;
  position: absolute;
  transform: translate(-50%, -50%);
} */
/* .heading--halftone-color:after {
  background-color: #2dc7ff;
} */
/* .info {
  padding: 1rem 0;
} */
</style>
