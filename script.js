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
        .then((data) => console.log(data)); 
    },
    displayWeather: function(data) {
        //stuff
    }
}