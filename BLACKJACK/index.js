//VERIFICAR EDAD
//let edadJugador = prompt('INTRODUCE TU EDAD');
//if (edadJugador < 18 ){
//    alert('Eres menor lo siento no puedes jugar')
// //   //CON LOCATION PODEMOS REDIRECCIONAR A OTRA PAGINA
//    location.href = 'https://www.youtube.com/'
//} else{
//    alert('Bienvenido, a jugar!')
//}




//ARRAY
let cards = [] //LISTA ORDENADADA DE OBJETOS
let sum = 0
//VALOR FALSO PARA QUE SI OBTIENE BLACKJACK LA PAGINA LE CAMBIE EL VALOR A VERDADERO
let tieneBlackjack = false;
let sigueJugando = false;
let mensaje = "";
let mensajeJuego = document.getElementById('jugar');
let sumaTotal = document.getElementById('Total');
let cartasMano = document.getElementById('cartas');

let player = {
    nombreJugador: 'Alejandro',
    dinero: 120
}


let creditosPartida = document.getElementById('creditos');
creditosPartida.textContent = player.nombreJugador + ': ' + player.dinero +'€';

function cartaRandom(){
    let numeroCarta = Math.floor(Math.random()*13) + 1;
    if (numeroCarta > 10 ){
        return 10;
    } else if (numeroCarta === 1){
        return 11;
    } else{
        return numeroCarta;
    }

}

function ComenzarJuego(){
    sigueJugando = true;
    let carta1 = cartaRandom();
    let carta2 = cartaRandom();
    cards = [carta1, carta2]; //LISTA ORDENADADA DE OBJETOS    
    sum = carta1 + carta2;
    reiniciarJuego();
}

function reiniciarJuego(){

    cartasMano.textContent = 'Cartas: '
    for(let i = 0; i < cards.length; i++){
        cartasMano.textContent += cards[i] + ' ';
    }
    sumaTotal.textContent = 'Total: ' + sum;
    if (sum < 21 ){
        mensaje = '¿Quieres pedir carta?';
    } else if (sum === 21){
        mensaje = '¡BLACKJACK!';
        tieneBlackjack = true;
    } else {
        mensaje = 'ESTAS FUERA';
        sigueJugando = false;
    }
    mensajeJuego.textContent = mensaje;
}

function nuevaCarta(){
    //SI EL JUGADOR PASA DE 21 LO DETECTA CON LA SIGUIENTE CONDICION Y NO DEJA PEDIR MAS CARTAS
    if (sigueJugando === true && tieneBlackjack === false){
        let card = cartaRandom();
        sum += card;
        cards.push(card);
        console.log(cards);
        reiniciarJuego();
    }
}
