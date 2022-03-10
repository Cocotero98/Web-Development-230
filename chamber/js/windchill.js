let apiURL='https://api.openweathermap.org/data/2.5/weather?id=3841490&appid=0cd66e608ce7503372a31896aad04b0e'

let temperatureInt=''
let wSpeedInt=''
// let temperature=document.getElementById('temperature').innerHTML
// let windSpeed=document.getElementById('windSpeed').innerHTML


let f=function(c){
    return (c*1.8)+32
}
let farenheit=f(temperatureInt)

let m=function (k){
    return  k*0.6214
}
let miles= m(wSpeedInt)
let k=function (m){
    return m/0.6214
}
let c=function(f){
    return (f-32)/1.8
}

let windChillCalculator= function(t,s){
    let windChill=''
    if (t<=50 && s>=3.0){
        windChill=35.74+(0.6215*t)-35.75*(s**0.16)+(0.4275*t)*(s**0.16)
        return windChill
    }else{return 'N/A'}
}



fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let farenheitTemperature=jsObject.main.temp
    let windSpeed=jsObject.wind.speed
    let windChill=windChillCalculator(farenheitTemperature,windSpeed)
    let windChillInC=c(windChill)
    let celsiusTemperature=c(farenheitTemperature)
    let wSpeedKm=k(windSpeed)
    document.querySelector('#temperature').textContent = `${celsiusTemperature.toFixed(0)}°C`;
    document.querySelector('#windSpeed').textContent=`${wSpeedKm.toFixed(1)}km/h`
    document.querySelector('#windChill').textContent=`${windChillInC}°C`
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#weatherIcon').textContent = iconsrc;
    document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
    document.querySelector('#weatherIcon').setAttribute('alt', desc);
    // document.querySelector('figcaption').textContent = desc;
  });
// wSpeedInt=parseFloat(windSpeed)
// temperatureInt=parseInt(temperature,10)


// let resultInFarenheit=windChillCalculator(farenheit,miles)
// let windChillInC=c(resultInFarenheit)
// document.getElementById('windChill').innerHTML=`Wind Chill: ${windChillInC.toFixed(1)}°C`