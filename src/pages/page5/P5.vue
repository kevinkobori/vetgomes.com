<template>
  <q-layout
    v-scrollanimation
    class="bg-image"
    v-cloak
  >
    <div class="blur">
      <q-page-container>
        <q-page class="flex flex-center">
          <div class="downArrow bounce">
            <img
              width="40"
              height="40"
              alt=""
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
            />
          </div>
          <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div>
        </q-page>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "P1",
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  }
}
</script>

<style scoped>
.downArrow {
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
}
/* .demo {
  font-family: "Raleway", sans-serif;
  color: #fff;
  display: block;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
}
.demo a {
  font-family: "Raleway", sans-serif;
  color: #2ecc71;
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
/*
.box {
  position: absolute;
  top: 60%;
  left: 51vw;
  transform: translate(-50%, -50%);
  text-shadow: 0px 1px 3px #d6a0d3;
  box-shadow: inset 0 0 1em rgba(221, 0, 192, 0.5),
    0 0 1em rgba(221, 0, 192, 0.5);
  border: rgb(243, 64, 243, 0.7) solid 1px;
  border-radius: 25px 25px 25px 25px;
}

.btn:link,
.btn:visited {
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  top: 0;
  left: 0;
  padding: 20px 40px;
  border-radius: 100px;
  display: inline-block;
  transition: all 0.5s;
}

.btn-white {
  background: #fff;
  color: #000;
}

.btn:hover {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  text-shadow: 0px 3px 4px #e95395;
  transform: translateY(-3px);
}

.btn:active {
  text-shadow: 0px 3px 4px #e95395;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.btn-bottom-animation-1 {
  animation: comeFromBottom 1s ease-out 0.8s;
} */
/*
.btn::after {
  content: "";
  text-decoration: none;
  text-transform: uppercase;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 100px;
  display: inline-block;
  z-index: -1;
  transition: all 0.5s;
}

.btn-white::after {
  background: #fff;
}

.btn-animation-1:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@keyframes comeFromBottom {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
} */
</style>

<style>
body {
  background: #323641;
}
.letter-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.animated-mail {
  position: absolute;
  height: 150px;
  width: 200px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  transition: 0.4s;
}
.animated-mail .body {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100px 200px;
  border-color: transparent transparent #e95f55 transparent;
  z-index: 2;
}
.animated-mail .top-fold {
  position: absolute;
  top: 50px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 100px 0 100px;
  -webkit-transform-origin: 50% 0%;
  -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  -moz-transform-origin: 50% 0%;
  -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  transform-origin: 50% 0%;
  transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  border-color: #cf4a43 transparent transparent transparent;
  z-index: 2;
}
.animated-mail .back-fold {
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 100px;
  background: #cf4a43;
  z-index: 0;
}
.animated-mail .left-fold {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 50px 100px;
  border-color: transparent transparent transparent #e15349;
  z-index: 2;
}
.animated-mail .letter {
  left: 20px;
  bottom: 0px;
  position: absolute;
  width: 160px;
  height: 60px;
  background: white;
  z-index: 1;
  overflow: hidden;
  -webkit-transition: 0.4s 0.2s;
  -moz-transition: 0.4s 0.2s;
  transition: 0.4s 0.2s;
}
.animated-mail .letter .letter-border {
  height: 10px;
  width: 100%;
  background: repeating-linear-gradient(
    -45deg,
    #cb5a5e,
    #cb5a5e 8px,
    transparent 8px,
    transparent 18px
  );
}
.animated-mail .letter .letter-title {
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 40%;
  background: #cb5a5e;
}
.animated-mail .letter .letter-context {
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 20%;
  background: #cb5a5e;
}
.animated-mail .letter .letter-stamp {
  margin-top: 30px;
  margin-left: 120px;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background: #cb5a5e;
  opacity: 0.3;
}
.shadow {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 400px;
  height: 30px;
  transition: 0.4s;
  transform: translateX(-50%);
  -webkit-transition: 0.4s;
  -webkit-transform: translateX(-50%);
  -moz-transition: 0.4s;
  -moz-transform: translateX(-50%);
  border-radius: 100%;
  background: radial-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
}
.letter-image:hover .animated-mail {
  transform: translateY(50px);
  -webkit-transform: translateY(50px);
  -moz-transform: translateY(50px);
}
.letter-image:hover .animated-mail .top-fold {
  transition: transform 0.4s, z-index 0.2s;
  transform: rotateX(180deg);
  -webkit-transition: transform 0.4s, z-index 0.2s;
  -webkit-transform: rotateX(180deg);
  -moz-transition: transform 0.4s, z-index 0.2s;
  -moz-transform: rotateX(180deg);
  z-index: 0;
}
.letter-image:hover .animated-mail .letter {
  height: 180px;
}
.letter-image:hover .shadow {
  width: 250px;
}
</style>
