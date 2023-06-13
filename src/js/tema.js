const botaoRosa = document.getElementById('toogle-rosa');

if(localStorage.getItem('data-theme') == 'dark'){
    botaoRosa.checked = true;
}

botaoRosa.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');

    if(botaoRosa.checked){
        mudarParaRosa()
        
    }else{
        mudarParaVerde()
        
    }
})