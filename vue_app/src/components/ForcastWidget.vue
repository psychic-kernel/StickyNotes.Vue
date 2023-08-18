<template>
    <div class="info-box">
        <span id="time">{{ time }}</span> <br>
        <span id="city">Boise, Idaho</span>
        <span id="curTemp" >{{ currentTemp }}&deg;</span> <br>
        <span style="color: var(--color-babyblue)">Wind Direction: 
            <p id="windDir"> {{ windDirection }} &deg;</p>
        </span><br>
        <span id="windSpd">Wind Speed: 
            <p style="color: var(--color-fire)">{{ windSpeed }} mph</p>
        </span>
       
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
        padding: 5px;
        display: grid;
        width: 10em;
        height: 100%;
        /* border: 1px solid rgb(232, 247, 12); */
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
        margin-bottom: 10px;
        

    }
    #time {
        top: 5px;
        color: var(--color-neon-green);
    }
    #city {
        color: var(--color-babyblue);
    }
    #curTemp {
        color: #F17105;
    }
    #windDir {
        color: var(--color-fire);
    }
    #windSpd {
        color: var(--color-babyblue);
    }

</style>