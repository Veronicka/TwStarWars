<template>
	<v-flex xs12 sm6 offset-sm3>
	  <v-card>

	    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
	     <v-list three-line>
	      <template v-for="(item, index) in items">
          <div :key="index">
            <v-divider/>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="item.picture">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.username"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.msg"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
	      </template>
	    </v-list>
	  </v-card>
	</v-flex>
</template>

<script>
import AppApi from '~apijs'
import axios from 'axios'

export default {
  middleware: 'auth',
  layout: 'complex',
  validate({ params }) {
    return "/"+(params.username)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await AppApi.profile(params.username)
      return { items: data.list }
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  },
  data () {
    return {
      loading: false,
      list: []
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
