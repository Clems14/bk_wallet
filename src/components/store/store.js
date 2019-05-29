import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, Axios);


export const store = new Vuex.Store({
	state: {
		loginToken: localStorage.getItem('login_token') || null,
		loginEmail: localStorage.getItem('email') || null,
		bchAdress: localStorage.getItem('bch_token') || null,
		btcAdress: localStorage.getItem('btc_token') || null,
		eosAdress: localStorage.getItem('eos_token') || null,
		ethAdress: localStorage.getItem('eth_token') || null,
		ltcAdress: localStorage.getItem('ltc_token') || null,
		xrpAdress: localStorage.getItem('xrp_token') || null,
	},

	getters: {
		loggedIn(state){
			return state.loginToken  !== null;
		},

		getToken(state){
			return state.loginToken;
		},

		getEmail(state){
			return state.loginEmail;
		},

		getBch(state){
			return state.bchAdress;
		},

		getBtc(state){
			return state.btcAdress;
		},

		getEos(state){
			return state.eosAdress;
		},

		getEth(state){
			return state.ethAdress;
		},

		getLtc(state){
			return state.ltcAdress;
		},

		getXrp(state){
			console.log(state.xrpAdress);
			return state.xrpAdress;
		},
	},

	mutations: {

		getBalance(state, bchAdress, btcAdress, eosAdress, ethAdress, ltcAdress, xrpAdress){},

		retrieveAdress(state, adressToken){
			state.adressToken = adressToken;
		},

		retrieveToken(state, loginToken, loginEmail){
			state.loginToken = loginToken;
			state.loginEmail = loginEmail;
		},

		
	},

	actions: {

		getBalance(context){
			return new Promise((resolve,reject) => {
				Axios.post('http://18.136.224.43:8080/v1/users/getBalance', {
					email : this.getters.getEmail,
					token : this.getters.getToken
				})
					.then((response) => {
						console.log(response);
						const bchAdress = response.data.details.balance[0].bch.address;
						const btcAdress = response.data.details.balance[0].btc.address;
						const eosAdress = response.data.details.balance[0].eos.memo;
						const ethAdress = response.data.details.balance[0].eth.address;
						const ltcAdress = response.data.details.balance[0].ltc.address;
						const xrpAdress = response.data.details.balance[0].xrp.tag;

						localStorage.setItem('bch_token', bchAdress);
						localStorage.setItem('btc_token', btcAdress);
						localStorage.setItem('eos_token', eosAdress);
						localStorage.setItem('eth_token', ethAdress);
						localStorage.setItem('ltc_token', ltcAdress);
						localStorage.setItem('xrp_token', xrpAdress);

						context.commit('getBalance', bchAdress,  btcAdress, eosAdress, ethAdress, ltcAdress, xrpAdress);

						resolve(response);
					})
					.catch(error => {
						console.log(error);
						reject(response);
					})
			})
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