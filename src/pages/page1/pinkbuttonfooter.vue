<template>
  <div>
      <q-layout v-scrollanimation>
        <q-page-container>
      <q-page class="flex flex-center">
    <div class="artboard">
    <div class="button">
        <div class="links"><a class="fab fa-2x fa-twitter" target="_blank" href="https://twitter.com/akshaycodes"></a><a class="fab fa-2x fa-medium-m" target="_blank" href="https://medium.com/@akshaycodes"></a><a class="fab fa-2x fa-instagram" target="_blank" href="https://www.instagram.com/akshaycodes/"></a>
            <q-btn class="text-white" label="oi"/>
            <a
                class="fas fa-codepen" target="_blank" href="https://codepen.io/akshaycodes/"></a><a class="fas fa-2x fa-youtube" target="_blank" href="https://www.youtube.com/channel/UCsDkne96PITsG50KXBoyBzQ"></a></div>
        <div class="overlay"><a>Follow Me</a></div>
    </div>
</div>
<footer>
    <div class="content">
        <div class="top"><a target="_blank" href="https://www.instagram.com/akshaycodes/?hl=en"><i class="fas fa-instagram"></i></a><a target="_blank" href="https://twitter.com/akshaycodes/"><i class="fab fa-twitter"></i></a><a target="_blank" href="http://akshaycodes.com/youtube"><i class="fab fa-youtube"></i></a>
            <a
                target="_blank" href="https://codepen.io/akshaycodes/"><i class="fab fa-codepen"></i></a>
        </div>
        <div class="bottom"><a>made with <i class="fas fa-heart beat"></i> by <a target="_blank" href="https://codepen.io/akshaycodes/">Akshaycodes</a></a>
        </div>
    </div>
</footer>
      </q-page>
     </q-page-container>
  </q-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
$base: #FFE6C9
$primary: #D6A0D3
$accent: #ffffff
$secondary: #F0ADA1
$tertiary: #FFCCBD
$num: 5
$delay: 55ms

$multiplier: $delay
$width: 350px
=fhover($color)
  &:hover
    transition: 350ms ease-in-out
    color:  $color
    transform: scale(1.4)
=flex()
  display: flex
  align-items: center
  justify-content: center
  flex-direction: row
  flex-wrap: wrap

=center()
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)

=align()
  top: 50%
  transform: translateY(-50%)

*
  margin: 0
  box-sizing: border-box
  padding: 0
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
h1,h2,h3,h4,h5,h6,a,p,span
  padding-bottom: 0.714em !important
  padding-top: 0.714em !important
  text-transform: uppercase
  letter-spacing: 0.1em
  font-weight: 400
  color: $accent
  font-weight: bold
  text-align: center

footer
  bottom: 0
  right: 0
  left: 0
  margin: 0 auto
  position: fixed
  width: 100%
  background: $base
  text-align: center

  .content
    border-radius: 5px
    +flex
    justify-content: space-evenly
    height: 80px
    .bottom
      padding: 0
      margin: 0
      top: 10%
      .beat
        color: red
        animation: beat .30s infinite alternate

    .top
      font-size: 25px
      .fa-twitter
        +fhover(#55acee)
      .fa-youtube
        +fhover(#cd201f)
      .fa-instagram
        +fhover(#e4405f)
      .fa-codepen
        +fhover(#FFDD40)

      a
        padding: 10px
      i
        transition: 500ms ease-in-out


body
  background: $base
  font-family: 'Raleway', sans-serif
  text-align: center

.noselect
  user-select: none


.artboard
  +flex()
  +center()
  position: absolute
.button
  width: $width
  height: 80px
  +flex()
  +center()
  justify-content: space-evenly
  background:  $tertiary
  text-align: center
  font-weight: bold
  overflow: hidden
  color: $accent
  .links a
    padding: 15px
    transition:  700ms cubic-bezier(.89,.03,.06,1.50)
    color: $accent
    text-align: center
    opacity: 0
    text-decoration: none
    transform: scale(0)
    &:hover
      color: $primary
      transition-timing-function: ease-in-out!important
      transition-delay: 1ms!important
    @while $num > 0
        &:nth-child(#{$num})
            transition-delay:  (#{$delay})
        $delay: $delay + $multiplier
        $num: $num - 1
  .overlay
      +flex()
      width: $width
      height: 80px
      position: absolute
      top: 0em
      left: 0em
      background: $secondary
      transition:   1s cubic-bezier(.89,.03,.06,1.50)
      a
        transform: scale(1)
        +flex()
        opacity: 1
        padding: 0
        margin: auto
        color: $accent !important
        font-size: 20px

.button:hover
  .links a
    transform: scale(1)
    opacity: 1
  .overlay
    transform: translateX(-500px)

@keyframes beat
  to
    transform: scale(1.4)

</style>
