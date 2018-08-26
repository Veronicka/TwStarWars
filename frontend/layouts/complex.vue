<template>
  <div app>
  <v-app id="inspire">
    <toolbar />
    <background-image 
      :image="this.loggedUser ? this.loggedUser.bg_img : 'https://www.uxfree.com/wp-content/uploads/2016/08/macro-plex-4k-motion-background-loop.jpg'" 
      :picture="this.loggedUser ? this.loggedUser.picture : 'https://www.chillplanet.nl/wp-content/uploads/2018/04/no-profile-chillplanet.jpg'" />
    <div>
      <v-tabs
        slot="extension"
        fixed-tabs
        color="transparent">
        <v-spacer></v-spacer>           

        <v-tab href="#mobile-tabs-5-3" nuxt-link to="/" class="primary--text">
          <v-icon color="red darken-2">favorite</v-icon>
        </v-tab>

        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#mobile-tabs-5-1" nuxt-link to="/edit" class="primary--text">
          <v-icon color="purple darken-2">account_box</v-icon>
        </v-tab>

        <!-- <v-tab href="#mobile-tabs-5-2" nuxt-link to="/profile" class="primary--text">
          <v-icon color="green darken-2">account_box</v-icon>
        </v-tab> -->
            
        <v-spacer></v-spacer>
      </v-tabs>
  
      <v-tabs-items class="white elevation-1">
          <v-card>
            <v-card-text>
              <v-content>
                <v-container fluid>
                  <nuxt></nuxt>
                </v-container>
              </v-content>
            </v-card-text>
          </v-card>
      </v-tabs-items>
    </div>
      
    <!-- <le-footer/> -->
  </v-app>
</div>
</template>

<script>
  import Vuex from 'vuex'
  import sidenavLeft from '~/components/sidenav-left'
  import toolbar from '~/components/toolbar'
  import backgroundImage from '~/components/background-image'
  import footer from '~/components/footer'
  import AppApi from '~apijs'
  export default {
    middleware: 'auth',
    components: {
      toolbar,
      backgroundImage,
      sidenavLeft,
      leFooter: footer
    },
    computed:{
      loggedUser () {
        return this.$store.getters.logged_user
      }
    },
    props: ['state'],
    data () {
      return {
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
    methods: {
      logout(){
        AppApi.logout().then(()=>{
          this.$store.commit('SET_LOGGED_USER', null);
          this.$router.push('/login');
        });
      },
    }
  }
</script>