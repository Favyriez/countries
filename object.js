

const url = 'https://restcountries.com/v3.1/all';

// fetch (url)
// .then(response => response.json())
// .then(data => {
//     console.log(data[0].capital, 
//             data[0].population)
// })
// .catch(error =>console.log(error))

const getCountries=async function(){
    const data=await fetch(url);

    const json=await data.json()

    return json
}

const country = document.querySelector('.country')
getCountries()
.then((data)=>{
    var list = ''
    for(i = 0; i < data.length; i++){
        // console.log(data[i].name.common)
        list += `<li>${data[i].name.common}</li>`
        console.log(country)
        }
    country.innerHTML=list;})
        
// var newEl = document.createElement('li')
// var newText = document.createTextNode(getCountries())
// newEl.appendChild(newText)
