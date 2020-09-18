<template>
  <!-- <q-page class="flex flex-center"> -->
    <div>
<!-- <ul id="menu" class="q-pa-none">

  <q-toolbar class="bg-red">oi oi
  </q-toolbar>
<q-tabs class="q-pa-none" narrow-indicator :breakpoint="0" no-caps>
          <div class="q-pl-sm"></div>
          <q-btn
            @click="moveTo(1)"
            push
            label="Início"
            class="navigation-btn bg-light-blue-9"
            style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
            v-if="$q.screen.gt.sm" name="home"

          />
          <div class="q-pl-sm"></div>
          <q-btn
            @click="moveTo(2)"
            push
            label="Sobre"
            class="navigation-btn bg-light-blue-9"
            style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
            v-if="$q.screen.gt.sm" name="about"
          />
          <div class="q-pl-sm"></div>
          <q-btn
            @click="moveTo(3)"
            push
            label="Serviços"
            class="navigation-btn bg-light-blue-9"
            style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
            v-if="$q.screen.gt.sm" name="services"
          />
      <div class="q-pl-sm"></div>
      <q-btn @click="moveTo(4)"

               push
        label="Dúvidas"
        class="navigation-btn bg-light-blue-9"
        style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
        v-if="$q.screen.gt.sm" name="doubts"
        />
      <q-btn-dropdown class="bg-light-blue-9 q-py-xs q-px-none" :content-style="{ backgroundColor: '#ff000000' }"
        style="border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
        size="md"
          push no-caps v-if="$q.screen.lt.md" auto-close dropdown-icon="mdi-menu-down" :loading="loading" label="Pages">
        <q-list class="q-pa-none q-ma-none fit column wrap justify-center">
          <q-item
          class="q-pt-xs q-pb-none q-px-none" clickable>
            <q-btn @click="moveTo(1)" size="12px"
              push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
              border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Home" />
            </q-item>

            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable >
              <q-btn @click="moveTo(2)" size="12px"
                push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
                border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Serviços" />
            </q-item>

            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable >
              <q-btn @click="moveTo(3)" size="12px"
                push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
                border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Sobre" />
            </q-item>

            <q-item
            class="q-pt-xs q-pb-none q-px-none" clickable >
              <q-btn @click="moveTo(4)" size="12px"
                push style="width:100%; border-top-left-radius: 0px; border-top-right-radius: 0px;
                border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" class="bg-light-blue-9 text-white" label="Dúvidas" />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
</ul> -->
      <ul id="menu" class="bg-red text-center">
        <!-- <q-toolbar>
        <q-space/> -->
        <li data-menuanchor="page1" @click="moveTo(1)" class="active"><a href="#page1">Section 1</a></li>
        <li data-menuanchor="page2" @click="moveTo(2)"><a href="#page2">Section 2</a></li>
        <li data-menuanchor="page3" @click="moveTo(3)"><a href="#page3">Section 3</a></li>
        <li data-menuanchor="page4" @click="moveTo(4)"><a href="#page4">Section 4</a></li>
        <li data-menuanchor="page5" @click="moveTo(5)"><a href="#page5">Section 5</a></li>
        <!-- </q-toolbar> -->
      </ul>
      <ul class="actions">
        <li>
            <a class="actions-button" href="#" rel="noopener" @click="addSection">Add section</a>
        </li>
        <li>
            <a class="actions-button" href="#" rel="noopener" @click="removeSection">Remove section</a>
        </li>
        <li>
            <a class="actions-button" href="#" rel="noopener" @click="addSlide">Add slide</a>
        </li>
        <li>
            <a class="actions-button" href="#" rel="noopener" @click="removeSlide">Remove slide</a>
        </li>
        <li>
            <a class="actions-button" href="#" rel="noopener" @click="toggleNavigation">Toggle nav</a>
        </li>
        <li>
            <a class="actions-button" href="#" rel="noopener" @click="toggleScrollbar">Toggle scrollBar</a>
        </li>
      </ul>
                      <!-- {{ $store.state.window.windowWidth }} -->
      <full-page id="fullpage" ref="fullpage" :options="options">
        <!-- <div class="section">
            <div class="transparent q-pa-md text-justify row wrap justify-center items-start content-start">
              <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:415px">
                <q-card>
                  <img :src="require('../assets/astronauta.gif')">
                {{ $store.state.window.windowWidth }}
                  <q-card-section>
                    <div class="text-overline text-orange-9">Android & iOS</div>
                    <div class="text-h6">Dispositivos Mobile</div>
                    <div class="text-subtitle2">por Kevin Kobori</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Projeto 100% compatível com dispositivos mobile. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
                    é possível exporta-lo tanto para dispositivos que utilizam Android quanto iOS. O aplicativo pode ser instalado tanto localmente(sem a necessidade

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <strong>Ex: Smartphones e Tablets / iPhones e iPads.</strong>
                  </q-card-section>
                  <br>
                  <q-separator inset />

                  <q-card-section align="right">
                    <q-btn outline>Saiba Mais</q-btn>
                  </q-card-section>
                </q-card>
              </div>

              <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:415px">
                <q-card>
                  <img :src="require('../assets/mcdonalds/yourfoodmenu.png')">

                  <q-card-section>
                    <div class="text-overline text-orange-9">Windows & Mac OSX</div>
                    <div class="text-h6">Sistemas Operacionais</div>
                    <div class="text-subtitle2">por Kevin Kobori</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Projeto 100% compatível com a sua área de trabalho. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
                    é possível exporta-lo para aplicações locais. O aplicativo pode ser instalado tanto localmente quanto divulgado para download local para seus clientes.

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <strong>Ex: um botão, um card, uma caixa de texto, utilizados com frequencia durante o desenvolvimento de toda a aplicação.</strong>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section align="right">
                    <q-btn outline>Saiba Mais</q-btn>
                  </q-card-section>
                </q-card>
              </div>

              <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:415px">
                <q-card>
                  <img :src="require('../assets/mcdonalds/yourfoodmenu.png')">

                  <q-card-section>
                    <div class="text-overline text-orange-9">Chrome, Safari, Firefox...</div>
                    <div class="text-h6">Navegadores Web</div>
                    <div class="text-subtitle2">por Kevin Kobori</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Projeto 100% compatível com dispositivos mobile. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
                    é possível exporta-la tanto para dispositivos que utilizam Android quanto iOS. O aplicativo pode ser instalado tanto localmente(sem a necessidade

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <strong>Ex: um botão, um card, uma caixa de texto, utilizados com frequencia durante o desenvolvimento de toda a aplicação.</strong>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section align="right">
                    <q-btn outline>Saiba Mais</q-btn>
                  </q-card-section>
                </q-card>
              </div>
          </div>
          <div class="$store.state.window.windowWidth < 800 ? 'slide' : ''">
            <div class="transparent q-pa-md text-justify row wrap justify-center items-start content-start">
              <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:415px">
                <q-card>
                  <img :src="require('../assets/astronauta.gif')">
                {{ $store.state.window.windowWidth }}
                  <q-card-section>
                    <div class="text-overline text-orange-9">Android & iOS</div>
                    <div class="text-h6">Dispositivos Mobile</div>
                    <div class="text-subtitle2">por Kevin Kobori</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Projeto 100% compatível com dispositivos mobile. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
                    é possível exporta-lo tanto para dispositivos que utilizam Android quanto iOS. O aplicativo pode ser instalado tanto localmente(sem a necessidade

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <strong>Ex: Smartphones e Tablets / iPhones e iPads.</strong>
                  </q-card-section>
                  <br>
                  <q-separator inset />

                  <q-card-section align="right">
                    <q-btn outline>Saiba Mais</q-btn>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div :class="$store.state.window.windowWidth < 800 ? 'slide' : ''">
              <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:415px">
                <q-card>
                  <img :src="require('../assets/mcdonalds/yourfoodmenu.png')">

                  <q-card-section>
                    <div class="text-overline text-orange-9">Windows & Mac OSX</div>
                    <div class="text-h6">Sistemas Operacionais</div>
                    <div class="text-subtitle2">por Kevin Kobori</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Projeto 100% compatível com a sua área de trabalho. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
                    é possível exporta-lo para aplicações locais. O aplicativo pode ser instalado tanto localmente quanto divulgado para download local para seus clientes.

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <strong>Ex: um botão, um card, uma caixa de texto, utilizados com frequencia durante o desenvolvimento de toda a aplicação.</strong>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section align="right">
                    <q-btn outline>Saiba Mais</q-btn>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div :class="$store.state.window.windowWidth < 800 ? 'slide' : ''">
              <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="max-width:415px">
                <q-card>
                  <img :src="require('../assets/mcdonalds/yourfoodmenu.png')">

                  <q-card-section>
                    <div class="text-overline text-orange-9">Chrome, Safari, Firefox...</div>
                    <div class="text-h6">Navegadores Web</div>
                    <div class="text-subtitle2">por Kevin Kobori</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Projeto 100% compatível com dispositivos mobile. Uma vez feito a lógica do código utilizando Javascript, Html e CSS com a ajuda da Framework VueJS
                    é possível exporta-la tanto para dispositivos que utilizam Android quanto iOS. O aplicativo pode ser instalado tanto localmente(sem a necessidade

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <strong>Ex: um botão, um card, uma caixa de texto, utilizados com frequencia durante o desenvolvimento de toda a aplicação.</strong>
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section align="right">
                    <q-btn outline>Saiba Mais</q-btn>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div> -->
          <!-- <div class="slide">
            <h3>Slide 1.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 1.3</h3>
          </div>
          <div class="slide">
            <h3>Slide 1.4</h3>
          </div>
          <h3>Section 1</h3> -->
        <!-- </div> -->
        <!-- <div class="q-pt-xl"></div> -->
        <div class="section">
          <div class="text-center q-pa-xs">
            <div :class="$store.state.window.windowWidth < 800 ? '' : 'row wrap justify-center items-center content-center'">
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/big-tasty-turbo-queijo.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
              <div :class="$store.state.window.windowWidth < 800 ? 'slide' : 'col-xs-6 col-sm-3 col-md-2'">
                <img :class="$store.state.window.windowWidth < 800 ? 'img-slide' : 'img-section'" :src="require('../assets/mcdonalds/yourfoodmenu.png')">
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="slide">
            <h3>
            </h3>
          </div>
          <div class="slide">
            <h3>Slide 3.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 3.3</h3>
          </div>
        </div>
        <div class="section">
          <div class="slide">
            <h3>Slide 3.1</h3>
          </div>
          <div class="slide">
            <h3>Slide 3.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 3.3</h3>
          </div>
        </div>
        <div class="section">
          <div class="slide">
            <h3>Slide 2.1</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.3</h3>
          </div>
        </div>
         <div class="section">
          <div class="slide">
            <h3>Slide 2.1</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.2</h3>
          </div>
          <div class="slide">
            <h3>Slide 2.3</h3>
          </div>
        </div>
      </full-page>
    </div>
  <!-- </q-page> -->
</template>

<script>
export default {
  data () {
    return {
      // oi: true,
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: true,
        // autoScrolling: false,
        menu: '#menu',
        navigation: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#fff', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      }
    }
  },
  methods: {
    moveTo (val) {
      // if (val2 !== null) {
      //   this.$refs.fullpage.api.moveTo(val + ',' + val2)
      // } else {
      this.$refs.fullpage.api.moveTo(val)
      // }
    },

    addSection (e) {
      e.preventDefault()
      var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

      // creating the section div
      var section = document.createElement('div')
      section.className = 'section'
      section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

      // adding section
      document.querySelector('#fullpage').appendChild(section)

      // creating the section menu element
      var sectionMenuItem = document.createElement('li')
      sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
      sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

      // adding it to the sections menu
      var sectionsMenuItems = document.querySelector('#menu')
      sectionsMenuItems.appendChild(sectionMenuItem)

      // adding anchor for the section
      this.options.anchors.push(`page${newSectionNumber}`)

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build()
    },
    removeSection () {
      var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
      var lastSection = sections[sections.length - 1]

      // removing the last section
      lastSection.parentNode.removeChild(lastSection)

      // removing the last anchor
      this.options.anchors.pop()

      // removing the last item on the sections menu
      var sectionsMenuItems = document.querySelectorAll('#menu li')
      var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
      lastItem.parentNode.removeChild(lastItem)
    },

    addSlide (e) {
      e.preventDefault()
      var newSlideNumber = document.querySelectorAll('.fp-slide').length + 1

      // creating the slide div
      var slide = document.createElement('div')
      slide.className = 'slide'
      slide.innerHTML = `<h3>slide ${newSlideNumber}</h3>`

      // adding slide
      document.querySelector('#fullpageslide').appendChild(slide)

      // creating the slide menu element
      var slideMenuItem = document.createElement('li')
      slideMenuItem.setAttribute('data-menuanchor', 'page' + newSlideNumber)
      slideMenuItem.innerHTML = `<a href="#page${newSlideNumber}">slide${newSlideNumber}</a>`

      // adding it to the slides menu
      var slidesMenuItems = document.querySelector('#menu')
      slidesMenuItems.appendChild(slideMenuItem)

      // adding anchor for the slide
      this.options.anchors.push(`page${newSlideNumber}`)

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build()
    },
    removeSlide () {
      var slides = document.querySelector('#fullpageslide').querySelectorAll('.fp-slide')
      var lastSlide = slides[slides.length - 1]

      // removing the last slide
      lastSlide.parentNode.removeChild(lastSlide)

      // removing the last anchor
      this.options.anchors.pop()

      // removing the last item on the slides menu
      var slidesMenuItems = document.querySelectorAll('#menu li')
      var lastItem = slidesMenuItems[slidesMenuItems.length - 1]
      lastItem.parentNode.removeChild(lastItem)
    },

    toggleNavigation () {
      this.options.navigation = !this.options.navigation
    },
    toggleScrollbar () {
      console.log('Changing scrollbar...')
      this.options.scrollBar = !this.options.scrollBar
    }
  }
}
</script>

<style scoped>
ul {
  /* list-style-type: none; */
  padding: 0;
  margin: 0;
}

li {
  /* display: inline-block;
  margin: 0 10px; */
}

a {
  /* color: #ffffff; */
}

/* .slide::-webkit-scrollbar {
  width: 0;
} */
</style>
