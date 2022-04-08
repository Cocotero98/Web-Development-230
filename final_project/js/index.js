//Open Navigation menu

let navigation=document.querySelector('#nav')
let servicesList=document.querySelector('#services-nav')
let navigationButton=document.querySelector('#btn')
let servicesButton=document.querySelector('#sub-nav')

const toggleMenu=()=>{navigation.classList.toggle('open');console.log('hey')}
const toggleSubMenu=()=>{servicesList.classList.toggle('open')}

navigationButton.addEventListener('click',toggleMenu)
servicesButton.addEventListener('click',toggleSubMenu)

//-----------------------------------------------------------------------

//copyright year

let year=new Date().getFullYear();
let yearSection=document.querySelector('#year');
yearSection.textContent=year;