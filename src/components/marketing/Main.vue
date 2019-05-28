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
		<br><br><br>
		<div>
			<b-table hover :items="items"></b-table>
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
		}
	};
</script>