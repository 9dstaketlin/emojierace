
function desenhaChegada(){
    fill("white");
    rect(350, 0, 10, 400);
    fill("black");
    for (let yatual= 0; yatual< 400; yatual +=20){
      rect(350, yatual, 10, 10);
      
    }
  }
 
  function defineVencedor(){
    textAlign(CENTER, CENTER);
 for (let i =0; i < contagem; i++){
   if (xJogador[i] > 350) {
     text(jogador[i] + " Venceu!!", width / 2, height/ 2);
  noLoop();
   }
 }
  }
 }
 
 function keyReleased() {
   for (let i = 0; i < contagem; i++) {
     if (key == teclas[i]) {
       xJogador[i] += random(30);
     }
   }
 }