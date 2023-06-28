import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  //criação da variável que exibe a expressão
  igual: any = "";
  //criação da variável que exibe o resultado
	resultado: any = "";
  
  //função que recebe os números e exibe o resultado
	exibir(numero: any) {
		// usamos this para acessar a variável que foi criada acima
		this.igual += numero;
    this.atualizaResultado();
	}

  //função que limpa todos os arrays
  clear(){
    this.igual = '';
    this.resultado = '';
  }

  //função que apaga o último número digitado/exibido
  apagaUltimo(){
    let chars = this.igual.slice(0, -1);
    this.igual = chars;
    this.resultado = chars;
    this.atualizaResultado();
  }

  //função que inverte o sinal do número (+/-)
  inverterSinal(){
    //o split está dividindo a expressão em partes diferentes
    this.igual = this.igual.split(/([-+*/])/);
    //inverte o sinal do último elemento
    let ultimo = Number(this.igual[this.igual.length-1]) * (-1);
    //o pop elimina o último elemento
    this.igual.pop()
    //o join junta os elementos novamente
    this.igual = this.igual.join("")
    //está adicionando o número invertido ao igual
    this.igual += ultimo;
  }

  //essa função realiza as expressões(soma, subtração, multiplicação e divisão)
  operadores(numero: any){
    //se o array estiver vazio ele não deixa colocar operadores além do sinal de subtração(-)
    if(this.igual.length == 0 && numero != "-"){
      return;
    }
    //proíbe de colocar operadores sequencialmente
    if (["-", "+", "*", "/"].includes(this.igual[this.igual.length-1])) {
      this.apagaUltimo();
    }
    this.igual += numero;
    this.atualizaResultado();

  }

  //gera, calcula e exibe o resultado da expressão
  botaoIgual(){
    this.resultado = eval(this.igual);
  }

  //função que gera cálculo da porcentagem
  porcentagem(){
  //o split está dividindo a expressão em partes diferentes
  this.igual = this.igual.split(/([-+*/])/);
  //faz a porcentagem se tiver apenas um número
  if(this.igual.length == 1){
    this.resultado = this.igual / 100;
    return;
  }

  //gera a porcentagem com números na frente, ex: 80+5%
  let porcento = (this.igual[this.igual.length-1]) / 100;
  this.igual.pop();
  this.igual = this.igual.join("");
  let aux = this.igual.split(/([-+*/])/);
  this.igual += Number(aux[aux.length-3]) * porcento;
  }

  //função que atualiza o resultado
  atualizaResultado() {
    this.resultado = eval(this.igual);
  }
}
