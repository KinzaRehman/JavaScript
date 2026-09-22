//define the metric we need to get

//https://open-meteo.com/en/docs/geocoding-api#api_documentation
//it can take city, country so concatenate the users input 
//For example, Paris, France, Los Angeles, California or Los Angeles, CA. 


const countryInput = document.getElementById("country")
const cityInput =document.getElementById("City")
const search = document.getElementById("submit")
search.addEventListener("click", getWeather)
const theTemperature = document.getElementsByClassName("temperature")




function getWeather() {
    const country = countryInput.value.trim()
    const city = cityInput.value.trim(); 

    //get geo coding information

    const geourl = 
    
}

