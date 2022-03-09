let newElement= document.querySelector('#asd')
let cardsDisplay=document.querySelector('#cardsDisplay')
let listDisplay=document.querySelector('#listDisplay')
let defaultDisplay=true
const displayBusiness= function(business){
    let businessList=document.querySelector('.businessList')
    let businesses= document.querySelector('.business')
    let image=business.image;
    let name=business.name;
    let adress=business.adress;
    let phone=business.phone;
    let website=business.website;
    let card = document.createElement('section');
    let line=document.createElement('section');
    let img=document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', name);
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let p3=document.createElement('a');
    let lineName=document.createElement('p')
    let lineP=document.createElement('p');
    let lineP2=document.createElement('p');
    let lineA=document.createElement('a');
    lineA.setAttribute('href',website);
    p3.setAttribute('href',website);
    p1.innerText=adress;
    p2.innerText=phone;
    p3.innerText=website;
    lineName.innerText=name;
    lineP.innerText=adress;
    lineP2.innerText=phone;
    lineA.innerText=website;
    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    line.appendChild(lineName);
    line.appendChild(lineP);
    line.appendChild(lineP2);
    line.appendChild(lineA);
    businesses.appendChild(card);
    businessList.appendChild(line);
}

const cards= function(){
    document.querySelector('.business').style.display='grid'
    document.querySelector('.businessList').style.display='none'
    // document.querySelector('.businessList').classList.toggle('hide')
    // document.querySelector('.business').classList.toggle('show')
    // console.log(defaultDisplay)
}
const list=function(){
    document.querySelector('.business').style.display='none'
    document.querySelector('.businessList').style.display='block'
    // document.querySelector('.businessList').classList.toggle('show')
    // document.querySelector('.business').classList.toggle('hide')
    // console.log(defaultDisplay)
}

// const display= function(defaultDisplay){
//     if (defaultDisplay===true){
//         document.querySelector('.businessList').classList.add('hide')
//         document.querySelector('.business').classList.add('show')
//     }
//     else{
//         document.querySelector('.businessList').classList.add('show')
//         document.querySelector('.business').classList.add('hide')
//     }
// }


fetch('https://cocotero98.github.io/wdd230/chamber/data/data.json')
    .then(function(respone){return respone.json()})
    .then(function(data){
        let businessList=data['business'];
        console.log(businessList[0]);
        businessList.forEach(displayBusiness);
    })

const trying=function(){console.log('cardsdisplay')}

cardsDisplay.addEventListener('click',cards)
listDisplay.addEventListener('click',list)
// display(defaultDisplay)