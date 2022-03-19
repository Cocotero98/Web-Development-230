
let counter= document.getElementById('counter')
let miliseconds=now.valueOf()
if (localStorage.getItem(0)===null){
    localStorage.setItem(0,miliseconds)
}

localStorage.setItem(1,miliseconds)
//calcular la diferencia
let result=localStorage.getItem(1)-localStorage.getItem(0)
let resultInDays= Math.round(result/1000/60/60/24) 
//redefinir
localStorage.setItem(0,localStorage.getItem(1))



let lastVisit=''
if (resultInDays===0){
    lastVisit=`Last visit: Last 24 hours`
}
else{lastVisit=`Last visit: ${resultInDays} days ago`}

counter.innerText=lastVisit


