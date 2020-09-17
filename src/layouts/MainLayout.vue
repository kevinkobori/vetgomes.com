<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
// import btn from 'components/btn.vue'

// const linksData = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default {
  name: 'MainLayout',
  components: {
    // EssentialLink
    // btn
  },
  data () {
    return {
      leftDrawerOpen: false,
      // essentialLinks: linksData,
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
