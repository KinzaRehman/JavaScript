// alert('works')

    const apiUrl =`http://api.weatherapi.com/v1/current.json?key=388082f6b25c4169979213913262209&q=${fullPlace}&aqi=no`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector(".country").innerHTML ="Country: " + data.location.country;
    })
    .catch(err => {
        console.log(`error${err}`)
        alert(`error${err}`)
        })    

}