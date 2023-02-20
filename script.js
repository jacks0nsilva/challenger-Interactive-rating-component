let options = document.querySelectorAll('.opcoes')
let button = document.querySelector('.botao')
let cardOne = document.querySelector('.card-one')
let cardTwo = document.querySelector('.card-two')
let inputs = document.querySelectorAll('.inputs')
let result = document.querySelector('.result-select p')

options.forEach((item, index) =>{

    item.addEventListener('click',()=>{
        removeActive()
        item.classList.add('active')
    })
})

function removeActive(){
    options.forEach((item)=>{
        item.classList.remove('active')
    })
}

button.addEventListener('click',()=>{
    inputs.forEach((item)=>{
        if (item.checked == true){
            cardOne.classList.add('disable-card')
            cardTwo.classList.remove('disable-card')
            result.innerText = `You selected ${item.value} out of 5`
        }
    })
})