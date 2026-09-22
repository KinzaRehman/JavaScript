
//Goal: create a weather app that takes a uses Country and City and gives the weather! 
//i want the user to input their city and country
//i want the API to take the city and country and return index[0] temperature for the values 
//if no values exist i want error to be 'doesn't exist'
//https://www.weatherapi.com/docs/ 
//website used for API

document.querySelector('#submit').addEventListener("click", getWeather)

function getWeather () {
    event.preventDefault()
    const cityInput = document.getElementById("City").value.toLowerCase()
    const countryInput = document.getElementById("country").value.toUpperCase()
    console.log(countryInput);
    console.log(cityInput)

    const fullPlace = cityInput + ", " + countryInput

//coordiantes by location name 
    const apiUrl =`http://api.weatherapi.com/v1/current.json?key={INSERT API KEY HERE}&q=${fullPlace}&aqi=no`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector(".country").innerHTML ="State: " + data.location.country;
        document.querySelector(".city").innerHTML = "City: " + data.location.name;
        document.querySelector(".date").intterHTML ="Date Updated: " + data.current.last_updated;
        document.querySelector(".temperatureC").innerHTML = "Temp in C: " + data.current.temp_c;
        document.querySelector(".temperatureF").innerHTML = "Temp in F: " + data.current.temp_f;
        document.querySelector(".text").innerHTML = "Condition: " + data.current.condition.text;
    })

}