<template>
  <div id="q-app">
    <!-- <h1 class="bg-green"><br><br><br><br><br>{{v1}}</h1> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      // v1: null,
      // v2: null
    }
  },
  mounted () {
    this.$store.commit('window/updateWindowWidth', window.innerWidth)
    this.$store.commit('window/updateWindowHeight', window.innerHeight)
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      // this.width(window.innerWidth)
      // this.height(window.innerHeight)
      this.$store.commit('window/updateWindowWidth', window.innerWidth)
      this.$store.commit('window/updateWindowHeight', window.innerHeight)
    }
  }
  // watch: {
  //   width: {
  //     get () {
  //       return this.v1
  //     },
  //     set (val) {
  //       this.v1 = val
  //       this.$store.commit('window/updateWindowWidth', val)
  //     }
  //   },
  //   height: {
  //     get () {
  //       return this.v2
  //     },
  //     set (val) {
  //       this.v2 = val
  //       this.$store.commit('window/updateWindowHeight', val)
  //     }
  //   }
  // }
}
</script>

<style>
/* body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(85, 85, 85);
} */

.q-card {
  border-radius: 0px;
}

.img-mini-logo {
  height: 15px;
}

.logo {
  height: 16px;
}

.logo-mini {
  height: 18px;
}

.img-bg {
  height: 100vh;
}

.img-slide {
  /* height: 300px; */
  height: 50vw;
}

.img-slide-cardapio {
  /* height: 200px; */
  height: 30vw;
}
.img-section {
  height: 200px;
  /* height: 11vw; */
}

.footer-logo {
  height: 60px;
}

.rotate180 {
  transform: rotate(180deg);
}

.containerSizeTransition {
  transition: width 0.3s, height 0.3s;
}

.selectDisable {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-enter {
  -webkit-animation: moveFromRight 0.5s both ease;
  animation: moveFromRight 0.5s both ease;
}
.fade-leave-to,
.fade-leave-active {
  -webkit-animation: moveToLeft 1s both ease;
  animation: moveToLeft 1s both ease;
}

.layout-padding {
  padding: 1em 4em;
}
@media screen and (max-width: 600px) {
  .layout-padding {
    padding: 1.5em 0.5em;
  }
}
.menu-enter-active,
.scale-enter {
  -webkit-animation: moveFromLeftFade 0.9s ease both;
  animation: moveFromLeftFade 0.9s ease both;
}
.menu-leave-to,
.scale-leave-active {
  -webkit-animation: moveToLeft 0.9s ease both;
  animation: moveToLeft 0.9s ease both;
}

@-webkit-keyframes moveFromLeftFade {
  from {
    opacity: 0.3;
    -webkit-transform: translateX(-100%);
  }
}
@keyframes moveFromLeftFade {
  from {
    opacity: 0.3;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
@-webkit-keyframes moveToRight {
  from {
  }
  to {
    -webkit-transform: translateX(100%);
  }
}

@keyframes cartOut {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(1200px, 0px);
    animation-timing-function: ease-out;
  }
}
@-webkit-keyframes moveToLeft {
  from {
  }
  to {
    opacity: 0.5;
    -webkit-transform: translateX(-100%);
  }
}
@keyframes moveToLeft {
  from {
  }
  to {
    opacity: 0.5;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@-webkit-keyframes moveFromRight {
  from {
    opacity: 0.7;
    -webkit-transform: translateX(100%);
  }
}
@keyframes moveFromRight {
  from {
    opacity: 0.7;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
/*
  .drawer-closer .item-content {
    margin-left: 50px !important;
  }
  .drawer-content .list-label {
    line-height: 45px;
  }
  .drawer-content .item {
    height: 45px;
  }
  .router-link-active .item-primary{
    color: #027be3;
  }
  .q-picker-textfield .q-picker-textfield-label{
    color: inherit !important;
  }
  .label-success .q-picker-textfield-label {
    color: #4caf50 !important;
  }
  .label-error .q-picker-textfield-label {
    color: #f44336 !important;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
  .label-success .q-picker-textfield:after, .label-error .q-picker-textfield:after{
    content: "" !important;
  }

  canvas {
    width: 270px !important;
  }
  @media only screen and (min-width: 601px){
    .adv-form-one .timeline-badge {
      right: auto !important;
      left: auto !important;
    }
    .adv-form-one .timeline-content {
      margin-left: 3.9rem;
    }
    .adv-form-one .timeline-item {
      width: 100% !important;
    }
    .adv-form-one .timeline-title {
      text-align: inherit !important;
      margin-left: 3.9rem;
    }
    .timeline:before {
      left: 1.6rem;
    }
  }
  .adv-form-one .timeline-content .group .primary {
    display: none !important;
  }
  .underline {
    text-decoration: underline;
  } */
</style>
