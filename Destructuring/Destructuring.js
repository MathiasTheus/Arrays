const Feira = {
    fruta1: 'Maça',
    Tamanho: 'Médio',
    cor: 'Vermelha'
};

const {fruta1,Tamanho,cor} = Feira;
console.log(fruta1); // Maça
console.log(Tamanho); // Médio
console.log(cor); // Vermelha


const Pessoa = {
    nome: 'Matheus',
    idade: 25,
    endereco: "Rua A, 123"
};
// Desestruturando o objeto Pessoa
// Atribuindo a propriedade 'nome' a uma nova variável 'namePerson'
// Atribuindo um valor padrão para a propriedade 'profissao' que não existe no objeto
// Usando desestruturação com renomeação e valor padrão
// Renomeando 'nome' para 'namePerson' e atribuindo valor padrão para 'profissao'
const {nome: namePerson,idade,endereco, profissao = 'Desenvolvedor'} = Pessoa; 
console.log(namePerson); // Matheus
console.log(idade); // 25
console.log(endereco); // Rua A, 123
console.log(profissao); // Desenvolvedor (valor padrão, pois não existe no objeto)
