// Desafio 1
function compareTrue(valor1, valor2){
 if (valor1 === true && valor2 === true){ 
    return true; 
  } else{
    return false;
      }
} 


// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  return(frase.split(' '));
}

// Desafio 4
function concatName(frase) {
  return frase[frase.length - 1] + ', ' +   frase[0] 

}

// Desafio 5
function footballPoints(wins, tie) {
  return (wins * 3) + (tie * 1);  
}



// Desafio 6
function highestCount(number) {
  let maiorNumero = Math.max(...number)
  let count = 0 
    for (numbers of number){
      if(maiorNumero === numbers){
      count += 1 
      }
      
    }
    return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,

};