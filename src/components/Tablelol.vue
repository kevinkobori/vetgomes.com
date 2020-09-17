<template>
  <div class='container'>
    <div class='fade-in full-width' />
    <div class='fade-in full-width' />
    <div class='half-width fade-in' />
    <div class='half-width fade-in' />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  setup () {
    var fadeInElements = []
    const handleScroll = (evt) => {
      for (var i = 0; i < fadeInElements.length; i++) {
        var elem = fadeInElements[i]
      }
    }
    const isElemVisible = (el) => {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top + 200 // 200 = buffer
      var elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    }
    for (var i = 0; i < fadeInElements.length; i++) {
      var elem = fadeInElements[i]
      if (isElemVisible(elem)) {
        elem.style.opacity = '1'
        elem.style.transform = 'scale(1)'
        fadeInElements.splice(i, 1) // only allow it to run once
      }
    }
    Mounted(() => {
      fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
      document.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    // onUnmounted(() => {
    //   document.removeEventListener('scroll', handleScroll)
    // })
  }
}
</script>

<style>
.container {
  width: 80%;
  min-width: 450px;
  margin: 0 auto;
}

.fade-in {
  background-color: #2ecc71;
  height: 500px;
  margin-bottom: 50px;
  opacity: 0;
  transition: 0.3s all ease-out;
  transform: scale(0.8);
  box-sizing: border-box;
  padding: 20px;
  display: inline-block;
}
.full-width {
  width: 100%;
}

.half-width {
  width: 47.5%;
}

.half-width:nth-of-type(2n + 1) {
  margin-right: 2.5%;
}

.half-width:nth-of-type(2n) {
  margin-left: 2.5%;
}
</style>
