let dado = document.querySelector('#dado')
let btn = document.querySelector('#jogar')
let num;
let teste = false;

//pega um num aleatorio de acordo com min e max
function getAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

btn.addEventListener('click', function(e){
    //pega num aleatório
    num = getAleatorio(1,6)


    //checa qual o numero e joga na tela
    switch(num){
        case 1:
            dado.setAttribute('src', 'img/1.jpg')
            break;
        case 2:
            dado.setAttribute('src', 'img/2.jpg')
            break;
        case 3:
            dado.setAttribute('src', 'img/3.jpg')
            break;
        case 4:
            dado.setAttribute('src', 'img/4.jpg')
            break;
        case 5:
            dado.setAttribute('src', 'img/5.jpg')
            break;
        case 6:
            dado.setAttribute('src', 'img/6.jpg')
            break;
            default: console.write('deu erro')
    }


    e.preventDefault();
})