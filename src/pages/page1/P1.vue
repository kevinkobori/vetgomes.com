<template>
  <q-layout v-scrollanimation class="bg-image" v-cloak>
    <div class="blur">
    <q-page-container>
      <q-page class="flex flex-center">
            <!-- <q-btn class="bg-black text-white">
              <q-icon name="mdi-heart" />
    </q-btn> -->
            <div class="box">
  <a href="#" class="btn btn-white btn-animation-1">Hover Over Me</a>
</div>
<!-- <footer>
    <div class="content">
        <div class="top"><a target="_blank" href="https://www.instagram.com/akshaycodes/?hl=en"><i class="fas fa-instagram"></i></a><a target="_blank" href="https://twitter.com/akshaycodes/"><i class="fab fa-twitter"></i></a><a target="_blank" href="http://akshaycodes.com/youtube"><i class="fab fa-youtube"></i></a>
            <a
                target="_blank" href="https://codepen.io/akshaycodes/"><i class="fab fa-codepen"></i></a>
        </div>
        <div class=""><a target="_blank" href="https://www.instagram.com/vet.manugoomes/" class="text-blue">Veterinária <q-icon style="color: #ff0070;" size="27px" name="mdi-heart" /><a target="_blank" href="https://www.instagram.com/vet.manugoomes/" style="color: #d43ecb;"> Manu Gomes</a></a>
        </div>
    </div>
</footer> -->
      </q-page>
    </q-page-container>
    </div>
  </q-layout>
</template>

<script>
    export default {
        name: "LockScreen",
        data() {
            return {
                password: '',
                isPwd: 'password',
                      year: (new Date()).getFullYear(),
      username: 'Pratik'
      // password: '12345'
            }
        }
    }
</script>

<style>
.blur {
  background: rgba(55, 217, 245, 0.2);
  backdrop-filter: blur(5px);
  /* height: 100vh; */
	/* width: 50%; */
}

  .bg-image {
    /* opacity: 0.7; */
    /* background-image: url(../../statics/background.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
      background-image: url('../../assets/img/manu/manu1.jpeg');
      /* background: #00000022; */
      /* url(../../statics/background.jpg); */
  /* min-height: 500px; */
  background-attachment: fixed;
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  }

  [v-cloak] {
    display: none !important;
  }

  .before-enter {
  opacity: 0;
  /* transform: translateX(100vw); */
    -webkit-filter: blur(5px);
  filter: blur(5px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
      -webkit-filter: blur(0px);
  filter: blur(0px);
  background-position: top;
  /* transform: translateY(0px); */
}

body{
  background:lightblue;
  text-align:center;
  box-sizing:border-box;
  font-family:"Lato",Sans-serif;
/*   position:relative; */
}

.box{
  position:absolute;
  top:50%;
  left:50%;
  transform : translate(-50% ,-50%);
}

.btn:link,
.btn:visited{
  text-decoration: none;
  text-transform:uppercase;
  position:relative;
  top:0;
  left:0;
  padding:20px 40px;
  border-radius:100px;
  display:inline-block;
  transition: all .5s;
}

.btn-white{
  background:#fff;
  color:#000;
}

.btn:hover{
   box-shadow:0px 10px 10px rgba(0,0,0,0.2);
   transform : translateY(-3px);
}

.btn:active{
  box-shadow:0px 5px 10px rgba(0,0,0,0.2);
  transform:translateY(-1px);
}

.btn-bottom-animation-1{
  animation:comeFromBottom 1s ease-out .8s;
}

.btn::after{
  content:"";
  text-decoration: none;
  text-transform:uppercase;
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  border-radius:100px;
  display:inline-block;
  z-index:-1;
  transition: all .5s;
}

.btn-white::after {
    background: #fff;
}

.btn-animation-1:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

@keyframes comeFromBottom{
  0%{
    opacity:0;
    transform:translateY(40px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}
</style>


<style lang="sass" scoped>
$base: #FFE6C9
$primary: #D6A0D3
$accent: #e95395
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
