let quantElefantesString = document.querySelector('.quantidade-elefantes');
let quantElefantes = parseInt(quantElefantesString.innerHTML)
let contadorElefantesString = document.querySelector('.contador');
let contadorElefantes = parseInt(contadorElefantesString.innerHTML);
const rodarImg = document.querySelector('.img-elefante')

document.querySelector('#incomoda').addEventListener('click', function(){
    if(quantElefantes % 2 === 0){
        contar()
    }else{
        avancar()   
    }
})

function contar(){
    contadorElefantes = contadorElefantes - 1;
    contadorElefantesString.innerHTML = contadorElefantes; 
    rodarImg.classList.add('rodar')

    if(contadorElefantes === 0){
        rodarImg.classList.remove('rodar')
        avancar()
    }
}

function avancar(){
    quantElefantes = quantElefantes + 1;
    contadorElefantes = quantElefantes;
    quantElefantesString.innerHTML = quantElefantes;
    contadorElefantesString.innerHTML = quantElefantes;
}