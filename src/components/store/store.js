import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, Axios);


export const store = new Vuex.Store({
	state: {
		adressToken: null,
		loginToken: null
	},

	actions: {
		retrieveToken(context, credentials){

			Axios.post('http://18.136.224.43:3001/v1/login', {
				email: credentials.email,
				password: credentials.password,
			})
							.then((response) => {
								console.log(response);
								// console.log(response.data.detail.token);
								this.loginToken = response.data.detail.token;
								console.log(this.loginToken);
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
		}
	}
}); 