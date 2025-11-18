// App Olympo para o JS

const prompt= require("prompt-sync")();

const nome= prompt("Qual o Seu nome: ");

function menuopcoes(){
    console.log("O que deseja para hoje "+nome+": ");
    console.log("-------------------------");
    console.log("Calcular o IMC? Digite imc");
    console.log("Média de notas da sua escola? Digite nota");
    console.log("Voltar a este menu? Digite menu");
    console.log("-------------------------");
    let resposta = prompt("Digite o que deseja: ");
    
    if(resposta === "imc"){
        imc();
    }

    else if(resposta === "nota"){
        nota();
    }

    else if(resposta === "menu"){
        menuopcoes();
    }


}

function imc() {
    console.log("---------------------");
    console.log("antes de começarmos vamos precisar que responda algumas perguntas "+nome);
    let peso = Number(prompt("Digite seu peso em kg: "));
    let altura = Number(prompt("Digite sua altura em metros: "));
    let calculo = Number(peso /(altura * altura));
    console.log("-------------------------")
    console.log(nome+" seu imc é "+calculo+ "confira a tabela abaixo como você está de acordo com seu peso:");
    if(calculo >= 30.0){
        console.log("você está muito acima do peso");
    }
    else if(calculo >= 25.0){
            console.log("Você está acima do peso ideal");
        }

    else if(calculo >= 18.5){
            console.log("Você esta no peso ideal");
        }
    
    else{
        console.log("Você está abaixo do peso ideal");
    }
    console.log("----------------------")

    let resposta = prompt("Você deseja sair ? digite S para sair ou N para não: ");
    if(resposta === "S"){
        menuopcoes();
    }
    else{
        imc();
    }
}

function nota() {
    console.log("Olá "+nome+" vamos pedir algumas informações antes de calcular sua média das notas");
    let notas = [];
    let qtdNotas = 3;
    let media= 0;

    for(i = 0; i<qtdNotas; i++){
        notas[i]= prompt("Digite sua "+(i+1)+ ": ");
        media = Number(media) + Number(notas[i]);
    }

    for(i=0; i<qtdNotas;i++){
        console.log("sua nota "+(i+1)+" foi de "+notas[i]);
    }
    console.log("---------------------------")

    media= Number(media)/Number(qtdNotas);
    console.log("E a sua média foi de: "+media);

}

menuopcoes();
imc();
nota();
