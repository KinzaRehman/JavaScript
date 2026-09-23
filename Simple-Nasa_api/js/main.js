//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//alert('Works')


document.querySelector('button').addEventListener('click', getContent);


function getContent() {
    const date = document.querySelector('.date').value
    const apiLink = `https://api.nasa.gov/planetary/apod?api_key=SCn4NERv89ag42l9R8WlWVeJPQTs5IlI7a8YH7gH
&date=${date}`
fetch(apiLink)
    .then(res => res.json())
    .then(data => {
            console.log(data);      
            document.querySelector('.title').innerHTML = "Title: " + data.title
            document.querySelector('.dates').innerHTML = "The  sky on this date was: " + data.date
            document.querySelector('img').src= data.hdurl
            document.querySelector('.explanation').innerHTML = data.explanation;
            if (data.media_type ==='image') {
                document.querySelector('img').src = data.hdurl;
            }else {
                document.querySelector('iframe').src = data.hdurl
            }

        })  
        .catch(err => {
            console.log(`error${err}`)
        })
       
}


// data.title
// data.date
// data.exp
