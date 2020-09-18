<template>
  <q-layout
    v-scrollanimation
    class="bg-image"
    v-cloak
  >
    <div class="blur">
      <q-page-container>
        <q-page class="flex flex-center">
          <!-- <div class="row">
            <h6>O cuidado com seu pet, sem sair de casa!</h6>
          </div>
          <div class="row">
            <h3>Veterinário em Casa</h3>
          </div> -->
          <!-- <br> -->
          <!-- <div class="downArrow bounce">
            <img
              width="40"
              height="40"
              alt=""
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
            />
          </div> -->
          <div class="fit row wrap justify-center items-start content-start">
            <h6>O cuidado com seu pet, sem sair de casa!</h6>
          </div>
          <div class="fit row wrap justify-center items-start content-start">
            <h3>Veterinário em Casa</h3>
          </div>
          <div class="fit row wrap justify-center items-center content-center">
            <Btn />
          </div>
          <div class="fit row wrap justify-center items-center content-center">
            <div class="mouse"></div>
          </div>
          <div class="fit row wrap justify-center items-center content-center">
            <p>Scroll</p>
            <!-- <p>Scroll</p> -->
          </div>
          <!-- <div class="mouse"></div>
          <p>Scroll</p> -->
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
/* .downArrow {
  position: fixed;
  bottom: 5%;
  left: 50%;
}
.bounce {
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
} */

.blur {
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
  backdrop-filter: blur(3px);
}

.bg-image {
  background-image: url("../../assets/img/manu/manu1.jpeg");
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
  /* transform: translateY(100vw); */
  -webkit-filter: blur(5px);
  filter: blur(5px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  background-position: top;
  -webkit-filter: blur(0px);
  filter: blur(0px);
  /* transform: translateY(0px); */
}
</style>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Cabin);
p {
  position: absolute;
  top: 96%;
  font-size: 10px;
  /* margin-top: 50px; */
  font-family: "Cabin", sans-serif;
  letter-spacing: 6px;
  text-indent: 12px;
  color: #fff;
  animation: colorText 10s ease-out infinite, nudgeText 10s ease-out infinite;
  /* text-decoration: none; */
  /* text-transform: uppercase; */
  text-shadow: 0px 2px 3px #333;
}
.mouse {
  opacity: 0.5;
  position: absolute;
  top: 90%;
  /* right: 50vw; */
  background: #fff
    linear-gradient(transparent 0%, transparent 50%, #fff 50%, #fff 100%);
  /* position: relative; */
  width: 26px;
  height: 44px;
  background-size: 50% 50%;
  border-radius: 100px;
  background-size: 225%;
  animation: colorSlide 10s linear infinite, nudgeMouse 10s ease-out infinite;
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
  background-color: #ff49ff;
  border-radius: 100px;
}
.mouse:after {
  background-color: #fff;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  animation: trackBallSlide 5s linear infinite;
}
@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    /* background-color: #4e5559; */
  }
  29.99% {
    /* background-color: #fff; */
    /* background-position: 0% 0%; */
  }
  30% {
    /* background-color: #4e5559; */
    /* background-position: 0% 100%; */
  }
  50% {
    /* background-position: 0% 0%; */
  }
  51% {
    /* background-color: #4e5559; */
  }
  59.99% {
    /* background-color: #fff; */
    /* background-position: 0% 0%; */
  }
  60% {
    /* background-color: #4e5559; */
    /* background-position: 0% 100%; */
  }
  80% {
    /* background-position: 0% 0%; */
  }
  81% {
    /* background-color: #4e5559; */
  }
  89.99%,
  100% {
    /* background-color: #fff; */
  }
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
}
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
}
</style>
