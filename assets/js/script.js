var searchBar = document.querySelector("city-input");

var activeSearch = $(searchBar).val();

var apiKey = "c3e58f33e5518e314aebe144f75e0982";

function currentWeather(activeSearch){
    var requestCurrentWeather = `api.openweathermap.org/data/2.5/forecast?q=${activeSearch}&appid=${apiKey}`;
    fetch(requestCurrentWeather)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        document.getElementById('current-temp').textContent = `Temp: ${data.main.temperature}`
        document.getElementById('current-humidity').textContent = `Humidity: ${data.main.humidity}`
        document.getElementById('current-wind').textContent = `Wind: ${data.wind.speed}`
        console.log(data);
    })  
}

var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function(e){
    e.preventDefault()
    var searchBar = $("#city-input")
    console.log(searchBar)
    var activeSearch = searchBar[0];
    currentWeather(activeSearch);
})