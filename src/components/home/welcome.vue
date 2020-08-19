<template>
    <div>
    <div class="hero">
        <div class="container">
            <div action="#" class="find-location">
                <input type="text" placeholder="Find your location..." v-model="search">
                <input type="submit" v-on:click="getWeather" value="Find">
            </div>
        </div>
    </div>
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <div class="today forecast">
                    <div class="forecast-header">
                        <div class="day" v-text="current_observation.forecast.day"></div>
                        <div class="date" v-text="getDate"></div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="location" v-text="searchLocation"></div>
                        <div class="location">sunrise: <span v-text="current_observation.astronomy.sunrise"></span> sunset: <span v-text="current_observation.astronomy.sunset"></span></div>
                        <div class="degree">
                            <div class="num"><span v-text="current_observation.condition.temperature"></span><sup>o</sup>F</div>
                            <div class="forecast-icon">
                                <img src="@/assets/images/icons/icon-1.svg" alt="" width=90> 
                            </div>	
                        </div>                      
                        <span>High: <span v-text="current_observation.forecast.high"></span></span>
                        <span>Low: <span v-text="current_observation.forecast.low"></span></span>
                    </div>
                </div>
                <div class="forecast" v-for="forcast in future_forecast" :key="forcast">
                    <div class="forecast-header">
                        <div class="day" v-text="forcast.day"></div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img src="@/assets/images/icons/icon-3.svg" alt="" width=48>
                        </div>
                        <div class="degree"><span v-text="forcast.high"></span><sup>o</sup>F</div>
                        <small><span v-text="forcast.low"></span><sup>o</sup></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
var CryptoJS = require("crypto-js");
var $ = require( "jquery" );

export default {
    name: "Welcome",
    data(){
        return{
            searchLocation: '',
            search: 'kathmandu',
            location:{
                city: '',
                country: '',
                lat: '',
                long: '',
                region: '',
                timezone_id: ''
            },
            current_observation: {
                astronomy:{
                    sunset: '',
                    sunrise: ''
                },
                condition:{
                    temperature: '',
                },
                forecast:{
                    day:'',
                    high:'',
                    low:'',
                    code: 0,
                    text: ''
                },
                todate: ''
            },
            future_forecast:[]
        }
    },
    methods:{
        getWeather(){
            var self=this;
            var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
            var method = 'GET';
            var app_id = '0iDWJqjO';
            var consumer_key = `dj0yJmk9SkpnN1lIVkRNWk1ZJmQ9WVdrOU1HbEVWMHB4YWs4bWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTQz`;
            var consumer_secret = `19b0bdc8f31649e604e9da11b6b3aaf0cecfa465`;
            var concat = '&';
            var query = {'location': this.search+',np', 'format': 'json'};
            var oauth = {
                'oauth_consumer_key': consumer_key,
                'oauth_nonce': Math.random().toString(36).substring(2),
                'oauth_signature_method': 'HMAC-SHA1',
                'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
                'oauth_version': '1.0'
            };
            var merged = {}; 
            $.extend(merged, query, oauth);
            // Note the sorting here is required
            var merged_arr = Object.keys(merged).sort().map(function(k) {
            return [k + '=' + encodeURIComponent(merged[k])];
            });
            var signature_base_str = method 
            + concat + encodeURIComponent(url)
            + concat + encodeURIComponent(merged_arr.join(concat));

            var composite_key = encodeURIComponent(consumer_secret) + concat;

            var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
            var signature = hash.toString(CryptoJS.enc.Base64);

            oauth['oauth_signature'] = signature;
            var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
            return [k + '="' + oauth[k] + '"'];
            }).join(',');
            $.ajax({
            url: url + '?' + $.param(query),
            async: false,
            headers: {
                'Authorization': auth_header,
                'X-Yahoo-App-Id': app_id 
            },
            method: 'GET',
            success: function (result) {
                const res = result;
                if(res.forecasts.length > 1){
                    self.future_forecast = [];
                    self.current_observation.astronomy = res.current_observation.astronomy;
                    self.location = res.location;
                    self.searchLocation = self.location.city +' , '+self.location.country
                    self.current_observation.condition = res.current_observation.condition
                    self.current_observation.forecast = res.forecasts[0]
                    for(var i=1;i< 7;i++){
                        self.future_forecast.push(res.forecasts[i]);
                    }
                }
            },
            error: function(req) {
                alert(req.responseText);
            }
            });
        }
    },
    computed:{
        getDate(){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            return today;
        }
    },
    mounted(){
        this.getWeather();
    }
}
</script>