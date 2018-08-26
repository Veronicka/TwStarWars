<template>
	<v-layout row wrap app>
		<v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
	  <v-flex xs12 sm6 offset-sm3>
	    <v-card>
	    	<v-form>
	    	<v-card-title centered><h2>{{ title }}</h2></v-card-title>
	    	 <v-card-text>
	    	 	<v-container fluid>
		      <v-text-field
		        v-model="user.first_name"
		        label="First Name"
		        :disabled="disabled"
		        required
		      ></v-text-field>
		      <v-text-field
		        v-model="user.last_name"
		        label="Last Name"
		        :disabled="disabled"
		        required
		      ></v-text-field>
		      <v-text-field
		        v-model="user.username"
		        label="Username"
		        :disabled="disabled"
		        required
		      ></v-text-field>
		      <v-text-field
		        v-model="user.email"
		        type="email"
		        :rules="emailRules"
		        label="E-mail"
		        :disabled="disabled"
		        required
		      ></v-text-field>
		      <v-text-field
		        v-model="user.password"
		        type="password"
		        label="Password"
		        :disabled="disabled"
		        required
		      ></v-text-field>
	    </v-container>
	    <div centered>
		    <v-btn class="green--text darken-1" 
		    	flat 
		    	@click="editFields()">Edit</v-btn>
		    <v-btn class="blue--text darken-1" 
		    	flat 
		    	:disabled="disabled"
		    	@click="save()">Save</v-btn>
    	</div>
    	</v-card-text>
	    </v-form>
	    </v-card>
	  </v-flex>
	</v-layout>
</template>

<script>
import AppApi from '~apijs'
export default {
	middleware: 'auth',
	layout: 'complex',
	computed: {
    loggedUser () {
      return this.$store.getters.logged_user
    }
  },
  mounted () {
  	if(this.loggedUser){
  		this.user = {
  			id: this.loggedUser.id,
  			first_name: this.loggedUser.first_name,
  			last_name: this.loggedUser.last_name,
  			username: this.loggedUser.username,
  			email: this.loggedUser.email,
  			password: this.loggedUser.password,
  		}
  	}
  },
  methods: {
  	editFields() {
  		if(this.loggedUser){
  			this.disabled = false
  			this.title = "Edit User"
  		}
  	},
  	save() {
  		this.title = "User Information"
  		this.disabled = true
  		AppApi.edit_user(this.user).then((response) => {
	      console.log(response.data)
    	})
  	}
  },
  data () {
    return {
    	user: {
    		id: '',
    		first_name: '',
    		last_name: '',
    		username: '',
    		email: '',
    		password: ''
    	},
    	title: "User Information",
    	loading: false,
    	disabled: true,
    	emailRules: [
	      v => /.+@.+/.test(v) || 'E-mail must be valid'
	    ]
    }
  }
}
</script>

<style>
</style>
