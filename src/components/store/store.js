import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, Axios);


export const store = new Vuex.Store({
	state: {
		adressToken: null,
		loginToken: localStorage.getItem('login_token') || null,
		loginEmail: localStorage.getItem('email') || null
	},

	getters: {
		loggedIn(state){
			return state.loginToken  !== null;
		},
	},

	mutations: {

		retrieveAdress(state, adressToken){
			state.adressToken = adressToken;
		},

		retrieveToken(state, loginToken, loginEmail){
			state.loginToken = loginToken;
			state.loginEmail = loginEmail;
		}
	},

	actions: {

		getBalance(context){
			// return new Promise((resolve,reject) => {
				Axios.post('http://18.136.224.43:8080/v1/users/getBalance', {
					email : "fournier@gmail.com",
					token : loginToken,
				})
					.then((response) => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					})
			// })
		},

		retrieveToken(context, credentials){


			return new Promise((resolve, reject) => {
				Axios.post('http://18.136.224.43:8080/v1/login', {
					email: credentials.email,
					password: credentials.password,
				})
								.then((response) => {
									console.log(response);
									const loginToken = response.data.detail.token;
									const loginEmail = credentials.email;
									localStorage.setItem('login_token',loginToken);
									localStorage.setItem('login_email', loginEmail);
									context.commit('retrieveToken',loginToken, loginEmail);
									resolve(response);
									/*if(response.data.status === 'fail'){
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
									}*/
								})
								.catch((error) =>{
									console.log(error);
									reject(error);
								})
			})
		},

		retrieveAdress(context,credentials){			
			Axios.post('http://18.136.224.43:8080/v1/register', {
				fullname: credentials.fullname,
				mobilNumber: credentials.mobilNumber,
				email: credentials.email,
				password: credentials.password,
				repeatPassword: credentials.repeatPassword,
			})
				.then((response)=> {
					console.log(response);
					const adressToken = response.data.addresses;
					localStorage.setItem('adress_token',adressToken);
					context.commit('retrieveAdress',adressToken);
				})
		},

		destroyToken(context){
			if(context.getters.loggedIn){
				return new Promise((resolve, reject)=> {
					Axios.post('/logout')
						.then((response) => {
							localStorage.removeItem('login_token');
							context.commit('destroyToken');
							resolve(response);
							/*if(response.data.status === 'fail'){
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
							}*/
							})
							.catch((error) =>{
								localStorage.removeItem('login_token');
								context.commit('destroyToken');
								reject(error);
							})
				})
			}
		}
	}
}); 