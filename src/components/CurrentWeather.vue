<template>
  <div class="current-weather">
		<h3>Temperature 🌡️ {{currentTemperature}} °C</h3>
		<h3>Humidity 🧪 {{currentHumidity}} %</h3>
		<h3>CO2 💨 {{currentCO2}} ppm</h3>
	</div>
</template>

<script>
export default {
	name:"CurrentWeather",
	props:["currentTemperature", "currentHumidity", "currentCO2"]
}
</script>

<style>
</style>