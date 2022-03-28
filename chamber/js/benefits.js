let message=''
let benefits=document.getElementById('benefits')
let choice=document.querySelectorAll('.member')
let value=''
let lastLoaded=document.getElementById('lastLoaded')
let submitBtn=document.querySelector("#joinBtn")


choice.forEach((i)=>{i.addEventListener('change', (event)=>benefitMessage(event))})
function benefitMessage(i){
        if(i.target.value==='NP'){
            message='NP Membership is for non profit organizations and there is no fee'
        }
        else if(i.target.value==='bronze'){
            message='With the Bronze Membership you get a discount in all the stores in the city for the necessary supplies for your business. The fee is $2.'
        }
        else if(i.target.value==='silver'){
            message='With the Gold Membership you get discounts at various stores in the city and your business is advertised monthly. The fee is $4.'
        }
        else if(i.target.value==='gold'){
            message='With the Gold Membership you get discounts at various stores in the city and your business is advertised weekly. The fee is $6.'
        }
        benefits.innerHTML=`<p>${message}</p>`
}


let timeJoined=''
let updateTime=function(){
    let date= new Date()
    let hour= date.getHours()
let minutes= date.getMinutes()
let seconds= date.getSeconds()
let days= date.getDate()
let month= date.getMonth()
let years= date.getFullYear()
    timeJoined=`${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`
    // lastLoaded.target.value=timeJoined
    lastLoaded.setAttribute('value',timeJoined)
}
submitBtn.addEventListener("click", updateTime)