<template>
  <q-page class="flex flex-center">
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="options"
    >
      <!-- 1 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);"
      >
        <!-- style="background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(203,148,233,1) 100%, rgba(148,187,233,1) 100%);" -->
        <!-- style="background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);" -->
        <!-- background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); -->
        <div
          v-if="$q.screen.gt.sm"
          class="text-center"
        >
          <!-- style="background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);" -->
          <div class="row wrap justify-center items-center content-center">
            <!-- <transition
              name="bounce"
              mode="out-in"
            > -->
            <!-- <div data-aos="fade-up"> -->
            <!-- <Table /> -->
            <!-- <div v-animate-onscroll="'animated flip'">Animate me once upon scroll</div>
            <br> -->
            <!-- <div v-animate-onscroll.repeat="'swing'"> -->
            <!-- <div v-animate-onscroll.repeat="{up: 'animated flip'}"> -->
            <!-- </div> -->
            <!-- <br>
            <div v-animate-onscroll="{down: 'animated flip'}">Animate me once upon scroll down</div>
            <br>
            <div v-animate-onscroll="{up: 'animated rotateOut'}">Animate me once upon scroll up</div>
            <br>
            <div v-animate-onscroll.repeat="{down: 'animated flip'}">Animate me everytime you scroll down on me</div>
            <br>
            <div v-animate-onscroll="{down: 'animated flip', up: 'animated rotateOut' }">Animate me upon scroll forever</div>
            <br> -->
            <!-- </div> -->
            <!-- </transition> -->
            <!-- <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(3,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 1 carne.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(3,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 2 carnes.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(3,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/mcpicanha.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(4,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/carne/big tasty turbo queijo.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(4,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/carne/duplo cheddar mcmelt.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(4,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/carne/big mac.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(5,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/frango/chicken supreme crispy.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(5,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/frango/mcchicken.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(5,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/frango/extra chicken.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(6,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/acompanhamentos/mcnuggets 4.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(6,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/acompanhamentos/mcfritas.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(6,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/acompanhamentos/mcfritas cheddar bacon.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(7,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/bebidas/refrigerantes.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(7,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/bebidas/mcshake.png')"
              >
            </div>
          </div>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <div class="col-xs-12 col-sm-6">
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 1 carne.png')"
              >
            </div>
            <div class="col-xs-12 col-sm-6">
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 2 carnes.png')"
              >
            </div>
            <div class="col-xs-12 col-sm-6">
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/mcpicanha.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(4,1)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/carne/big tasty turbo queijo.png')"
              >
            </div> -->
          </div>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <Table data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
              <h1 slot="header">Yoshi</h1>
              <p slot="content">3 anos, Tratado de câncer nível 2, atualmente saudável</p>
            </Table>
            <Table data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
              <h1 slot="header">Aika</h1>
              <p slot="content">8 anos, Perdeu uma perna em um acidente de carro, atualmente saudável</p>
            </Table>
            <!-- <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(4,2)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/carne/duplo cheddar mcmelt.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(4,3)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/carne/big mac.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(5,1)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/frango/chicken supreme crispy.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(5,2)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/frango/mcchicken.png')"
              >
            </div> -->
          </div>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <Table data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
              <h1 slot="header">Yoshi</h1>
              <p slot="content">3 anos, Tratado de câncer nível 2, atualmente saudável</p>
            </Table>
            <Table data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
              <h1 slot="header">Aika</h1>
              <p slot="content">8 anos, Perdeu uma perna em um acidente de carro, atualmente saudável</p>
            </Table>
            <!-- <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(5,3)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/frango/extra chicken.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(6,0)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/acompanhamentos/mcnuggets 4.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(6,1)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/acompanhamentos/mcfritas.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(6,2)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/acompanhamentos/mcfritas cheddar bacon.png')"
              >
            </div> -->
          </div>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(7,1)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/bebidas/refrigerantes.png')"
              >
            </div>
            <div
              class="col-xs-12 col-sm-6"
              @click="$refs.fullpage.api.moveTo(7,2)"
            >
              <img
                class="selectDisable img-slide-cardapio"
                :src="require('../assets/mcdonalds/bebidas/mcshake.png')"
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(203,148,233,1) 0%, rgba(238,174,202,1) 100%);"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="slide text-center"
        >
          <div
            class="row wrap justify-center items-center content-center selectDisable"
            style="scrollbar-color: green;"
          >
            <div class="col-xs-3 col-sm-3 col-md-3">
              <q-carousel
                class="q-pb-xl q-px-none"
                style="background-color: #e80001; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  :img-src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 1 carne.png')"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 2 carnes.png')"
                />
                <q-carousel-slide
                  :name="3"
                  :img-src="require('../assets/mcdonalds/picanha-das-galaxias/mcpicanha.png')"
                />
                <q-carousel-slide
                  :name="4"
                  :img-src="require('../assets/mcdonalds/carne/big tasty turbo queijo.png')"
                />
                <q-carousel-slide
                  :name="5"
                  :img-src="require('../assets/mcdonalds/carne/duplo cheddar mcmelt.png')"
                />
                <q-carousel-slide
                  :name="6"
                  :img-src="require('../assets/mcdonalds/carne/big mac.png')"
                />
                <q-carousel-slide
                  :name="7"
                  :img-src="require('../assets/mcdonalds/frango/chicken supreme crispy.png')"
                />
                <q-carousel-slide
                  :name="8"
                  :img-src="require('../assets/mcdonalds/frango/mcchicken.png')"
                />
                <q-carousel-slide
                  :name="9"
                  :img-src="require('../assets/mcdonalds/frango/extra chicken.png')"
                />
              </q-carousel>
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1">
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3">
              <q-carousel
                class="q-pb-xl q-px-none"
                style="background-color: #e80001; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"
                swipeable
                animated
                v-model="slide2"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  :img-src="require('../assets/mcdonalds/acompanhamentos/mcfritas.png')"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="require('../assets/mcdonalds/acompanhamentos/mcfritas cheddar bacon.png')"
                />
                <q-carousel-slide
                  :name="3"
                  :img-src="require('../assets/mcdonalds/acompanhamentos/mcnuggets 4.png')"
                />
              </q-carousel>
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1">
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3">
              <q-carousel
                class="q-pb-xl q-px-none"
                style="background-color: #e80001; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"
                swipeable
                animated
                v-model="slide3"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  :img-src="require('../assets/mcdonalds/bebidas/refrigerantes.png')"
                />
                <q-carousel-slide
                  :name="2"
                  :img-src="require('../assets/mcdonalds/bebidas/mcshake.png')"
                />
              </q-carousel>
            </div>
          </div>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <q-carousel
            class="q-pb-xl q-px-none q-ma-none"
            style="background-color: #e80001; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
          >
            <q-carousel-slide
              :name="1"
              :img-src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 1 carne.png')"
            />
            <q-carousel-slide
              :name="2"
              :img-src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 2 carnes.png')"
            />
            <q-carousel-slide
              :name="3"
              :img-src="require('../assets/mcdonalds/picanha-das-galaxias/mcpicanha.png')"
            />
            <q-carousel-slide
              :name="4"
              :img-src="require('../assets/mcdonalds/carne/big tasty turbo queijo.png')"
            />
            <q-carousel-slide
              :name="5"
              :img-src="require('../assets/mcdonalds/carne/duplo cheddar mcmelt.png')"
            />
            <q-carousel-slide
              :name="6"
              :img-src="require('../assets/mcdonalds/carne/big mac.png')"
            />
            <q-carousel-slide
              :name="7"
              :img-src="require('../assets/mcdonalds/frango/chicken supreme crispy.png')"
            />
            <q-carousel-slide
              :name="8"
              :img-src="require('../assets/mcdonalds/frango/mcchicken.png')"
            />
            <q-carousel-slide
              :name="9"
              :img-src="require('../assets/mcdonalds/frango/extra chicken.png')"
            />
          </q-carousel>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <q-carousel
            class="q-pb-xl q-px-none q-ma-none"
            style="background-color: #e80001; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"
            swipeable
            animated
            v-model="slide2"
            thumbnails
            infinite
          >
            <q-carousel-slide
              :name="1"
              :img-src="require('../assets/mcdonalds/acompanhamentos/mcfritas.png')"
            />
            <q-carousel-slide
              :name="2"
              :img-src="require('../assets/mcdonalds/acompanhamentos/mcfritas cheddar bacon.png')"
            />
            <q-carousel-slide
              :name="3"
              :img-src="require('../assets/mcdonalds/acompanhamentos/mcnuggets 4.png')"
            />
          </q-carousel>
        </div>
        <div
          v-if="$q.screen.lt.md"
          class="slide text-center"
        >
          <q-carousel
            class="q-pb-xl q-px-none q-ma-none"
            style="background-color: #e80001; border-top-left-radius: 20px; border-top-right-radius: 20px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;"
            swipeable
            animated
            v-model="slide3"
            thumbnails
            infinite
          >
            <q-carousel-slide
              :name="1"
              :img-src="require('../assets/mcdonalds/bebidas/refrigerantes.png')"
            />
            <q-carousel-slide
              :name="2"
              :img-src="require('../assets/mcdonalds/bebidas/mcshake.png')"
            />
          </q-carousel>
        </div>
      </div>
      <!-- 3 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(148,187,233,1) 0%, rgba(203,148,233,1) 100%);"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(3,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 1 carne.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(3,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 2 carnes.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(3,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/picanha-das-galaxias/mcpicanha.png')"
              >
            </div>
          </div>
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 1 carne.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/picanha-das-galaxias/picanha clubhouse 2 carnes.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/picanha-das-galaxias/mcpicanha.png')"
          >
        </div>
      </div>
      <!-- 4 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(174,236,238,1) 0%, rgba(148,187,233,1) 100%);"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(4,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/carne/big tasty turbo queijo.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(4,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/carne/duplo cheddar mcmelt.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(4,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/carne/big mac.png')"
              >
            </div>
          </div>
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/carne/big tasty turbo queijo.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/carne/duplo cheddar mcmelt.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/carne/big mac.png')"
          >
        </div>
      </div>
      <!-- 5 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(162,233,148,1) 0%, rgba(174,236,238,1) 100%);"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(5,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/frango/chicken supreme crispy.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(5,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/frango/mcchicken.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(5,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/frango/extra chicken.png')"
              >
            </div>
          </div>
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/frango/chicken supreme crispy.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/frango/mcchicken.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/frango/extra chicken.png')"
          >
        </div>
      </div>
      <!-- 6 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(238,236,174,1) 0%, rgba(162,233,148,1) 100%);"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="slide text-center"
        >
          <Table />
          <!-- <div class="row wrap justify-center items-center content-center">
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(6,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/acompanhamentos/mcnuggets 4.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(6,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/acompanhamentos/mcfritas.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(6,3)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/acompanhamentos/mcfritas cheddar bacon.png')"
              >
            </div>
          </div>-->
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/acompanhamentos/mcnuggets 4.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/acompanhamentos/mcfritas.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/acompanhamentos/mcfritas cheddar bacon.png')"
          >
        </div>
      </div>
      <!-- 7 -->
      <div
        class="section"
        style="background: linear-gradient(0deg, rgba(238,174,202,1) 0%, rgba(238,236,174,1) 100%);"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="slide text-center"
        >
          <div class="row wrap justify-center items-center content-center">
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(7,1)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/bebidas/refrigerantes.png')"
              >
            </div>
            <div
              class="col-xs-4 col-sm-3 col-md-2"
              @click="$refs.fullpage.api.moveTo(7,2)"
            >
              <img
                class="selectDisable img-section"
                :src="require('../assets/mcdonalds/bebidas/mcshake.png')"
              >
            </div>
          </div>
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/bebidas/refrigerantes.png')"
          >
        </div>
        <div class="slide text-center">
          <img
            class="selectDisable img-slide"
            :src="require('../assets/mcdonalds/bebidas/mcshake.png')"
          >
        </div>
      </div>
    </full-page>
    <!-- <q-page-sticky
      position="top-right"
      :offset="[10, 10]"
    >
      <q-tabs
        narrow-indicator
        :breakpoint="0"
        no-caps
      >

        <q-btn
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(1,0)"
          push
          label="Cardápio"
          class="d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
        />

        <q-btn
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(2,0)"
          push
          label="McOferta"
          class="d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
        />

        <q-btn-dropdown
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(3,0)"
          @mouseover.native="menuOver3 = true"
          @mouseout.native="menuOver3 = false"
          v-model="menu3"
          label="Picanha das Galáxias"
          class="without-icon d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
          :content-style="{ backgroundColor: '#fec401' }"
          push
          ripple
          auto-close
        >
          <q-list
            @mouseover.native="listOver3 = true"
            @mouseout.native="listOver3 = false"
          >
            <q-item
              @click="$refs.fullpage.api.moveTo(3,1)"
              clickable
            >
              <q-item-section>
                <q-item-label>picanha clubhouse 1 carne</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(3,2)"
              clickable
            >
              <q-item-section>
                <q-item-label>picanha clubhouse 2 carnes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(3,3)"
              clickable
            >
              <q-item-section>
                <q-item-label>McPicanha</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(4,0)"
          @mouseover.native="menuOver4 = true"
          @mouseout.native="menuOver4 = false"
          v-model="menu4"
          label="Sanuíches de Carne"
          class="without-icon d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
          :content-style="{ backgroundColor: '#fec401' }"
          push
          ripple
          auto-close
        >
          <q-list
            @mouseover.native="listOver4 = true"
            @mouseout.native="listOver4 = false"
          >
            <q-item
              @click="$refs.fullpage.api.moveTo(4,1)"
              clickable
            >
              <q-item-section>
                <q-item-label>big tasty turbo queijo</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(4,2)"
              clickable
            >
              <q-item-section>
                <q-item-label>Duplo Cheddar McMelt</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(4,3)"
              clickable
            >
              <q-item-section>
                <q-item-label>Big Mac</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(5,0)"
          @mouseover.native="menuOver5 = true"
          @mouseout.native="menuOver5 = false"
          v-model="menu5"
          label="Sanduíches de Frango"
          class="without-icon d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
          :content-style="{ backgroundColor: '#fec401' }"
          push
          ripple
          auto-close
        >
          <q-list
            @mouseover.native="listOver5 = true"
            @mouseout.native="listOver5 = false"
          >
            <q-item
              @click="$refs.fullpage.api.moveTo(5,1)"
              clickable
            >
              <q-item-section>
                <q-item-label>Chicken Supreme Crispy</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(5,2)"
              clickable
            >
              <q-item-section>
                <q-item-label>McChicken</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(5,3)"
              clickable
            >
              <q-item-section>
                <q-item-label>Extra Chicken</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(6,0)"
          @mouseover.native="menuOver6 = true"
          @mouseout.native="menuOver6 = false"
          v-model="menu6"
          label="Acompanhamentos"
          class="without-icon d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
          :content-style="{ backgroundColor: '#fec401' }"
          push
          ripple
          auto-close
        >
          <q-list
            @mouseover.native="listOver6 = true"
            @mouseout.native="listOver6 = false"
          >
            <q-item
              @click="$refs.fullpage.api.moveTo(6,1)"
              clickable
            >
              <q-item-section>
                <q-item-label>McNuggets</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(6,2)"
              clickable
            >
              <q-item-section>
                <q-item-label>McFritas</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(6,3)"
              clickable
            >
              <q-item-section>
                <q-item-label>McFritas Cheddar</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          v-if="$q.screen.gt.sm"
          @click="$refs.fullpage.api.moveTo(7,0)"
          @mouseover.native="menuOver7 = true"
          @mouseout.native="menuOver7 = false"
          v-model="menu7"
          label="Bebidas"
          class="without-icon d-button navigation-btn btn-slide-line"
          style="background-color: #bd0000;"
          :content-style="{ backgroundColor: '#fec401' }"
          push
          ripple
          auto-close
        >
          <q-list
            @mouseover.native="listOver7 = true"
            @mouseout.native="listOver7 = false"
          >
            <q-item
              @click="$refs.fullpage.api.moveTo(7,1)"
              clickable
            >
              <q-item-section>
                <q-item-label>Refrigerantes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              @click="$refs.fullpage.api.moveTo(7,2)"
              clickable
            >
              <q-item-section>
                <q-item-label>McShacke</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          v-if="$q.screen.lt.md"
          class="q-py-xs q-px-none text-white"
          :content-style="{ backgroundColor: '#fec401' }"
          size="md"
          style="background-color: #bd0000;"
          push
          no-caps
          auto-close
          dropdown-icon="mdi-menu-down"
          :loading="loading"
          :label="pageName"
        >
          <q-list
            flat
            border="false"
            class="q-px-xs q-ma-none fit column wrap justify-center"
          >
            <q-item
              @click="pageName = 'Cardápio', $refs.fullpage.api.moveTo(1,0)"
              class="q-pt-xs q-pb-none q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="Cardápio"
              />
            </q-item>
            <q-item
              @click="pageName = 'McOferta', $refs.fullpage.api.moveTo(2,0)"
              class="q-pt-xs q-pb-none q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="McOferta"
              />
            </q-item>
            <q-item
              @click="pageName = 'Picanha das Galáxias', $refs.fullpage.api.moveTo(3,0)"
              class="q-pt-xs q-pb-none q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="Picanha das Galáxias"
              />
            </q-item>
            <q-item
              @click="pageName = 'Sanuíches de Carne', $refs.fullpage.api.moveTo(4,0)"
              class="q-pt-xs q-pb-none q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="Sanuíches de Carne"
              />
            </q-item>
            <q-item
              @click="pageName = 'Sanduíches de Frango', $refs.fullpage.api.moveTo(5,0)"
              class="q-pt-xs q-pb-none q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="Sanduíches de Frango"
              />
            </q-item>
            <q-item
              @click="pageName = 'Acompanhamentos', $refs.fullpage.api.moveTo(6,0)"
              class="q-pt-xs q-pb-none q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="Acompanhamentos"
              />
            </q-item>
            <q-item
              @click="pageName = 'Bebidas', $refs.fullpage.api.moveTo(7,0)"
              class="q-pt-xs q-pb-xs q-px-none"
              clickable
            >
              <q-btn
                size="12px"
                push
                class="text-white"
                style="width:100%; background-color: #bd0000;"
                label="Bebidas"
              />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
    </q-page-sticky> -->
  </q-page>
</template>

<script>
import { debounce } from 'quasar'
// import btn from '../components/btn'
import Table from '../components/Table'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

export default {
  components: {
    Table
  },
  data () {
    return {
      slide: 1,
      slide2: 1,
      slide3: 1,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterResize,
        scrollOverflow: false,
        scrollBar: false,
        // parallax: true,
        autoScrolling: true,
        // menu: '#menu',
        navigation: true,
        controlArrows: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7']
        // sectionsColor: ['#fec401', '#e80001', '#0798ec', '#ff5f45', '#41b883', '#fec401', '#e80001']
      },
      menu3: false,
      menuOver3: false,
      listOver3: false,
      menu4: false,
      menuOver4: false,
      listOver4: false,
      menu5: false,
      menuOver5: false,
      listOver5: false,
      menu6: false,
      menuOver6: false,
      listOver6: false,
      menu7: false,
      menuOver7: false,
      listOver7: false,
      pageName: 'Cardápio'
    }
  },
  methods: {
    debounceFunc3: debounce(function () { this.checkMenu3() }, 0),
    debounceFunc4: debounce(function () { this.checkMenu4() }, 0),
    debounceFunc5: debounce(function () { this.checkMenu5() }, 0),
    debounceFunc6: debounce(function () { this.checkMenu6() }, 0),
    debounceFunc7: debounce(function () { this.checkMenu7() }, 0),
    checkMenu3 () {
      if (this.menuOver3 || this.listOver3) {
        this.menu3 = true
      } else {
        this.menu3 = false
      }
    },
    checkMenu4 () {
      if (this.menuOver4 || this.listOver4) {
        this.menu4 = true
      } else {
        this.menu4 = false
      }
    },
    checkMenu5 () {
      if (this.menuOver5 || this.listOver5) {
        this.menu5 = true
      } else {
        this.menu5 = false
      }
    },
    checkMenu6 () {
      if (this.menuOver6 || this.listOver6) {
        this.menu6 = true
      } else {
        this.menu6 = false
      }
    },
    checkMenu7 () {
      if (this.menuOver7 || this.listOver7) {
        this.menu7 = true
      } else {
        this.menu7 = false
      }
    }
  },
  watch: {
    menuOver3 (val) {
      this.debounceFunc3()
    },
    listOver3 (val) {
      this.debounceFunc3()
    },
    menuOver4 (val) {
      this.debounceFunc4()
    },
    listOver4 (val) {
      this.debounceFunc4()
    },
    menuOver5 (val) {
      this.debounceFunc5()
    },
    listOver5 (val) {
      this.debounceFunc5()
    },
    menuOver6 (val) {
      this.debounceFunc6()
    },
    listOver6 (val) {
      this.debounceFunc6()
    },
    menuOver7 (val) {
      this.debounceFunc7()
    },
    listOver7 (val) {
      this.debounceFunc7()
    }
  }
  // created () {
  //   AOS.init()
  // }
}
</script>

<style lang="stylus">
button.without-icon i {
  display: none;
}
</style>

<style lang="scss" scoped>
.d-button {
  font-size: 12.5px;
  margin: 4px;
  align-items: center;
  border-radius: 7px;
  color: #ffffff;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    animation: rotate 0.7s ease-in-out both;
    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
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

.btn-pill {
  &:before,
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #bd0000; //fdf900
    content: "";
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }
  &:hover {
    &:before,
    &:after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before {
      transform: translate3d(50%, 0, 0) scale(0.9);
    }
    &:after {
      transform: translate(50%, 0) scale(1.1);
    }
  }
}

.btn-slide-line {
  &.center {
    &:after {
      left: 50%;
    }
  }
  &:after {
    position: absolute;
    right: 0;
    left: auto;
    transition: 0.3s;
    content: "";
    width: 0;
    bottom: 0;
    height: 3px;
    background: #ffe600;
  }
  &:hover {
    cursor: pointer;
    &:after {
      width: 100%;
      left: 0;
    }
  }
}
</style>
