
document.querySelector('#submit').addEventListener("click", getWeather)

function getWeather () {
    event.preventDefault()
    
    const countryInput = document.getElementById("CityCountry").value.toLowerCase()
    console.log(countryInput);


    const apiUrl =`http://api.openweathermap.org/geo/1.0/direct?q=${countryInput}&appid=52d3da7e875efdb76b73e13d0b543ca0`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })





}