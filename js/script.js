let daynames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aougust",
    "September",
    "October",
    "November",
    "December",
]

let d= new Date();
let dayname= daynames[d.getDay()];
let month= d.getMonth
let date= d.getDate
let year= d.getFullYear
let hour= d.getHours
let minute= d.getMinutes
let seconds= d.getSeconds

let fulldate=`${month}'/'${date}'/'${year}' '${hour}':'${minute}':'${seconds}`

document.getElementById("currenttime").textContent=fulldate