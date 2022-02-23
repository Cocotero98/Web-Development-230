document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
const year=now.getFullYear()
document.getElementById('year').innerHTML=year
document.getElementById('time').innerHTML=fulldateUK

function toggleMenu(){
    document.querySelector('#nav').classList.toggle('open');
}
const x= document.getElementById('btn');
x.onclick=toggleMenu;


//Add show class to banner

function toggleBanner(){
    document.querySelector('#banner').classList.toggle('show');
}
const banner=document.getElementById('banner');
const day=now.getDay()


if(day===1){
    toggleBanner()
    console.log('hi')
}
else if(day===2){
    toggleBanner()
}

let imagesToLoad= document.querySelectorAll('source[data-src]');
const changeAttribute= function(image){
    image.setAttribute('srcset',image.getAttribute('data-src'))
    image.onload=()=>{image.removeAttribute('data-src')}
}

const imgOptions={
    threshold: 0,
    rootMargin: '0px 0px 400px 0px'
}

window.onload=()=>{
    if ('IntersectionObserver' in window){
        const observer= new IntersectionObserver((items,observer)=>{
            items.forEach((item)=>{
                if (item.isIntersecting){
                    changeAttribute(item.target);
                    observer.unobserve(item.target);
                }
            })
        },imgOptions);
        imagesToLoad.forEach((img)=>{
        observer.observe(img)})
    }
}


let counter= document.getElementById('counter')
let times=0
let miliseconds=now.valueOf()
localStorage.setItem(times,miliseconds)
//pero podes poner un if value=='' {crear+}
localStorage.setItem(0,miliseconds)//borrar una vez creado para que no se redefina. Pero no se va a crear en la compu de otra persona :(
localStorage.setItem(1,miliseconds)
//calcular la diferencia

//redefinir
localStorage.setItem(0,localStorage.getItem(1))

times++
console.log(times)
let calcluar= miliseconds/1000/60/60/24
let bigger=''
let secondBigger=''
let previous=-1
function forEachKey() {

    for (let i = 0; i < localStorage.length; i++) {
        let current=localStorage.key(i)
        if(current>previous){
            bigger=current
            secondBigger=previous
        }
        previous=localStorage.key(i)
    }
  }
let biggerValue=localStorage.getItem(bigger)
let previousValue=localStorage.getItem(previous)
let difference= biggerValue-previousValue
let inDays=difference/1000/60/60/24
let rounded =Math.round(inDays)
console.log(difference)




counter.innerText=`Last visit: ${rounded} days ago`