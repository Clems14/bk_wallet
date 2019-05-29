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
			<div>
				<div>
					<qrcode :value="getQrCode" :options="{ size: 100 }"></qrcode>
					<qrcode :value="getQrCode1" :options="{ size: 100 }"></qrcode>
				</div>
				<qrcode :value="getQrCode2" :options="{ size: 100 }"></qrcode>
				<qrcode :value="getQrCode3" :options="{ size: 100 }"></qrcode>
				<qrcode :value="getQrCode4" :options="{ size: 100 }"></qrcode>
				<qrcode :value="getQrCode5" :options="{ size: 100 }"></qrcode>
			</div>
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

		

		computed: {
			getQrCode(){
				console.log(this.$store.getters.getBch);
				return this.$store.getters.getBch;
			},

			getQrCode1(){
				console.log(this.$store.getters.getBtc);
				return this.$store.getters.getBtc;
			},

			getQrCode2(){
				console.log(this.$store.getters.getEos);
				return this.$store.getters.getEos;
			},

			getQrCode3(){
				console.log(this.$store.getters.getEth);
				return this.$store.getters.getEth;
			},

			getQrCode4(){
				console.log(this.$store.getters.getLtc);
				return this.$store.getters.getLtc;
			},

			getQrCode5(){
				console.log(this.$store.getters.getXrp);
				return this.$store.getters.getXrp;
			},
		},

		mounted() {

			balance:{

				this.$store.dispatch('getBalance');
			}
		},
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