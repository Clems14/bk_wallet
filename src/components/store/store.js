import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, Axios);


export const store = new Vuex.Store({
	state: {
		loginToken: localStorage.getItem('login_token') || null,
		loginEmail: localStorage.getItem('login_email') || null,
		bchAdress: localStorage.getItem('bch_token') || null,
		btcAdress: localStorage.getItem('btc_token') || null,
		eosAdress: localStorage.getItem('eos_token') || null,
		ethAdress: localStorage.getItem('eth_token') || null,
		ltcAdress: localStorage.getItem('ltc_token') || null,
		xrpAdress: localStorage.getItem('xrp_token') || null,
		bchBalance: localStorage.getItem('bch_balance') || null,
		btcBalance: localStorage.getItem('btc_balance') || null,
		eosBalance: localStorage.getItem('eos_balance') || null,
		ethBalance: localStorage.getItem('eth_balance') || null,
		ltcBalance: localStorage.getItem('ltc_balance') || null,
		xrpBalance: localStorage.getItem('xrp_balance') || null,
		transaction: localStorage.getItem('table_transaction') || []
	},

	getters: {
		loggedIn(state){
			// console.log(state.loginToken);
			return state.loginToken  !== null;
		},

		getToken(state){
			return state.loginToken;
		},

		getEmail(state){
			// console.log(state.loginEmail);
			return state.loginEmail;
		},

		getBch(state){
			return state.bchAdress;
			// return "testtt";
		},

		getBtc(state){
			return state.btcAdress;
			// return "test";
		},

		getEos(state){
			return state.eosAdress;
		},

		getEth(state){
			return state.ethAdress;
			// return "casse";
		},

		getLtc(state){
			return state.ltcAdress;
		},

		getXrp(state){
			return state.xrpAdress;
		},

		getbchBalance(state){
			return state.bchBalance;
		},

		getbtcBalance(state){
			return state.btcBalance;
		},

		geteosBalance(state){
			return state.eosBalance;
		},

		getethBalance(state){
			return state.ethBalance;
		},

		getltcBalance(state){
			return state.ltcBalance;
		},

		getxrpBalance(state){
			return state.xrpBalance;
		},

		getTable(state){
			return state.transaction;
		}
	},

	mutations: {

		getBalance(state, bchAdress, btcAdress, eosAdress, ethAdress, ltcAdress, xrpAdress){},

		getHistory(state, transaction){},

		retrieveAdress(state, adressToken){
			state.adressToken = adressToken;
		},

		retrieveToken(state, loginToken, loginEmail){
			state.loginToken = loginToken;
			state.loginEmail = loginEmail;
		},

		
	},

	actions: {

		getHistory(context, credentials){
			return new Promise((resolve,reject) => {
				Axios.post('http://18.136.224.43:8080/v1/transaction/tx_history', {
					email: this.getters.getEmail,
					token: this.getters.getToken,
					type: credentials.type,
				})
					.then((response) =>{
						console.log(response);

						const transaction = response.data.details.transactions;

						resolve(response.data.details.transactions);
					})

					.catch((error) => {
						console.log(error);
					})
			})
		},

		getBalance(context){
			return new Promise((resolve,reject) => {
				Axios.post('http://18.136.224.43:8080/v1/users/getBalance', {
					email : this.getters.getEmail,
					token : this.getters.getToken,
					
				})
					.then((response) => {
						console.log(response);
						const bchAdress = response.data.details.balance[0].bch.address;
						const btcAdress = response.data.details.balance[0].btc.address;
						const eosAdress = response.data.details.balance[0].eos.memo;
						const ethAdress = response.data.details.balance[0].eth.address;
						const ltcAdress = response.data.details.balance[0].ltc.address;
						const xrpAdress = response.data.details.balance[0].xrp.tag;
						const bchBalance = response.data.details.balance[0].bch.balance;
						const btcBalance = response.data.details.balance[0].btc.balance;
						const eosBalance = response.data.details.balance[0].eos.balance;
						const ethBalance = response.data.details.balance[0].eth.balance;
						const ltcBalance = response.data.details.balance[0].ltc.balance;
						const xrpBalance = response.data.details.balance[0].xrp.balance;

						localStorage.setItem('bch_token', bchAdress);
						localStorage.setItem('btc_token', btcAdress);
						localStorage.setItem('eos_token', eosAdress);
						localStorage.setItem('eth_token', ethAdress);
						localStorage.setItem('ltc_token', ltcAdress);
						localStorage.setItem('xrp_token', xrpAdress);
						localStorage.setItem('bch_balance', bchBalance);
						localStorage.setItem('btc_balance', btcBalance);
						localStorage.setItem('eos_balance', eosBalance);
						localStorage.setItem('eth_balance', ethBalance);
						localStorage.setItem('ltc_balance', ltcBalance);
						localStorage.setItem('xrp_balance', xrpBalance);

						context.commit('getBalance', bchAdress,  btcAdress, eosAdress, ethAdress, ltcAdress, xrpAdress, bchBalance, btcBalance, eosBalance, ethBalance, ltcBalance, xrpBalance);

						resolve(response);
					})
					.catch(error => {
						console.log(error);
						reject(error);
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
									console.log(loginEmail);
									localStorage.setItem('login_email', loginEmail);
									localStorage.setItem('login_token',loginToken);
									console.log('login_email');
									context.commit('retrieveToken',loginToken, loginEmail);
									if(response.data.status === 'fail'){
										alert('Authentification fail');
										window.location.href='/login'
									}else if(response.data.status === "0"){
										alert("User doesn't exist");
										window.location.href='/register'
									}else{
										
										alert("Sign in success");
										
										window.location.href='/'
									}
									resolve(response);
									
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

					if(response.data.status === 'fail'){
						alert('Fail for register');
						window.location.href='/register'
					}else{
						alert("Sign up success");
						window.location.href='/login'
					}
				})

				.catch((error) => {
					console.log(error);
				})
		},

		doWithdraw(context,credentials){
			return new Promise((resolve, reject) => {
				Axios.post('http://18.136.224.43:8080/v1/users/withDraw', {
					email: credentials.email,
					tokenName: credentials.option,
					token: this.getters.getToken,
					to: credentials.to,
					value: credentials.value,
					message: credentials.message,
				})

								.then((response) => {
									console.log( credentials.email + credentials.option + this.getters.getToken + credentials.to + credentials.value + credentials.message);
									console.log(response);
									resolve(response);
								})
								.catch((error) =>{
									console.log(error);
									reject(error);
								})
			})
		},

		doTransfer(context, credentials){
			return new Promise((resolve, reject) => {

					/*console.log(this.getters.getEmail)
					console.log(credentials.to)
					console.log(credentials.select)
					console.log(credentials.value)
					console.log(this.getters.getToken)*/
				Axios.post('http://18.136.224.43:8080/v1/users/transfer' , {
					from: this.getters.getEmail,
					to: credentials.to,
					tokenName: credentials.select,
					value: credentials.value,
					token: this.getters.getToken,
				})

					.then((response) => {
						console.log(response);
						resolve(response);
					})

					.catch((error) => {
						console.log(error);
						reject(error);
					})
			})
		}
	}
}); 