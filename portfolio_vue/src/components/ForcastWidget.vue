<template>
    <div class="widget-container">
        <span id="time">{{ time }}</span> <br>
        <span id="city">Boise, Idaho {{ cityLoc }}</span>
        <span id="curTemp" >{{ currentTemp }}&deg;</span> <br>
        <span id="windDir">Wind Direction: {{ windDirection }} &deg;</span><br>
        <span id="windSpd">Wind Speed: {{ windSpeed }} mph</span>
       
        <!-- weather icons -->
        <!-- <font-awesome-icon :icon="['fas', 'cloud']" /> -->
    </div>
</template>

<script>
import axios from 'axios';

// const {current_weather} = data;
// const {temperature, windspeed} = current_weather;
/**
 * 
 * 
 */
const endPoint_1 = 'https://api.open-meteo.com/v1/forecast?latitude=43.6135&longitude=-116.2035&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=GMT&forecast_days=16';


export default {
    data(){
        return {
            currentTemp: null,
            windSpeed: null,
            windDirection: null,
            time: null
            // cTemp: '',
            // fTemp: '',
        }
    },     
    methods:  {
        fetchData() {
            axios.get(endPoint_1)
                .then(response => {
                    this.currentTemp = response.data.current_weather.temperature;
                    this.windSpeed = response.data.current_weather.windspeed;
                    this.windDirection = response.data.current_weather.wind = response.data.current_weather.winddirection;
                    // this.time = response.data.current_weather.time;
                })
                .catch(error => {
                    console.log(error);
            });
        },
        formatTime(){

            setInterval(() =>{
                return this.time;
            },600);
        }
    },
    mounted(){
        this.fetchData();
        this.formatTime();

    }

}

</script>

<style scoped>
    .widget-container {
        position: relative;
        display: block;
        width: 200px;
        height: 20%;
        border: 1px solid grey;
        float: right;

    }
    font-awesome-icon {
        color: red;
    }
    span {
        position: relative;        
        font-weight: 900;
        font-size: 1.3em;
        bottom: 1em;
        left: 5px;
        

    }
    #city {
        color: #759ce4;
    }
    #curTemp {
        color: #F17105;
    }
    #windDir {
        color: #357266;
    }
    #windSpd {
        color: #ECBA82;
    }

</style>