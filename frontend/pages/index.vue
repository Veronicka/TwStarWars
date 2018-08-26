<template>
  <v-layout row>
    <msg-list />
  </v-layout>
</template>

<script>
import msgList from '~/components/msg-list.vue'
import Vuex from 'vuex'

export default {
  middleware: 'auth',
  layout: 'complex',
  components: {
    msgList
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>

