//define the metric we need to get

//https://open-meteo.com/en/docs/geocoding-api#api_documentation
//it can take city, country so concatenate the users input 
//For example, Paris, France, Los Angeles, California or Los Angeles, CA. 


//asking the country and city and combining this to match the API stuff

let countryInput = document.getElementById("country")
let cityInput =document.getElementById("City")

let cityCountry = cityInput +", " + countryInput

const search = document.getElementById("submit")
search.addEventListener("click", getWeather)
const theTemperature = document.getElementsByClassName("temperature")

//API link stuff 

const url ="https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json"
const apiKey = 



function getWeather() {
    const fullArea= cityCountry.value.trim()

    //get geo coding information

    const geourl = 
    
}

