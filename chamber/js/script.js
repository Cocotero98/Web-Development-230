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

