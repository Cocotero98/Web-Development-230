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

// Wednesday, 24 July 2020.