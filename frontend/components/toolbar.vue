<template>
  <div >
    <v-toolbar dark height="45px" fixed app>
      <v-btn icon @click.stop="sideBar()">
        <v-icon>{{ layout.icon }}</v-icon>
      </v-btn>

      <v-toolbar-title v-if="loggedUser">Olá {{ loggedUser.first_name }}</v-toolbar-title>

      <v-spacer></v-spacer>
    
      <v-menu bottom left>
          <v-btn
            slot="activator"
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile @click="logout()">
              <v-list-tile-title>Sair</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>
    <sidenav-left :state="layout"/>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  import sidenavLeft from '~/components/sidenav-left'
  import AppApi from '~apijs'
  export default {
    middleware: 'auth',
    components: {
      sidenavLeft
    },
    computed: {
      loggedUser () {
        return this.$store.getters.logged_user
      }
    },
    data () {
      return {
        layout: {
          drawer: false,
          icon: "menu" 
        },
      }
    },
    props: ['state'],
    methods: {
      logout(){
        AppApi.logout().then(()=>{
          this.$store.commit('SET_LOGGED_USER', null)
          this.$router.push('/login')
        })
      },
      sideBar(){
        if(this.layout.drawer){
          this.layout.drawer = false
          this.layout.icon = "menu"
        }else{
          this.layout.drawer = true
          this.layout.icon = "close"
        }
      }
    }
  }
</script>