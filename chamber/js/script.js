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

// Wednesday, 24 July 2020.