// alert('works')
//https://aes.shenlu.me/api#speciescount
///api/v1/speciescount

// https://open.fda.gov/apis/animalandveterinary/
// https://cataas.com/
// https://cataas.com/api/cats?tags=tag1,tag2&skip=0&limit=10
// https://open.fda.gov/apis/animalandveterinary/event/
// https://api.fda.gov/animalandveterinary/event.json

//step 1: get the species from this one 
//https://aes.shenlu.me/api#species

//document.querySelector('#submit').addEventListener("click", getPetCare)

// function getPetCare(event) {
//     event.preventDefault()

//     const pet = document.getElementById("PET").value.toLowerCase()

//     const apiUrl = `https://aes.shenlu.me/api/v1/species`

//     fetch(apiUrl)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         })
// }


//https://data.bloomington.in.gov/api/v3/views/up5q-gxym/query.json

document.querySelector('#submit').addEventListener("click", getPetCare)
function getPetCare() {
    const pet = document.getElementById("PET").value.toLowerCase()

    const apiUrl = `https://api.fda.gov/animalandveterinary/event.json?limit=5`

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log("ERROR:", err)
        })
}