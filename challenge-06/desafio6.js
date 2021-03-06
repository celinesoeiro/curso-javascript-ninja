/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'campeonato brasileiro de Futebol';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Bahia','Vitória','Vasco','Flamengo','Palmeiras'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(x){
    if (x<=5){
        console.log('O time que está em '+(x)+'º lugar é o '+ teams[x-1] +'.');
    }
    else{
        console.log('Não temos a informação do time que está nessa posição.')
    }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1)
showTeamPosition(2)
showTeamPosition(3)
showTeamPosition(4)
showTeamPosition(6)

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;
while (i>=20){
  console.log(i);
  if (i>=30) {break};
  i++;
  }

// Resolução do Fernando Daciuk
while (i<=30){
    console.log(i);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
    cores = ['azul','amarelo','vermelho','branco','rosa'];
    hex = ['#00b8ff','#ffbf00','#ff0000','#ffffff','ff4a93'];
    switch (cor) {
        case 'azul': console.log('O hexadecimal para a cor '+cores[0]+' é '+hex[0]+'.'); break;
        case 'amarelo': console.log('O hexadecimal para a cor '+cores[1]+' é '+hex[1]+'.'); break;
        case 'vermelho': console.log('O hexadecimal para a cor '+cores[2]+' é '+hex[2]+'.'); break;
        case 'branco': console.log('O hexadecimal para a cor '+cores[3]+' é '+hex[3]+'.'); break;
        case 'rosa': console.log('O hexadecimal para a cor '+cores[4]+' é '+hex[4]+'.'); break;
        default: console.log('Não temos o equivalente hexadecimal para '+ cor +'.');
    }
}

// Resposta Fernando Daciuk
function convertToHex(cor){
    hex = ['#00b8ff','#ffbf00','#ff0000','#ffffff','ff4a93'];
    var hexa;
    switch (cor) {
        case 'azul': 
            hexa = hex[0]; 
            break;
        case 'amarelo': 
            hexa = hex[1]; 
            break;
        case 'vermelho': 
            hexa = hex[2]; 
            break;
        case 'branco': 
            hexa = hex[3]; 
            break;
        case 'rosa': 
            hexa = hex[4]; 
            break;
        default: console.log('Não temos o equivalente hexadecimal para '+ cor +'.');
    }
    console.log('O hexadecimal para a cor '+cor+' é '+hexa+'.');
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('azul')
convertToHex('amarelo')
convertToHex('vermelho')
convertToHex('branco')
convertToHex('rosa')
convertToHex('preto')
convertToHex('verde')
convertToHex('violeta')