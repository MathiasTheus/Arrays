// Explcando como acessar a posição de uma string ou a posição de um elemento

// a varivel texto possui uma string com 0 a 7 posições(contando com o espaço)
let texto = "Um texto";
console.log(texto[0]);
console.log(texto[1]);
console.log(texto[2]);
console.log(texto[3]);
console.log(texto[4]);
console.log(texto[5]);
console.log(texto[6]);
console.log(texto[7]);

// acessando a posição de um array com numeros
let array= [10,20,30];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//acessando um array com strings
let array_strings = ["MA","TH","EUS"];
console.log(array_strings[0]);
console.log(array_strings[1]);
console.log(array_strings[2]);


// .length diz quantos elementos há dentro de uma string ou array.
// sem o length pc nao consegue comparar numero com string( i < texto ?)
for(i=0;i < texto.length;i++){  // i > texto.length => 0 < 7
    console.log(texto[i]);
}