const prompt = require('prompt-sync')();
console.clear();

let tabuleiro = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let letras = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
let x = 0;
let o = 0;
let ganhador;

for(let letra of letras){
    
    console.log('Jogo da Velha')
    console.log('  | 0, 1, 2');
    console.log(`0 | ${tabuleiro[0]}`);
    console.log(`1 | ${tabuleiro[1]}`);
    console.log(`2 | ${tabuleiro[2]}`);

    while(true){
        console.log(`Onde você deseja marcar o ${letra}?`);
        let linha = +prompt('Linha: ');
        let coluna = +prompt('Coluna: ');

        if(linha < 0 || linha > 2){
            console.log('Linha inválida!');
            continue;
        } else if(coluna < 0 || coluna > 2){
            console.log('Coluna inválida!');
            continue;
        } else {
            if(tabuleiro[linha][coluna] == 'X' || tabuleiro[linha][coluna] == 'O'){
                console.log('Coordenadas inválidas!');
                continue;
            } else {
                tabuleiro[linha][coluna] = letra;
                break;
            }
        }
    }

    if(tabuleiro[0][0] == tabuleiro[0][1] && tabuleiro[0][1] == tabuleiro[0][2]){
        ganhador = tabuleiro[0][0];
    } else if(tabuleiro[1][0] == tabuleiro[1][1] &&  tabuleiro[1][1] == tabuleiro[1][2]){
        ganhador = tabuleiro[1][0];
    } else if(tabuleiro[2][0] == tabuleiro[2][1] &&  tabuleiro[2][1] == tabuleiro[2][2]){
        ganhador = tabuleiro[2][0];
    } else if(tabuleiro[0][0] == tabuleiro[1][0] &&  tabuleiro[1][0] == tabuleiro[2][0]){
        ganhador = tabuleiro[0][0];
    } else if(tabuleiro[0][1] == tabuleiro[1][1] &&  tabuleiro[1][1] == tabuleiro[2][1]){
        ganhador = tabuleiro[0][1];
    } else if(tabuleiro[0][2] == tabuleiro[1][2] &&  tabuleiro[1][2] == tabuleiro[2][2]){
        ganhador = tabuleiro[0][2];
    } else if(tabuleiro[0][0] == tabuleiro[1][1] &&  tabuleiro[1][1] == tabuleiro[2][2]){
        ganhador = tabuleiro[0][0];
    } else if(tabuleiro[0][2] == tabuleiro[1][1] &&  tabuleiro[1][1] == tabuleiro[2][0]){
        ganhador = tabuleiro[0][2];
    }

    if(ganhador == 'X' || ganhador == 'O'){
        console.log();
        console.log('Jogo da Velha')
        console.log('  | 0, 1, 2');
        console.log(`0 | ${tabuleiro[0]}`);
        console.log(`1 | ${tabuleiro[1]}`);
        console.log(`2 | ${tabuleiro[2]}`);
        console.log(`O jogador ${ganhador} ganhou essa rodada!`);

        if(ganhador == 'X'){
            x++;
        } else if(ganhador == 'O'){
            o++;
        } else {
            console.log('Ganhador inválido!');
        }

        console.log(`Placar: ${x} x ${o}`);

        let novamente = prompt('Jogar novamente? ');

        if(novamente.toLowerCase() == 'sim'){
            console.log('Recomeçando!');
            tabuleiro = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
            i = 0;
        } else {
            if(x > o){
                console.log('O grande vencedor foi o jogador X!');
            } else if(o < x){
                console.log('O grande vencedor foi o jogador O!');
            } else {
                console.log('O jogo terminou empatado!');
            }
            console.log('Encerrando!');
            break;
        }
    } else if(i == 8){
        console.log('Essa rodada terminou em empate!');

        let novamente = prompt('Jogar novamente? ');

        if(novamente.toLowerCase() == 'sim'){
            console.log('Recomeçando!');
            tabuleiro = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
            i = 0;
            continue;
        } else {
            console.log('Encerrando!');
            if(x > o){
                console.log(`Placar final: ${x} x ${o}`);
                console.log('O grande vencedor foi o jogador X!');
            } else if(o < x){
                console.log(`Placar final: ${x} x ${o}`);
                console.log('O grande vencedor foi o jogador O!');
            } else {
                console.log(`Placar final: ${x} x ${o}`);
                console.log('O jogo terminou empatado!');
            }
            break;
        }
    }
}