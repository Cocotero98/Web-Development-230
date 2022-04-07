let templeSection=document.querySelector('#temple-cards');
let firstSection=document.querySelector('#first_part');
let secondSection=document.querySelector('#second_part');


fetch('https://cocotero98.github.io/wdd230/final_project/data/data.json')
.then(response=>response.json())
.then(jsonData=>{
    const temples=jsonData.temples;
    temples.forEach(createCard);
})

const createCard=function(temple){
    let card=document.createElement('div');
    let firstPart=document.createElement('div');
    firstPart.setAttribute('id','first_part');
    let secondPart=document.createElement('div');
    secondPart.setAttribute('id','second_part');
    let img=document.createElement('img');
    let name=document.createElement('h3');
    let ordinanceInfo=document.createElement('p');
    let adress=document.createElement('p');
    let tel=document.createElement('p');
    let services=document.createElement('p');
    let btnOne=document.createElement('button');
    let btnTwo=document.createElement('button');
    let buttons=document.createElement('div');
    let like=document.createElement('img');
    let likeNumber=document.createElement('p');
    if(localStorage.getItem(temple.name)===null){
        likeNumber.innerText=''
     }
     else{
         likeNumber.innerText=localStorage.getItem(temple.name)
     } 
    like.setAttribute('src',temple.like);
    like.setAttribute('alt','Like');
    buttons.appendChild(btnOne);
    buttons.appendChild(btnTwo);
    buttons.appendChild(like);
    buttons.appendChild(likeNumber);
    buttons.setAttribute('id','like-section')
    img.setAttribute('src',temple.image);
    img.setAttribute('alt',temple.name);
    name.innerText=temple.name;
    ordinanceInfo.innerText=temple.ordinance_schedule;
    adress.innerText=temple.adress
    tel.innerText=temple.telephone;
    let historyLi=temple.history.map((line)=>`<li>${line}</li>`);
    services.innerText=temple.services;
    let closuresLi=temple.closure.map((line)=>`<li>${line}</li>`);
    btnOne.innerText=1;
    btnTwo.innerText=2;
    btnOne.setAttribute('id','firstBtn');
    btnTwo.setAttribute('class','secondBtn')
    card.appendChild(img);
    card.appendChild(name);
    firstPart.appendChild(ordinanceInfo);
    firstPart.appendChild(services);
    firstPart.appendChild(adress);
    firstPart.appendChild(tel);
    secondPart.innerHTML=`<p>Important dates:</p><ul>${historyLi.join('')}</ul><p>Closures:</p><ul>${closuresLi.join('')}</ul>`;
    card.appendChild(firstPart);
    card.appendChild(secondPart);
    like.addEventListener('click',()=>{
        if(localStorage.getItem(temple.name)===null){
           localStorage.setItem(temple.name,1) 
           likeNumber.innerText=localStorage.getItem(temple.name)
        }
        else{
            let newNumber=parseInt(localStorage.getItem(temple.name))+1;
            localStorage.setItem(temple.name,newNumber)
            likeNumber.innerText=localStorage.getItem(temple.name)
        }
    })
    btnOne.addEventListener('click',()=>{
        firstPart.style.display='block';
        secondPart.style.display='none';
        btnOne.style.backgroundColor='#721121';
        btnOne.style.color='white';
        btnTwo.style.backgroundColor='white';
        btnTwo.style.color='#721121';
    });
    btnTwo.addEventListener('click',()=>{
        firstPart.style.display='none';
        secondPart.style.display='block';  
        btnTwo.style.backgroundColor='#721121';
        btnTwo.style.color='white';  
        btnOne.style.backgroundColor='white';
        btnOne.style.color='#721121';              
    })
    card.appendChild(buttons);
    templeSection.appendChild(card);
}


//----------------------------Toggle menu for info displayed-------------------------------------

// let firstBtn=document.querySelector('button')
// const secondBtn=document.querySelector('.secondBtn');
// let firstSection=document.querySelector('#first_part');
// let secondSection=document.querySelector('#second_part');
// console.log(secondBtn)
// firstBtn.addEventListener('click',showFirstSection);
// secondBtn.addEventListener('click',showSecondSection);