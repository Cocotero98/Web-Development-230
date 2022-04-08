let url='https://api.openweathermap.org/data/2.5/onecall?lat=-34.7224779&lon=-58.5739594&units=imperial&exclude=&appid=0cd66e608ce7503372a31896aad04b0e'
let weatherDiv=document.querySelector('#weather-cards');
let forecastOne=document.querySelector('#forecast-one');
let forecastTwo=document.querySelector('#forecast-two');
let forecastThree=document.querySelector('#forecast-three');
const time= new Date();
let dayOfTheMonth=time.getDate();
let monthNumber=time.getMonth();
let dayOfWeek=time.getDay();

//Define a function to change the day name according to the day number of week
function changeDayName(dayNumber){
    if (dayNumber===7){
        dayNumber=0;
    }
    else if (dayNumber===8){
        dayNumber=1;
    };
    switch(dayNumber){
    case 0:
        return 'Sun';
    case 1:
        return 'Mon';
    case 2:
        return 'Tues';
    case 3:
        return 'Wed';
    case 4:
        return 'Thur';
    case 5:
        return 'Fri';
    case 6:
        return 'Sat';
}
}

let dayName=changeDayName(dayOfWeek);

let fullDate=`<strong>${dayName} ${monthNumber}/${dayOfTheMonth}</strong>`
let currentDate=document.createElement('p');
currentDate.setAttribute('id','current-date')
currentDate.innerHTML=fullDate;
let oneMoreDay=dayOfWeek+1;
let dayAfterName=changeDayName(oneMoreDay);
let twoMoreDay=oneMoreDay+1;
let secondDayName=changeDayName(twoMoreDay);
let ThreeMoreDay=twoMoreDay+1;
let thirdDayName=changeDayName(ThreeMoreDay);

let tomorrowFullDate=`${dayAfterName}`;
let secondDayFullDate=`${secondDayName}`;
let thirdDayFullDate=`${thirdDayName}`;

let tomorrow=document.createElement('p');
tomorrow.innerHTML=`<strong>${tomorrowFullDate}</strong>`;
tomorrow.setAttribute('class','day')
forecastOne.appendChild(tomorrow);
let dayAfter=document.createElement('p');
dayAfter.innerHTML=`<strong>${secondDayFullDate}</strong>`;
dayAfter.setAttribute('class','day')
forecastTwo.appendChild(dayAfter);
let thirdDay=document.createElement('p');
thirdDay.innerHTML=`<strong>${thirdDayFullDate}</strong>`;
thirdDay.setAttribute('class','day')
forecastThree.appendChild(thirdDay);


fetch(url)
.then((response)=> response.json())
.then((jsonObject)=>{
    const iconsrc= `https://openweathermap.org/img/w/${jsonObject.current.weather[0].icon}.png`;
    let temperature=jsonObject.current.temp;
    let description=jsonObject.current.weather[0].description;
    let humidity=jsonObject.current.humidity;
    let image=document.createElement('img');
    image.setAttribute('src',iconsrc);
    image.setAttribute('alt',description);
    let newDiv=document.createElement('div')
    let tempP=document.createElement('p');
    tempP.innerText=`${temperature}°`;
    let descP= document.createElement('p');
    descP.innerText=description;
    let humP= document.createElement('p');
    humP.innerText=humidity;
    weatherDiv.appendChild(currentDate);
    weatherDiv.appendChild(image);
    newDiv.appendChild(tempP);
    newDiv.appendChild(descP);
    newDiv.appendChild(humP);
    weatherDiv.appendChild(newDiv);
    let dayOneTemp=`${jsonObject.daily[1].temp.day.toFixed(0)}°`;
    let tomorrowTemp=document.createElement('p');
    tomorrowTemp.innerText=dayOneTemp;
    tomorrowTemp.setAttribute('class','temp')
    let tomorrowImg=document.createElement("img")
    let tomorrowSrc=`https://openweathermap.org/img/w/${jsonObject.daily[1].weather[0].icon}.png`
    tomorrowImg.setAttribute('src',tomorrowSrc)
    let tomorrowDesc=jsonObject.daily[1].weather[0].description;
    tomorrowImg.setAttribute('alt',tomorrowDesc)
    forecastOne.appendChild(tomorrowImg)
    forecastOne.appendChild(tomorrowTemp)
    let dayTwoTemp=`${jsonObject.daily[2].temp.day.toFixed(0)}°`;
    let dayTwoP=document.createElement('p');
    dayTwoP.innerText=dayTwoTemp;
    dayTwoP.setAttribute('class','temp')
    let dayTwoImg=document.createElement("img")
    let dayTwoSrc=`https://openweathermap.org/img/w/${jsonObject.daily[2].weather[0].icon}.png`
    dayTwoImg.setAttribute('src',dayTwoSrc)
    let dayTwoDesc=jsonObject.daily[2].weather[0].description;
    dayTwoImg.setAttribute('alt',dayTwoDesc);
    forecastTwo.appendChild(dayTwoImg);
    forecastTwo.appendChild(dayTwoP);

    let dayThreeTemp=`${jsonObject.daily[3].temp.day.toFixed(0)}°`;
    let dayThreeP=document.createElement('p');
    dayThreeP.innerText=dayThreeTemp;
    dayThreeP.setAttribute('class','temp')
    let dayThreeImg=document.createElement("img")
    let dayThreeSrc=`https://openweathermap.org/img/w/${jsonObject.daily[3].weather[0].icon}.png`
    dayThreeImg.setAttribute('src',dayThreeSrc)
    let dayThreeDesc=jsonObject.daily[3].weather[0].description;
    dayThreeImg.setAttribute('alt',dayThreeDesc);
    forecastThree.appendChild(dayThreeImg);
    forecastThree.appendChild(dayThreeP);
})
