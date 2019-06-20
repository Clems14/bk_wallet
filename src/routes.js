import Main from './components/marketing/Main'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'


const routes = [
	{ path: '/', name: 'home', component: Main},
	{ path: '/register', name: 'register', component: Register},
	{ path: '/login', name: 'login', component: Login},
	{ path: '/#account', name: 'account', component : Main},
	{ path: '/logout', name: 'logout', component: Logout},
];

export default routes;