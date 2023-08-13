<template>
    <div class="info-box">
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
        showTime(){
            const now = new Date();
            this.time = now.toLocaleTimeString();
            /** Working w/ milliseconds */
            // seconds = Math.floor((this.time / 1000) % 60);
            // minutes = Math.floor((this.time / (1000 * 60)) % 60);
            // hours = Math.floor((this.time / (1000 *60 * 60)) % 
        
        }
    },
    mounted(){
        this.fetchData();
        
    },
    created(){
        this.showTime();
        setInterval(this.showTime, 1000);  
    }

}

</script>

<style scoped>
    .info-box {
        position: relative;
        /* display: block; */
        display: grid;
        width: 95%;
        height: 100%;
        border: 1px solid rgb(232, 247, 12);
        float: left;

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
    #time {
        top: 5px;
        grid-template-columns: 1 / span 1;
        color: white;
    }
    #city {
        grid-template-columns: 1 / span 1;
        color: #759ce4;
    }
    #curTemp {
        grid-template-columns: 1 / span 1;
        color: #F17105;
    }
    #windDir {
        grid-template-columns: 1 / span 1;
        color: #357266;
    }
    #windSpd {
        grid-template-columns: 1 / span 1;
        color: #ECBA82;
    }

</style>