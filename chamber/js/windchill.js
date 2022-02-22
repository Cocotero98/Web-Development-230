let temperatureInt=''
let wSpeedInt=''
let temperature=document.getElementById('temperature').innerHTML
let windSpeed=document.getElementById('windSpeed').innerHTML

wSpeedInt=parseFloat(windSpeed)
temperatureInt=parseInt(temperature,10)

let f=function(c){
    return (c*1.8)+32
}
let farenheit=f(temperatureInt)

let m=function (k){
    return  k*0.6214
}
let miles= m(wSpeedInt)

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
let resultInFarenheit=windChillCalculator(farenheit,miles)
let windChillInC=c(resultInFarenheit)
document.getElementById('windChill').innerHTML=`Wind Chill: ${windChillInC.toFixed(1)}°C`