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

let fullDate=`${dayName} ${monthNumber}/${dayOfTheMonth}`

let oneMoreDay=dayOfWeek+1;
console.log(oneMoreDay)
let dayAfterName=changeDayName(oneMoreDay);
let twoMoreDay=oneMoreDay+1;
let secondDayName=changeDayName(twoMoreDay);
let ThreeMoreDay=twoMoreDay+1;
let thirdDayName=changeDayName(ThreeMoreDay);

let tomorrowFullDate=`${dayAfterName}`;
let secondDayFullDate=`${secondDayName}`;
let thirdDayFullDate=`${thirdDayName}`;

console.log(dayName)

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
    let newDiv=document.createElement('div')
    let tempP=document.createElement('p');
    tempP.innerText=temperature;
    let descP= document.createElement('p');
    descP.innerText=description;
    let humP= document.createElement('p');
    humP.innerText=humidity;
    let currentDate=document.createElement('h3');
    currentDate.setAttribute('id','current-date')
    currentDate.innerText=fullDate;
    weatherDiv.appendChild(currentDate);
    weatherDiv.appendChild(image);
    newDiv.appendChild(tempP);
    newDiv.appendChild(descP);
    newDiv.appendChild(humP);
    weatherDiv.appendChild(newDiv);
    let tomorrow=document.createElement('p');
    tomorrow.innerText=tomorrowFullDate;
    forecastOne.appendChild(tomorrow);
    let dayAfter=document.createElement('p');
    dayAfter.innerText=secondDayFullDate;
    forecastTwo.appendChild(dayAfter);
    let thirdDay=document.createElement('p');
    thirdDay.innerText=thirdDayFullDate;
    forecastThree.appendChild(thirdDay);
})
