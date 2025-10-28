// matriz vazia
const cars = [];

console.log(cars);
// add 3 elementos em uma matriz vazia
cars[0] = "Peugeot208";
cars[1] = "Volvo";
cars[2] = "Fluence";
console.log(cars);

//length retorna o comprimento de uma matriz
console.log(cars.length); // car possui 3 elementos


//acessando o ultimo elemento da matriz
console.log(cars[cars.length -1]);

//variavel carros armazena o comprimento do array cars que eh 3
let carros = cars.length;
for(let i = 0; i < carros; i++){
    console.log(cars[i]);
}

// comparei direto o indice com array cars => i(0) < cars.length(3)
for(let i = 0; i< cars.length; i++){
    console.log(cars[i]);
}

// O i é uma variável de controle do loop — ela vai “andando” pelos índices do array,
//  e o cars[i] usa esse valor pra acessar cada item da lista.