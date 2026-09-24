// alert('works')
//www.thecocktaildb.com/api/json/v1/1/random.php

document.querySelector('#submit').addEventListener("click", getFruit)

function getFruit(event) {
    event.preventDefault()

    const name = document.querySelector(".fruit").value.toLowerCase().trim()

    const apiUrl = `https://www.fruityvice.com/api/fruit/${name}`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector(".one").innerHTML = "This fruit come from the Family: " + data.family
            document.querySelector(".twp").innerHTML = "name of Fruit: " + data.name
            document.querySelector(".tres").innerHTML = "Genus: " + data.genus
            document.querySelector(".quatro").innerHTML = "Calories:" + data.nutritions.calories
            document.querySelector(".cinco").innerHTML = "Carbohydrates: " + data.nutritions.carbohydrates
            document.querySelector(".sies").innerHTML = "Fat: " + data.nutritions.fat
            document.querySelector(".siete").innerHTML = "Protein: " +data.nutritions.protein
            document.querySelector(".ocho").innerHTML = "Sugar: " + data.nutritions.sugar

        })
        .catch(error => {
            console.log(error)
        })
}
