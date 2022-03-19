//-----------------------------------------Spot Lights json---------------------------------------------//
let spotLightOne=document.querySelector('.spotlightOne')
let spotLightTwo=document.querySelector('.spotlightTwo')
let spotLightThree=document.querySelector('.spotlightThree')
let spots=[spotLightOne,spotLightTwo,spotLightThree]

fetch('https://cocotero98.github.io/wdd230/chamber/data/data.json')
    .then(function(respone){return respone.json()})
    .then(function(data){
        let businessList=data['business'];
        console.log(businessList[0]);
        let golden=businessList.filter(function(business){return business.membership==='gold'})
        let silver=businessList.filter(function(business){return business.membership==='silver'})
        let goldenAndSilver=[]
        silver.map(function(i){goldenAndSilver.push(i)})
        golden.map(function(i){goldenAndSilver.push(i)})
        console.log(goldenAndSilver)
        spots.forEach(function(i){
        let randomBusiness=goldenAndSilver[Math.floor(Math.random() * goldenAndSilver.length)]
        let name=randomBusiness.name;
        let phone=randomBusiness.phone; 
        let website=randomBusiness.website;
        let adress=randomBusiness.adress;   
        let image=randomBusiness.image;
        console.log(i.firstChild)
        i.innerHTML=`<h3>${name}</h3>
                    <img src="${image}" alt="${name}">
                    <p>${phone}<br>${adress}</p>
        `
        })
  
        // console.log(randomBusiness)  
    })