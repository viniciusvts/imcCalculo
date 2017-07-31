import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculosDirective } from '../../directives/calculos/calculos';
//import { DirectivesModule } from '../../directives/directives.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  condicao: string = "";

  constructor( public navCtrl: NavController ) { }

  calcular(){
    this.imc = CalculosDirective.calcularImc( this.altura, this.peso );
    this.condicao = CalculosDirective.informarImc(this.imc);
    console.log("botâo clicado!");
    console.log(this.peso);
    console.log(this.altura);
    console.log(this.condicao);
    console.log(this.imc);
  }

}
