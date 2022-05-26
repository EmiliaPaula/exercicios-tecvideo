//Neste exercício vamos aprender como realizar cálculos com variáveis e template literals. O objetivo é criar um algoritmo que calcula descontos em pagamentos para uma loja.

//EXERCÍCIO 3
//=========================
//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
//Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
//EXEMPLO:
//Preço: R$60,00
//À vista: R$54,00
//Ou 3x de: R$20,00
//=========================

//let preco = 60;               **** MINHA SOLUÇÃO **** Funcionou!! rs
//let valorAVista = 54;
//let valorDividido = 20;

//totalAVista = 60 - ((valorAVista / 100) - 5);
//valorDividido = 60 / 3;
//console.log('Valor a pagar com desconto: R$' + valorAVista + ',00');
//console.log('Ou em 3x sem desconto de: R$' + valorDividido + ',00');

let preco = 60;          //EXEMPLO DO PROFESSOR (JEITO CERTO!!)
let aVista = 10;
let totalAVista = 0;

totalAVista = (preco - (aVista / 100) * preco);

console.log('Preço: R$' + preco + ',00');
console.log('À vista: R$' + totalAVista + ',00');
console.log('Ou em 3x: R$' + preco/3 + ',00');
