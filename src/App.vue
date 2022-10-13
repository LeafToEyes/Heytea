<template>
  <router-View />
  <FootTabBar v-if="Footer" />
</template>

<script setup lang="ts">

import $bus from './config/eventBus'
import emitter from './mitt/eventbus.js'
import { onMounted, ref } from 'vue'
let Footer = ref<boolean>(true)
$bus.on('tabBarHide', (status) => {
  Footer.value = status as boolean
})
emitter.on('Footer', (status) => {
  Footer.value = status as boolean
})
</script>

<style lang="scss">
@import url('./assets/css/reset.css');

</style>
