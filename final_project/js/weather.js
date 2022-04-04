let url='https://api.openweathermap.org/data/2.5/onecall?lat=-34.7224779&lon=-58.5739594&units=imperial&exclude=&appid=0cd66e608ce7503372a31896aad04b0e'
let weatherDiv=document.querySelector('#weather-cards')

fetch(url)
.then((response)=> response.json())
.then((jsonObject)=>{
    console.log(jsonObject);
    const iconsrc= `https://openweathermap.org/img/w/${jsonObject.current.weather[0].icon}.png`;
    let temperature=jsonObject.current.temp;
    let description=jsonObject.current.weather[0].description;
    let humidity=jsonObject.current.humidity;
    let image=document.createElement('img');
    image.setAttribute('src',iconsrc);
    image.setAttribute('alt',description);
    let tempP=document.createElement('p');
    tempP.innerText=temperature;
    let descP= document.createElement('p');
    descP.innerText=description;
    let humP= document.createElement('p');
    humP.innerText=humidity;
    weatherDiv.appendChild(image);
    weatherDiv.appendChild(tempP);
    weatherDiv.appendChild(descP);
    weatherDiv.appendChild(humP);
})
