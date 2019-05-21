<template>
	<!-- <div>
		<b-container class="formulaire">
			<b-form id="signin_form" @submit="connect" action="#" method="post" v-on:submit.prevent="connect">
				<br>
				<b-row>
					<b-col>
						<b-form-input type="email" name="email" class="form-control" v-model="Log.email" id="email" placeholder="Email"></b-form-input>
					</b-col>
				</b-row>
				<br>
				<b-row>
					<b-col>
						<b-form-input type="password" name="password" class="form-control" v-model="Log.password" id="password" placeholder="Password"></b-form-input>
					</b-col>
				</b-row>
				<br>
				<div>
					<div class="d-flex justify-content-center">
						<b-form-input class="btn btn-primary decal justify-content-center" type="submit" value="Sign in"></b-form-input>
					</div>
				</div>
			</b-form>
		</b-container>
	</div> -->
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
						/*let newLog = {
							email : this.form.email,
							password : this.form.password
						};
						console.log(newLog);*/

						/*axios.post('http://18.136.224.43:3001/v1/login',newLog)
							.then((response) => {
								console.log(response);
								if(response.data.status === 'fail'){
									alert('Authentification fail');
									window.location.href='./sign_in.html'
								}else if(response.data.status === "0"){
									alert("User doesn't exist");
									window.location.href='./sign_in.html'
								}else{
									var token = response.data.detail.token;
									console.log(token);
									alert("Sign in success");
									window.location.href='./bkwallet.html'
								}
							})*/
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