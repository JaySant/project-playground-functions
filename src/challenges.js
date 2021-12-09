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
function catAndMouse(mouse, cat1 , cat2) {
  let comparaCat1 = Math.abs(mouse - cat1) 
  let comparaCat2 = Math.abs( mouse - cat2) 

  console.log(comparaCat1,comparaCat2)
  
  if(comparaCat1 < comparaCat2 ){
    return 'cat1';
  }
  else if(comparaCat2 < comparaCat1){
    return 'cat2';
  }else if(comparaCat1 === comparaCat2){
    return "os gatos trombam e o rato foge";
  }
    
}

catAndMouse(1, 0, 2)
// Desafio 8
function fizzBuzz(numeros) {
  let novaArr = [];

for ( confereNumeros of numeros ){
    if ( confereNumeros % 3 === 0 && confereNumeros % 5 === 0 ){
          novaArr.push("fizzBuzz")
    }
    if( confereNumeros % 3 !== 0 && confereNumeros % 5 !== 0 ){
          novaArr.push("bug!")
    }    
    if( confereNumeros % 3 == 0 && confereNumeros % 5 !== 0){
          novaArr.push("fizz")
    }
    if( confereNumeros % 5 == 0 && confereNumeros % 3 !== 0){
          novaArr.push("buzz")
    }
    
  }   
  return novaArr;
}

// Desafio 9
function encode(frase) {
  let stringPronta = '';

  for (letras of frase){
    if(letras === 'a'){
       stringPronta += 1;
    }else if(letras === 'e'){
       stringPronta += 2;
    
    }else if(letras === 'i'){
       stringPronta += 3;
    
    }else if(letras === 'o'){
       stringPronta += 4;
    
    }else if(letras === 'u'){
       stringPronta += 5;
    }
    else {
      stringPronta += letras;
    }
  }
  console.log(stringPronta)    
  return stringPronta;

}

// encode('hello there!')



function decode(frase2) {
  let stringPronta2 = '';

  for (letras2 of frase2){
    if(letras2 === '1'){
       stringPronta2 += 'a';

    }else if(letras2 === '2'){
       stringPronta2 += 'e';
    
    }else if(letras2 === '3'){
       stringPronta2 += 'i';
    
    }else if(letras2 === '4'){
       stringPronta2 += 'o';
    
    }else if(letras2 === '5'){
       stringPronta2 += 'u';
    }
    else {
      stringPronta2 += letras2;
    }
  }
  console.log(stringPronta2)    
  return stringPronta2;

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