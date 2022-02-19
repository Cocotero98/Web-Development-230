let temperatureInt=''
let wSpeedInt=''
let temperature=document.getElementById('temperature').innerHTML
let windSpeed=document.getElementById('windSpeed').innerHTML

wSpeedInt=parseFloat(windSpeed)
temperatureInt=parseInt(temperature,10)

let windChillCalculator= function(t,s){
    let windCill=''
    if (t<=10 && s>=4.8){
        windCill=35.74+0.6215*t-35.75*s**0.16+0.4275*t*s**0.16
        return windCill
    }else{return 'N/A'}
}
document.getElementById('windChill').innerHTML=windChillCalculator(temperatureInt,wSpeedInt)