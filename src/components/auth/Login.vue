<template>
	<div>
		<br>
		<br>
		<b-container>
		<b-form v-if="show" class="formulaire" v-on:submit.prevent="connect">
      		<b-row>
      			<b-col>
			        <b-form-input
			          id="input-1"
			          v-model="form.email"
			          type="email"
			          required
			          placeholder="Email"
			          class="form-control"
			        ></b-form-input>
			    </b-col>
	    	</b-row>
			<br>
      		<b-row>
      			<b-col>
			        <b-form-input
			          id="input-2"
			          type="password"
			          v-model="form.password"
			          required
			          placeholder="Password"
			          class="form-control"
			        ></b-form-input>
			    </b-col>
		    </b-row>
		    <div class="decal">
      			<b-button type="submit" variant="primary">Submit</b-button>
      		</div>
    	</b-form>
    </b-container>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
		    return {
		    	form: {
		        	email: null,
		        	password: null
		        },
		        show: true
		      }
		    },
		    methods: {
		      connect: function(e){

				    this.$store.dispatch('retrieveToken', {
				      	email: this.form.email,
				      	password: this.form.password
				    })

				    .then(response => {
				    	this.$router.push({ name: 'home'});
				    })
				}
		    }
	};
</script>

<style>
	b-button{
		justify-content: center !important;
		margin-left: none !important;	
	}

	.formulaire{
		margin-left: auto;
		margin-right: auto;
		background-color: #F5F7FA;
		padding: 20px;
		width: 30%;
		border-radius: 15px;
	}
	.decal{
		text-align: center;
		padding-top: 10px;
	}
</style>