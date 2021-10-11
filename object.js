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


getCountries()
.then((data)=>{
    for(i = 0; i < data.length; i++){
        console.log(data[i].name.common)}}) 