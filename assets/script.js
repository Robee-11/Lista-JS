// // 1 - Variáveis e Tipos de Dados  

// 01. Crie uma variável nome e armazene seu nome. Mostre no console.
// const nome = "Roberta"; 
// console.log(nome); 

// 02. Crie duas variáveis idade e altura, depois mostre no console: 
// const altura = "1.54m"; 
// const idade = "18"; 
// console.log('Tenho ' + idade + ' anos e ' + altura + ' de altura.');


// 03. Crie uma variável booleana estudando e mostre no console se você está
// estudando ou não. 


// const estudando = true ; 
// if (estudando) { 
//     console.log('Você está estudando!'); 
// } 
// else {console.log('Você não está estudando!'); 

//  }


//  2 - Operadores

// 01. Some dois números e mostre o resultado no console.
//  let num = 1 ; 
//  let num1 = 9; 
// let soma = num + num1 ; 
// console.log('A soma dos números é igual a: ' + soma)

// 02. Divida dois números e mostre o resto da divisão no console.
// let num2 = 100 ; 
// let num3 = 5 ; 
// let divisao = num2 / num3; 
// console.log('O resultado da divisão é: ' + divisao); 

// 03. Crie uma expressão que verifique se a idade é maior ou igual a 18.
// let idd = (prompt('Qual a sua idade?'));  

// if (idd < 18 ) { 
//     console.log('Você é menor de idade.'); }
// else { 
//     console.log('Você é maior de idade.');
// }


//  3. Condições
// 01. Peça ao usuário um número com prompt e diga se ele é par ou ímpar.
//  let numero = (prompt('Digite um número:' ));
//  if (numero % 2 == 0) { 
//     console.log('O número é par.');
//  }
// else  { 
//     console.log('O número é ímpar.');
// }

// 02. Peça ao usuário a idade e diga se ele pode dirigir (&gt;=18).'
// let idade = (prompt('Qual é a sua idade?'));
// if (idade < 18) { 
//     console.log('Você não tem idade o suficiente para dirigir.');
// }
// else { 
//     console.log('Você já tem idade para dirigir.'); 
// }

// 03. Peça uma nota (0 a 10) e mostre se está “Reprovado”, “Recuperação”
// ou “Aprovado”.

// let nota = (prompt('Digite a sua nota obtida(de 0 a 10): '));
// if (nota < 3 ) { 
//     console.log('Você está Reprovado.');
// }
// else if (nota >= 3 && nota < 6) { 
//     console.log('Você está de Recuperação.');
// }
// else { 
//     console.log('Você está Aprovado.');
// }

//  4. Laços de Repetição
// 01. Mostre os números de 1 a 10 com for.

// for (let i = 1; i <= 10; i++)  
//     console.log(i); 

// 02. Peça um número e mostre a tabuada dele até 10.s
// let num = (prompt('Informe um número')); 
// for ( let R = 1; R <= 10 ; R++) {
//     console.log(num + ' x ' + R + ' = ' + (num * R));
// }

// 03. Use while para pedir senha até o usuário digitar “1234”.
// let senha = (prompt('Digite a senha: '));
// while (senha != '1234') {
//     senha = (prompt('Senha incorreta. Digite a senha novamente: '));
// }
// alert('Senha correta! Bem-vindo!');

//  5. Funções

// 01. Crie uma função que receba dois números e retorne a soma.5
//     function soma (num1 , num2) { 
//     return num1 + num2 ;    
// }
// console.log('A soma dos números é: ' + soma(5 , 10)); 

// 02. Crie uma função que receba um nome e retorne Olá, nome!.
// let nome = (prompt('Digite seu nome: '));
// function retornaname (nome) {
//     return 'Olá,' + nome +'!'; 
// }
//  console.log(retornaname(nome));
// 03. Crie uma função que calcule a média de 3 notas.
// function media (n1 , n2 , n3) {
//     return (n1 + n2 +  n3 ) / 3 ; 
// }
// console.log('A média das suas notas são: ' + media(10 , 8 , 9)); 

//  6. Arrays

// 01. Crie um array com 5 nomes e mostre o primeiro e o último.
// let nomes = ['Rafael', 'Bruna', ' Ana ' , 'Isadora' , 'Roberta'];
// console.log(nomes[0]);
// console.log(nomes[4])
// 02. Adicione um nome novo ao array e mostre todos os elementos.
//  let nomes = ['Rafael', 'Bruna', ' Ana ' , 'Isadora' , 'Roberta'];
//  nomes.push('Carlos');
//  for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
//  }
// 03. Faça um loop que mostre cada elemento do array.
// let personagens = ['Hello Kitty' , 'Kuromi', 'My Melody' , 'Cinnamoroll' , 'Pompompurin'];
// for (let i = 0; i < personagens.length; i++) {
//     console.log(personagens[i]);
// }

//  7. Objetos
// 1. Crie um objeto carro com propriedades marca, modelo e ano. Mostre no
// console.
// let carro ={ 
//    Marca: 'Volkswagen',
//    Modelo : 'Nivus', 
//    Ano : 2020 

// }; 
// console.log(carro.Marca); 
// console.log(carro.Modelo);
// console.log(carro.Ano);
// 2. Crie um objeto aluno com nome, idade e notas. Mostre o nome e a
// média.
// let aluno = {
//     Nome: 'Luiza', 
//     Idade:18, 
//     Notas: [9, 8, 10]

// }; 
// let media = (aluno.Notas[0] + aluno.Notas[1] + aluno.Notas[2]) / 3;
// console.log(aluno.Nome);
// console.log(+ media); 

// 03. Crie um array de objetos produtos com pelo menos 3 itens (nome e
// preço). Mostre todos.
// let produtos = [  item1 =  { Nome: 'Leite', 
//                              Preço:4.50 
//                             }, 
//                    item2 =  {Nome:'Amaciante', 
//                              Preço: 23.00   
//                             }, 
//                    item3 = {Nome:'Sabão em pó',
//                                 Preço: 15.00
//                             }, 


//         ];   
// console.log(produtos[0]);
// console.log(produtos[1]);
// console.log(produtos[2]);
//  8. Eventos DOM
// 1. Crie um botão que, ao clicar, troque a cor de fundo da página.
document.getElementById("botao").onclick = function () {
    document.body.style.backgroundColor = "lightblue";
}
// 2. Crie um input e um botão. Quando clicar, mostre no console o texto
// digitado.
// 3. Crie um botão que conte quantos cliques já foram feitos.

// 9. Manipulação de Strings
// 1. Peça um nome e mostre quantas letras ele tem.
// 2. Peça uma frase e mostre em letras maiúsculas.
// 3. Peça um texto e mostre apenas os 5 primeiros caracteres.

// 10. Promises e Fetch API
// 1. Crie uma Promise que resolve depois de 3 segundos com a mensagem
// &quot;Concluído!&quot;.
// 2. Use fetch para buscar dados de
// https://jsonplaceholder.typicode.com/todos/1 e mostre no console.
// 3. Use fetch para buscar uma lista de posts (/posts) e mostre apenas os
// títulos no console.