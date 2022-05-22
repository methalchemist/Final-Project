//add api calls and stuff
// api call: https://api.openweathermap.org/data/2.5/weather?zip=11365,us&units=imperial&appid=328591a3004546ba6ef2e4b92cf93390
let weather = {
    apiKey: "328591a3004546ba6ef2e4b92cf93390",
    getWeather: function(zip) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" 
        + zip 
        +",&units=imperial&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        //console.log(name, temp, humidity, speed, icon, description);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°F";
        //document.querySelector(".weather-icon").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
        document.querySelector(".wind").innerText = speed + " mph";
        //document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    search: function() {
        this.getWeather(document.querySelector(".search-bar").value);
        //TODO: add error handling and check for valid zip code before calling api
        if (document.querySelector(".search-bar").value.length == 5 && document.querySelector(".search-bar").value.match(/^[0-9]+$/)) {
            weather.search();
        } else {
            alert("Please enter a valid zip code");
        }
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
});