<template>
	<div>
		<!-- <b-container>
			<b-row>
				<b-col class="tradingview-widget-container">
					<div id="btc"></div>
				  	<div class="tradingview-widget-copyright">
				  		<a href="https://www.tradingview.com/symbols/BITFINEX:BTCUSD/" rel="noopener" target="_blank">
				  			<span class="blue-text">AAPL Chart</span>
				  		</a> by TradingView
				  	</div>
				</b-col>
			</b-row>
		</b-container> -->
		<br><br>
		<div class="tableau">
			<b-table hover bordered responsive :items="items" caption-top>
				<template slot="table-caption"><h4>Your account</h4></template>
			</b-table>
			<br>
			<qrcode :value="getQrCode" :options="{ size: 100 }"></qrcode>
		</div>
		<br><br><br>
	</div>
</template>
<!-- 
<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script> -->
<script>
	export default{
		name: 'mainpage',

		data() {
			return {
				items: [
					{age : 40 }
				]
			}
		},

		methods: {

			balance: function(e){

				this.$store.dispatch('getBalance')

				    .then(response => {
				    	console.log(response);
				    })
			}
		},

		computed: {
			getQrCode(){
				return this.$store.getters.tokenQrCode;
			}
		}
	};
</script>


<style>
	.tableau{
		width: 50%;
		background-color: white;
		padding: 10px;
		border-radius: 15px;
		margin: auto;
		display: flex;
	}

	.table{
		margin-bottom: 0 !important; 
	}

	h4{
		text-align: center;
		color: #181E3D !important;
	}

	canvas{
		margin-top: 50px;
		padding: 10px;
	}
</style>