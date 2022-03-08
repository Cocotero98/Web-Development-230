let newElement= document.querySelector('#asd')

const doStuf = function(data){
    console.log(data[0].image);
    let image= data[0].image;
    let img= document.createElement('img')
    img.setAttribute('src', image);
    newElement.appendChild(img)

}
fetch('https://cocotero98.github.io/wdd230/chamber/data/data.json')
.then((response)=>{return response.json()})
.then(doStuf)