<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      @mouseover.native="menuOver = true"
      @mouseout.native="menuOver = false"
      v-model="menu"
      auto-close
      label="Areas"
      dropdown-icon="mdi-triangle"
      style="background-color: #ffffff22;"
      :content-style="{ backgroundColor: '#ffffff22' }"
    >
      <q-list @click="$refs.fullpage.api.moveSectionDown()" @mouseover.native="listOver = true" @mouseout.native="listOver = false">
        <q-item clickable :class="{active:index ==0}"
        >
          <q-item-section>
            <q-item-label >Area 1</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="$refs.fullpage.api.moveSectionUp()" clickable :class="{active:index ==1}"
        >
          <q-item-section>
            <q-item-label>Area 2</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :class="{active:index ==2}"
        >
          <q-item-section>
            <q-item-label @click="$refs.fullpage.api.moveSectionDown()">Area 3</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { debounce } from 'quasar'

export default {
  data () {
    return {
      menu: false,
      menuOver: false,
      listOver: false
    }
  },
  methods: {
    debounceFunc: debounce(function () { this.checkMenu() }, 0),
    onItemClick () {
      console.log('Clicked on an Item')
    },
    checkMenu () {
      if (this.menuOver || this.listOver) {
        this.menu = true
      } else {
        this.menu = false
      }
    }
  },
  watch: {
    menuOver (val) {
      this.debounceFunc()
    },
    listOver (val) {
      this.debounceFunc()
    }
  }
}
</script>

<style>

</style>
