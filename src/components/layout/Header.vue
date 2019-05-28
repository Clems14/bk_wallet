<!-- <template>
	<div id="app">
		<b-nav>
			<b-nav-item active>Recre</b-nav-item>
			<b-nav-item>Link</b-nav-item>
			<b-nav-item>Another Link</b-nav-item>
			<b-nav-item disabled>Disabled</b-nav-item>
			</b-nav>
	</div>
</template>
 -->

<template>
	<div id="app">
 		<ul class="nav">
 			<!-- <li><a href="">BK WALLET</a></li>
 			<li><a href="">Home</a></li>
 			<li><a href="">About</a></li>
 			<li><a href="">Login</a></li>
 			<li><a href="">Register</a></li> -->

	 		<li class="titre"><router-link to="/"><h1>BK WALLET</h1></router-link></li>
	 		<li class="items" v-if="logged"><router-link to="/register"><h3>Register</h3></router-link></li>
	 		<li class="items" v-if="logged"><router-link to="/login"><h3>Login</h3></router-link></li>
	 		<!-- <li class="items" v-if="loggedIn"><router-link to="{name: 'logout' }"><h3>Log out</h3></router-link></li> -->
 		</ul>
 		<router-view></router-view>
	</div> 	
</template>

<script>
	export default{
		name: 'Header',
		data (){
			return{
				msg: 'This is the header'
			}
		},

		computed: {
			logged(){
				return this.$store.getters.loggedIn;
			}
		}
	};
</script>

<style>
	
	#app {
		font-family: Helvetica;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #0667D0;
		color: #2c3e50;
		height: 100vh;
	}

	.flex-center{
		display: flex;
		justify-content: center;
	}

	.nav {
		display: flex;
		list-style: none;
		border-bottom: 2px solid white;
	}

	.nav a{
		color: white;
		padding: 10px;
		letter-spacing: .1rem;
		text-decoration: none;
	}
	.titre{
		margin-right: auto;
		padding-left: 10px;

	}

	.items{
		padding-right: 20px;
	}

	a:hover{
		text-decoration: none !important;
		color: #181E3D !important;
	}

</style>