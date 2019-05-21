import Main from './components/marketing/Main'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


const routes = [
	{ path: '/', name: 'home', component: Main},
	{ path: '/register', name: 'register', component: Register},
	{ path: '/login', name: 'login', component: Login},
];

export default routes;