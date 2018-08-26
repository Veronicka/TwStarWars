<template>
  <div app>
  <v-app id="inspire">
    <div>
      <v-toolbar dark>
        <v-btn icon @click.stop="layout.drawer = !layout.drawer">
          <v-icon>menu</v-icon>
        </v-btn>
    
        <v-toolbar-title class="white--text">Dath Twitter</v-toolbar-title>
    
        <v-spacer></v-spacer>
    
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      
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
      <background-image></background-image>
      <div>  
          <v-tabs
            slot="extension"
            v-model="tabs"
            fixed-tabs
            color="transparent"
          >
            <v-spacer></v-spacer>           

            <v-tab href="#mobile-tabs-5-3" class="primary--text">
              <v-icon color="green darken-2">account_box</v-icon>
            </v-tab>

            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mobile-tabs-5-1" class="primary--text">
              <v-icon color="purple darken-2">phone</v-icon>
            </v-tab>
    
            <v-tab href="#mobile-tabs-5-2" class="primary--text">
              <v-icon color="red darken-2">favorite</v-icon>
            </v-tab>
                
            <v-spacer></v-spacer>
          </v-tabs>
    
        <v-tabs-items v-model="tabs" class="white elevation-1">
          <v-tab-item
            v-for="i in 3"
            :id="'mobile-tabs-5-' + i"
            :key="i"
          >
            <v-card>
              <v-card-text>
                <!-- {{ text }} -->
                <v-content>
                  <v-container fluid>
                    <nuxt></nuxt>
                  </v-container>
                </v-content>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
      
    <sidenav-left :state="layout"/>
    </div>
    <le-footer/>
  </v-app>

</div>
</template>

<script>
  import Vuex from 'vuex'
  import sidenavLeft from '~/components/sidenav-left'
  import backgroundImage from '~/components/background-image'
  import footer from '~/components/footer'
  import AppApi from '~apijs'
  export default {
    middleware: 'auth',
    layout: 'complex',
    components: {
      backgroundImage,
      sidenavLeft,
      leFooter: footer
    },
    computed: Object.assign(
      {
        snack () {
          return this.$store.getters.snack
        },
      },
      Vuex.mapGetters([
        'logged_user'
      ])
    ),
    data () {
      return {
        tabs: null,
        loggedUser: true,
        layout: {
          drawer: false,
        },
        // https://i1.wp.com/www.showmetech.com.br/wp-content/uploads//2016/04/armadura-darth-vader.jpg?fit=990%2C619&ssl=1
        avatar: {
          size: 100,
          img: 'https://nerdist.com/wp-content/uploads/2018/02/20180205_n_nerdistpresents_mastermind_vader_1x1-1.jpg',
          title: 'Dath vader'
        }
      }
    },
    props: ['state'],
    methods: {
      logout(){
        AppApi.logout().then(()=>{
          this.$store.commit('SET_LOGGED_USER', null);
          Snacks.show(this.$store, {text: 'Até logo!'})
        });
      }
    }
  }
</script>