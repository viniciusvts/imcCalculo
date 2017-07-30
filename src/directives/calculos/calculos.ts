import { Directive } from '@angular/core';

/**
 * Generated class for the CalculoCalculosDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[calculos]' // Attribute selector
})
export class CalculosDirective {

  static calcularImc(alt: number, peso: number): number{
    return ( peso / ( alt * alt ));
  }

  static informarImc(imc: number): string{
    if(imc < 16) return "Magreza grave";
    if(imc => 16 && imc < 17) return "Magreza moderada";
    if(imc => 17 && imc < 18.5) return "Magreza leve";
    if(imc => 18.5 && imc < 25) return "Saudável";
    if(imc => 25 && imc < 30) return "Sobrepeso";
    if(imc => 30 && imc < 35) return "Obesidade grau I";
    if(imc => 35 && imc < 40) return "Obesidade grau II (Severa)";
    if(imc > 40) return "Obesidade grau III (Mórbida)";
/*
< 16	Magreza grave
16 a < 17	Magreza moderada
17 a < 18,5	Magreza leve
18,5 a < 25	Saudável
25 a < 30	Sobrepeso
30 a < 35	Obesidade Grau I
35 a < 40	Obesidade Grau II (severa)
> 40	Obesidade Grau III (mórbida)
(Fonte: WikiPedia)
*/
  }

  constructor() {
    console.log('Hello CalculosDirective Directive');
  }

}
