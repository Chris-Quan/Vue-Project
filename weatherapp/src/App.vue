import dotenv from  'dotenv'
require('dotenv').config();

<template>
  <router-view/>
</template>

<script>
import axios from "axios";

export default{
  name: "App",
  data(){
    return{
      APIKey: process.env.VUE_APP_WeatherAPI,
      city: "Guelph",
    };
  },
  created() {
    this.getCurrentWeather();
  },
  methods:{
    getCurrentWeather(){
      axios.get(
                "https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=" + this.APIKey
              )
      .then((res) => {
      console.log(res.data);
    });
    }
  }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quickstand", sans-serif;
}
</style>
