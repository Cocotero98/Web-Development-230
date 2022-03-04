let message=''
let benefits=document.getElementById('benefits')
let choice=document.querySelectorAll('.member')
// function benefitMessage(){
// if(i.value==='NP'){
//     message='NP Membership is for non profit organizations and there is no fee'
//     console.log(message)
// }
// else if(i.value==='bronze'){
//     message='With the Bronze Membership you get a discount in all the stores in the city for the necessary supplies for your business. The fee is $2.'
// }
// else if(choice.value==='silver'){
//     message='With the Gold Membership you get discounts at various stores in the city and your business is advertised monthly. The fee is $4.'
// }
// else if(choice.value==='gold'){
//     message='With the Gold Membership you get discounts at various stores in the city and your business is advertised weekly. The fee is $6.'
// }
// }
let value=''
function checking(){
choice.forEach((i)=>{
    if (i.checked){
        value= i.value
        console.log(value)
    }
})}
// checking()
console.log(choice)
choice.forEach((i)=>{console.log(i.value)})
choice.forEach((i)=>{i.addEventListener('change', (event)=>benefitMessage(event))})
function benefitMessage(i){console.log(i.target.value)
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
