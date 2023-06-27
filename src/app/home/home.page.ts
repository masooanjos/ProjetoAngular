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

	resultado: any = "";
  igual: any = "";

	exibir(numero: any) {
		// usamos this para acessar a variável que foi criada acima
		this.igual += numero;
	}

  clear(){
    this.igual = '';
    this.resultado = '';
  }

  apagaUltimo(){
    let chars = this.igual.slice(0, -1);
    this.igual = chars;

    chars = this.resultado.slice(0, -1);
    this.resultado = chars;
  }

  inverterSinal(){
    this.resultado = (this.resultado * (-1)).toString();
  }

  operadores(numero: any){
    this.igual += numero;
  }

  botaoIgual(){
    this.resultado = eval(this.igual);
  }

}
