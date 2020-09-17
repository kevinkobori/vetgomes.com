<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header
      reveal
      :style="$store.state.colors.themeBGColor != '' ?
        'background-color: ' + $store.state.colors.themeBGColor + '; color: ' + $store.state.colors.themeColor
        : $q.dark.isActive ? 'background-color: ' + $store.state.colors.darkThemeBGColor + '; color: ' + $store.state.colors.darkThemeColor
          : 'background-color: ' + $store.state.colors.lightThemeBGColor + '; color: ' + $store.state.colors.lightThemeColor"
    >
      <q-toolbar
        v-if="!headerTransitionVal"
        class="column q-pa-none shadow-0"
      >
        <div class="fit row wrap justify-end items-start content-start">
          <q-space v-if="$store.state.window.windowWidth <= 516"/>
          <div
            flat
            dense
            class="q-px-xl q-pt-xl"
          >
            <img @click="$q.dark.toggle()" class="logo" :src="$q.dark.isActive ? require('../assets/logo/your-design-trans-white.png') : require('../assets/logo/your-design-trans.png')">
          </div>
          <q-space/>
        </div>
      <div class="fit row wrap justify-end items-start content-start">
        <q-space />
        <q-tabs :class="$store.state.window.windowWidth <= 516 ? '' : 'q-mr-xl'">
          <div @click="headerTab">
            <q-route-tab name="home" label="Início" to="/" class="q-pa-sm q-mt-xl"/>
          </div>
          <div @click="headerTab">
            <q-route-tab name="about" label="Sobre" to="/about" class="q-pa-sm q-mt-xl"/>
          </div>
          <div @click="headerTab">
            <q-route-tab name="services" label="Serviços" to="/services" class="q-pa-sm q-mt-xl"/>
          </div>
          <div @click="headerTab">
            <q-route-tab name="doubts" label="Dúvidas" to="/doubts" class="q-pa-sm q-mt-xl"/>
          </div>
        </q-tabs>
        <q-space v-if="$store.state.window.windowWidth <= 516"/>
      </div>
      </q-toolbar>
      <q-toolbar
        dense
        v-if="headerTransitionVal2"
        class="column"
        :class="headerTransition ? 'shadow-0' : ''"
        :style="$q.dark.isActive ?
          'background-color: ' + darkThemeBGColor + '; color: ' + darkThemeColor
          : 'background-color: ' + lightThemeBGColor + '; color: ' + lightThemeColor"
      >
        <div class="fit row wrap justify-end items-start content-start">
          <q-btn
            @click="left = !left"
            :round="$store.state.window.windowWidth <= 516"
            dense
            flat
            icon="menu"
            class="q-mt-sm"
          />
          <div
            @click="$q.dark.toggle()"
            flat
            dense
            class="q-pt-md q-pl-sm"
          >
            <img class="logo-mini" :src="$q.dark.isActive ? require('../assets/logo/your-design-trans-white.png') : require('../assets/logo/your-design-trans.png')">
          </div>
          <q-space/>
          <q-btn
            v-if="$store.state.window.windowWidth <= 516"
            @click="right = !right"
            dense
            round
            flat
            icon="menu"
            class="q-mt-sm q-ml-md"
          />
          <q-tabs :class="$store.state.window.windowWidth <= 516 ? 'q-ma-none' : 'q-ma-none'">
            <div @click="headerTab">
              <q-route-tab name="home" label="Início" to="/" :class="$store.state.window.windowWidth <= 330 ? 'q-pa-sm' : ''"/>
            </div>
            <div @click="headerTab">
              <q-route-tab name="about" label="Sobre" to="/about" :class="$store.state.window.windowWidth <= 330 ? 'q-pa-sm' : ''"/>
            </div>
            <div @click="headerTab">
              <q-route-tab name="services" label="Serviços" to="/services" :class="$store.state.window.windowWidth <= 330 ? 'q-pa-sm' : ''"/>
            </div>
            <div @click="headerTab">
              <q-route-tab name="doubts" label="Dúvidas" to="/doubts" :class="$store.state.window.windowWidth <= 330 ? 'q-pa-sm' : ''"/>
            </div>
          </q-tabs>
          <q-btn
            v-if="$store.state.window.windowWidth > 516"
            @click="right = !right"
            dense
            flat
            icon="menu"
            class="q-mt-sm q-ml-md"
          />
        </div>
      </q-toolbar>
    </q-header> -->
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

      <!-- content-class="bg-grey-1" -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
    >
      <!-- bordered -->
      <q-list>
        <!-- <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label> -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    <!-- <q-page-sticky
      position="top-left" :offset="[12, 60]">
      <q-btn
        flat
        padding="none" style="border-top-left-radius: 0px; border-top-right-radius: 0px;
        border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
        :style="'backgroud-color: ' + $q.dark.isActive ? 'white' : 'black'"
      >
        <q-icon :color="$q.dark.isActive ? 'white' : 'black'" name="mdi-water"/>
      </q-btn>
    </q-page-sticky> -->
    <q-page-sticky position="top-left" :offset="[18, 18]">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
      />
    </q-page-sticky>
    <q-page-sticky position="top-left" :offset="[60, 18]">
      <!-- <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
      /> -->
        <!-- @click="$q.dark.toggle()" -->
      <div
        flat
        dense
        class="q-px-xl q-pt-xl"
      >

        <img @click="$q.dark.toggle()" class="logo" :src="$q.dark.isActive ? require('../assets/logo/your-design-trans-white.png') : require('../assets/logo/your-design-trans.png')">
      </div>
    </q-page-sticky>
      <!-- <q-page-sticky position="top-right" :offset="$store.state.window.windowWidth <= 500 ? [12, 60] : [12, 12]">
      <q-btn
            @click="$q.fullscreen.toggle()"
            flat
            padding="none" style="border-top-left-radius: 0px; border-top-right-radius: 0px;
            border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;"
            :style="'backgroud-color: ' + $q.dark.isActive ? 'white' : 'black'"
          >
            <q-icon :color="$q.dark.isActive ? 'white' : 'black'" :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"/>
          </q-btn>
    </q-page-sticky> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      miniState: true,
      headerTransitionVal: false,
      headerTransitionVal2: false,
      tabVal: false,
      left: false,
      right: false,
      showWallE: true,
      palette: ['#FFFFFFFF', '#F2C037FF', '#21BA45FF', '#26A69AFF', '#31CCECFF', '#1976D2FF', '#e600e2ff', '#512fa9ff', '#aa0000ff', '#242424ff']
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    headerTab () {
      this.tabVal = true
    },
    headerTransitionFunc (val) {
      this.headerTransitionVal2 = val
    },
    handleScroll (event) {
      if (window.scrollY > 25) {
        this.headerTransition = true
      }
      // } else if (window.scrollY === 0 && this.tabVal === false) {
      //   this.headerTransition = false
      // }
    },
    dynamicRoute (val) {
      const about = 'about'
      const services = 'services'
      const doubts = 'doubts'
      if (this.$route.fullPath.search(/\babout\b/) >= 0) {
        this.$router.push(val + '/' + about)
      } else if (this.$route.fullPath.search(/\bservices\b/) >= 0) {
        this.$router.push(val + '/' + services)
      } else if (this.$route.fullPath.search(/\bdoubts\b/) >= 0) {
        this.$router.push(val + '/' + doubts)
      } else {
        this.$router.push(val)
      }
    }
  },
  computed: {
    headerTransition: {
      get () {
        return this.headerTransitionVal
      },
      set (val) {
        this.headerTransitionVal = val
        setTimeout(this.headerTransitionFunc(val), 20000)
      }
    },
    returnStyle: {
      get () {
        if (this.setStyle === false) {
          return { height: '96vh' }
        } else {
          return { height: '96vh' }
        }
      }
    }
  }
}

// export default {
//   data () {
//     return {
//       fabPos: [18, 18],
//       draggingFab: false
//     }
//   },

//   methods: {
//     onClick () {
//       // console.log('Clicked on a fab action')
//     },

//     moveFab (ev) {
//       this.draggingFab = ev.isFirst !== true && ev.isFinal !== true

//       this.fabPos = [
//         this.fabPos[0] - ev.delta.x,
//         this.fabPos[1] - ev.delta.y
//       ]
//     }
//   }
// }
</script>

<style scoped>
.logo {
  height: 20px;
}
</style>
