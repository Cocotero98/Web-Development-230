let newElement= document.querySelector('#asd')
let business= document.querySelector('.business')

const doStuf = function(data){
    console.log(data[0].image);
    let image= data[0].image;
    let img= document.createElement('img')
    img.setAttribute('src', image);
    newElement.appendChild(img)
}
// const displayBusiness= function(business){
//     let image=business.image;
//     let name=business.name;
//     let adress=business.adress;
//     let phone=business.phone;
//     let website=business.website;
//     let card = document.createElement('section');
//     let img=document.createElement('img');
//     img.setAttribute('src', image);
//     img.setAttribute('alt', name);
//     let p1=document.createElement('p');
//     let p2=document.createElement('p');
//     let p3=document.createElement('p')
//     p1.innerText=adress;
//     p2.innerText=phone;
//     p3.innerText=website;
//     card.appendChild(img);
//     card.appendChild(p1);
//     card.appendChild(p2);
//     card.appendChild(p3);
//     business.innerHTML=phone;
// }


fetch('https://cocotero98.github.io/wdd230/chamber/data/data.json')
.then((response)=>{if (response.ok){return response.json(), console.log('yes')}else{console.log('error')}})
// .then(doStuf())
