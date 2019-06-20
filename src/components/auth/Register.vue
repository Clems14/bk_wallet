<template>
	<div>
		<br><br>
		<b-container>
			<b-form v-if="show" class="formulaire" v-on:submit.prevent="addToWallet">
				<b-row>
					<b-col>
						<b-form-input 
							id="input-1"
				          	v-model="form.fullname"
				          	type="text"
				          	required
				          	placeholder="Fullname"
				          	class="form-control"
			        	></b-form-input>
			        </b-col>
			        <b-col>
			        	<b-form-input 
							id="input-2"
				          	v-model="form.mobilephone"
				          	type="number"
				          	required
				          	placeholder="Phone Number"
				          	class="form-control"
			        	></b-form-input>
			        </b-col>
			    </b-row>
			    <br>
			    <b-row>
			    	<b-col>
			    		<b-form-input 
							id="input-3"
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
							id="input-4"
				          	v-model="form.password"
				          	type="password"
				          	required
				          	placeholder="Password"
				          	class="form-control"
			        	></b-form-input>
			        </b-col>
			    </b-row>
			    <br>
			    <b-row>
			    	<b-col>
			    		<b-form-input 
							id="input-5"
				          	v-model="form.repeatPassword"
				          	type="password"
				          	required
				          	placeholder="Confirm your password"
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
		name: 'register',
		data() {
		    return {
		    	form: {
		        	fullname: null,
					mobileNumber: null,
					email: null,
					password: null,
					repeatPassword: null
		        },
		        show: true
		      }
		    },
		    methods: {
		      	addToWallet: function(e){

		      			this.$store.dispatch('retrieveAdress', {
				      		fullname: this.form.fullname,
							mobileNumber: this.form.mobileNumber,
							email: this.form.email,
							password: this.form.password,
							repeatPassword: this.form.repeatPassword
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