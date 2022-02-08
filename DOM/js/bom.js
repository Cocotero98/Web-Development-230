const input=document.querySelector('input')
const list=document.querySelector('ul')
const button=document.querySelector('button')


button.addEventListener('click', function(){
    if (input.value!=''){
    let li=document.createElement('li')
    let btn=document.createElement('button')
    let values= input.value
    input.value=''
    li.innerHTML=values
    btn.innerHTML='❌'
    li.appendChild(btn)
    list.appendChild(li)
    btn.onclick=function(e){
        list.removeChild(li)
    }
    input.focus()
    }
    })