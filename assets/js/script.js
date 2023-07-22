function Search () {

    var city = $('#city-input')[0].value.trim();

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c3e58f33e5518e314aebe144f75e0982&units=imperial';
    fetch(requestUrl)
    .then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
        $("#current-city")[0].textContent = city + " (" + dayjs().format('M/D/YYYY') + ")"
       
            })
        }
    })
}
   $("#search-button").click(function(event){
    event.preventDefault();
    Search();
})
