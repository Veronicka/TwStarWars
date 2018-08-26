<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>

      <v-list three-line>
        <v-subheader>
          <v-text-field
            v-model="myMessage"
            :rules="msgRules"
            :counter="200"
            label="What's up?"
            @keyup.enter="add()"
            :loading="adding"
            required
          ></v-text-field>
        </v-subheader>

        <template v-for="(item, index) in items">
          <div :key="index">
            <v-divider/>

            <v-list-tile
              nuxt-link 
              :to="'/profile/'+item.username"
              avatar
              >
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
export default {
  computed: {
    loggedUser () {
      return this.$store.getters.logged_user
    }
  },
  data () {
    return {
      myMessage: '',
      msgRules: [
        v => v.length <= 200 || 'Message must be less than 200 characters'
      ],
      message: {
        userId: '',
        username: '', 
        first_name: '', 
        picture: '', 
        msg: ''
      },
      adding: false,
      loading: false,
      items: []
    }
  },
  mounted () {
    this.loading = true
    AppApi.list_msg().then(response => {
      const list = response.data.messages
      this.items = list
      this.loading = false
    })
  },
  methods: {
    add () {
      if(this.loggedUser){
        this.message.msg = this.myMessage
        this.message.username = this.loggedUser ? this.loggedUser.username : ''
        this.message.first_name = this.loggedUser ? this.loggedUser.first_name : ''
        this.message.picture = this.loggedUser ? this.loggedUser.picture : ''
        this.message.userId = this.loggedUser ? this.loggedUser.id : -1
        this.adding = true
        AppApi.add_msg(this.message).then(response => {
          this.myMessage = ''
          this.adding = false
        })
      }
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
