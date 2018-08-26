<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-flex xs12 sm4 offset-sm4>
          <v-card>
              <v-card-title><h1>Login</h1></v-card-title>
              <v-card-text>
                <v-container fluid>
                  <v-text-field label="Username" required v-model="username"/>
                  <v-text-field label="Password" type="password" required v-model="password" @keyup.enter="login()"/>
                  <small style="color: red;" v-if="error">Wrong user or password</small>
                </v-container>
              </v-card-text>
              <v-btn class="red--text darken-1" flat @click="close()">Cancel</v-btn>
              <v-btn class="green--text darken-1" flat @click="login()" :loading="loading" :disabled="loading">Login</v-btn>
          </v-card>
        </v-flex>
      </v-container>
    </v-content>
    <le-footer/>
  </v-app>
</template>

<script>

import AppApi from '~apijs'
import footer from '~/components/footer.vue'

export default {
  components: {
    leFooter: footer
  },
  data() {
    return {
      visible: false,
      loading: false,
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    open(){
      this.visible = true;
      console.log('Open');
    },
    close(){
      this.visible = false;
      console.log('Close');
    },
    login(){
      this.loading = true;
      this.error = false;
      AppApi.login(this.username, this.password).then((result)=>{
        var user = result.data;
        if(user){
          this.$store.commit('SET_LOGGED_USER', user);
          this.visible = false;
          console.log('logged');
          this.$router.push('/');
        } else {
          this.error = true;
        }
        this.loading = false;
      });
    },
  },
}
</script>
