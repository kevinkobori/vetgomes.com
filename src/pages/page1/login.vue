<template>
  <q-layout v-scrollanimation class="bg-image" v-cloak>
    <!-- <q-header class="bg-transparent text-white">
      <q-toolbar class="q-pa-md">
        <q-space />
        <img
          class="q-pa-xs"
          @click="$q.dark.toggle()"
          height="32"
        >
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            square
            dense
            flat
            color="text-grey-7"
            to="/"
            label="Dashboard"
            icon="dashboard"
          >
            <q-tooltip>Dashboard</q-tooltip>
          </q-btn>
          <q-btn
            square
            dense
            flat
            color="text-grey-7"
            to="/Pricing"
            label="Pricing"
            icon="lock"
          >
            <q-tooltip>Pricing</q-tooltip>
          </q-btn>
          <q-btn
            square
            dense
            flat
            color="text-grey-7"
            to="/Lock-2"
            label="Lock"
            icon="lock"
          >
            <q-tooltip>Lock</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header> -->
    <q-page-container>
      <!-- <q-page class="flex flex-center"> -->
        <q-page class="bg-transparent flex flex-center">
          <q-card
          style="background-color: #c1f4ff55"
          class="text-black"
          v-bind:style="$q.screen.lt.sm?{'width': '80%'}: $q.screen.lt.md? {'width':'45%'} : {'width':'30%'}"
        >
          <!-- style="min-width: 350px;"> -->
          <q-card-section>
            <!-- size="103px" -->
            <q-avatar
              style="background-color: #c1f4ff"
              size="90px"
              class="absolute-center shadow-10"
            >
              <!-- <img src="../../assets/logo/user-logo.png"> -->
              <img src="../../statics/profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                color="black"
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                color="black"
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />

              <div>
                <q-btn
                  label="Login"
                  to="/"
                  type="button"
                  color="primary"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
        <!-- <q-card class="login-form" v-bind:style="$q.platform.is.mobile?{'width': '60%'}:{'width':'20%'}">
          <q-card-section>
            <q-avatar size="74px" class="absolute-center shadow-10">
              <img src="../../statics/profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-mt-md">
            <div class="text-h6 text-center">
              Pratik Patel
            </div>
            <q-input v-model="password" :type="isPwd ? 'password' : 'text'" placeholder="Enter Password">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn push label="Unlock" class="text-capitalize" color="primary"></q-btn>
          </q-card-actions>
        </q-card>
  </q-card> -->
      </q-page>
    </q-page-container>
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
  .bg-image {
    /* opacity: 0.7; */
    /* background-image: url(../../statics/background.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
      background-image: url('../../assets/img/home/5.jpg');
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
  transition: all 3s ease-out;
}

.enter {
  opacity: 1;
      -webkit-filter: blur(0px);
  filter: blur(0px);
  background-position: center;
  /* transform: translateY(0px); */
}
</style>
