<template>
<b-container id="checker">
	<b-row>
		<b-col id="temp" class="icon-box">
			<p class="temp">Temperature</p>
			<div 
				v-if="currentTemperature < 20">
				<img class="icon"
					src="https://1.bp.blogspot.com/-SD2SLEBhKbs/Wm1y1HxnzXI/AAAAAAABJ7w/2wWMAg_JodMxomuStn9QuVMD3OCuUapfwCLcBGAs/s800/snowman_yukidaruma_sandan.png"
					alt= "warmer">
				<p>Cold!</p>
			</div>

			<div 
				v-else-if="currentTemperature > 26">
				<img class="icon"
					src="https://1.bp.blogspot.com/-iRYEw5CioiY/UYns8PZ51sI/AAAAAAAARbk/b0ryOTxxRBs/s800/taiyou.png"
					alt= "cooler">
				<p>Hot!</p>
			</div>

			<div 
				v-else>
				<img class="icon"
					src="https://4.bp.blogspot.com/-AEWA4yV514Q/Whu2W36W6_I/AAAAAAABIhA/OI6lwSbjdy0abvsGIRZ9CpzU4tur74D_gCLcBGAs/s800/kazetooshi_house_good.png"
					alt= "good">
				<p>Good Temp!</p>
			</div>
		</b-col>

		<b-col id="humi" class="icon-box" border="dark">
			<p class="humi">Humidity</p>
			<div 
				v-if="currentHumidity > 70">
				<img class="icon"
					src="https://2.bp.blogspot.com/-Q9FceITXyzg/VpjBvZ4gc-I/AAAAAAAA28g/TS3PM4z_Cx0/s800/shikke_atsui.png"
					alt= "dry">
				<p>Humid!</p>
			</div>

			<div 
				v-else-if="currentHumidity < 40">
				<img class="icon"
					src="https://2.bp.blogspot.com/-YsE9qUK3NiU/VfS6QTJOiLI/AAAAAAAAxOw/6Xovg6TNcqI/s800/hair_edage_kansou.png"
					alt= "moist">
				<p>Dry!</p>
			</div>

			<div 
				v-else>
				<img class="icon"
					src="https://3.bp.blogspot.com/-e1fFAGLQaq4/UzAK7QZqsPI/AAAAAAAAea4/gepz0wMfmkQ/s800/biyou_tsurutsuru.png"
					alt= "good">
				<p>Optimal Humidity!</p>
			</div>
		</b-col>
		<b-col id="CO2" class="icon-box">
			<p class="CO2">CO2</p>

			<div 
				v-if="currentCO2 >= 1000">
				<img class="icon"
					src="https://1.bp.blogspot.com/-PWoqcqACMtE/UR2iwNiZCQI/AAAAAAAAMx0/alx5ukNo5Bw/s1600/open_close_window.png"
					alt= "air-out">
				<p>Too much CO2!</p>
			</div>

			<div 
				v-else>
				<img class="icon"
					src="https://4.bp.blogspot.com/-nwgj7Uh-ooI/WGnPaIeQD1I/AAAAAAABA6M/Y8TUclXA93Q5WTT81nd4DdJep5fV1H8ywCLcB/s800/room_living_clean.png"
					alt= "good">
				<p>Good Air!</p>
			</div>
		</b-col>
	</b-row>
</b-container>
</template>

<script>
export default {
	name:"Checker",
	props:["currentTemperature", "currentHumidity", "currentCO2"]
}
</script>

<style>
#checker{
	text-align: center;
}
.icon {
	height: 100px;
}
.icon-box{
	display: inline-block;
	width:200px;
	height:150px;
	margin:2em 0;
  position: relative;
	padding: 0.5em 1.5em;
  border-top: solid 2px black;
	border-bottom: solid 2px black;
}
.icon-box:before, .icon-box:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: black;
}
.icon-box:before {left: 10px;}
.icon-box:after {right: 10px;}
.icon-box p {
    margin: 0; 
    padding: 0;
}


</style>