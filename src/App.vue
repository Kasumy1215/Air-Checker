<template>
  <b-container id="app" class="d-flex justify-content-end">
    <h1 class="header">Air 👀 Checker</h1>
		<h3>You are {{selectedValue}}.</h3>
		<user
			v-model="selectedValue"
			:items="items"
			:showEmptyItem="true"
			:disabled="false"
			:ignoreCase="true"
			emptyItemValue="SAMPLE_EMPTY_VALUE"
			emptyItemText=""
			placeholder="Please select..."
			name="user-action"
			idKey="id"
			valueKey="name"
			textKey="name"
			filterTargetKey="name"
		/>

    <currentweather
      :currentTemperature="currentTemperature"
      :currentHumidity="currentHumidity"
      :currentCO2="currentCO2"
    />

    <checker
      :currentTemperature="currentTemperature"
      :currentHumidity="currentHumidity"
      :currentCO2="currentCO2"
    />
  </b-container>
</template>

<script>
// import axios from 'axios';
import {getStationsData, getAccessToken} from './retrieve-data';
import CurrentWeather from './components/CurrentWeather';
import Checker from './components/Checker';
import User from './components/User';

export default {
  name: 'App',
  components: {
    currentweather:CurrentWeather,
    checker:Checker,
    user:User
  },
  data: () => ({
		currentTemperature: 0,
		currentHumidity:0,
    currentCO2:0,
    selectedValue: null,
    items: [
      { id: 1, name: "Doing WorkOut 💪" },
      { id: 2, name: "Studying 🏫" },
      { id: 3, name: "Working at Desk 👔" },
      { id: 4, name: "Working Physicaly 💪" },
      { id: 5, name: "Relaxing 😃" },
      { id: 6, name: "Sleeping 🛌" }
    ]
  }),
  created: function () { //should use normal function, should not use arrow function! when use "this.****"
    console.log("--------created------------");
    this.getCurrentData();
  },
  methods:{
    getCurrentData() {
      console.log("--------methods--------");
      getAccessToken()
      .then((token) => {
        console.log("Yay");
        return getStationsData(token);
        })
      .then((station) =>{
        const currentData = station.data.body.devices[0].dashboard_data;
        console.log(`currentData = ${currentData}`);
        this.currentTemperature = currentData.Temperature;
        this.currentHumidity = currentData.Humidity;
        this.currentCO2 = currentData.CO2;

      });
    }
  }
};
</script>

<style>
body{
    background-color:moccasin;
}
#app {
  font-family: 'Saira Semi Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin:0 auto;
  /* background: radial-gradient(#F2B9A1, #EA6264) fixed; */
    background-color:moccasin;

}
.header{
  height:80px;
  background-color: black;
  color:cornsilk;
  font-size-adjust: 200px; 
}
h1{
  font-size: 50px;
  margin: 0;
}
ul{
  list-style: none;

}
</style>
