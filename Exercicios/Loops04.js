let num = [1,2,3,4,5];

function maiorNumero(array){
    let maior = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}
maiorNumero(num);
console.log(maior);           
