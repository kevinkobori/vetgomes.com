<template>
  <q-layout v-scrollanimation class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="login-form" v-bind:style="$q.platform.is.mobile?{'width': '60%'}:{'width':'20%'}">
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
                isPwd: 'password'
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
      background-image: url(../../statics/background.jpg);

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }

  [v-cloak] {
    display: none !important;
  }

  .before-enter {
  opacity: 0;
  /* transform: translateX(100vw); */
  transition: all 3s ease-out;
}

.enter {
  opacity: 1;
  /* transform: translateY(0px); */
}
</style>
