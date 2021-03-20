import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Se inicializa la variables que llevaran los valores de los botones
  ver="";
  a;
  b;
  c;
  d=""
  e="";
  constructor() {}
  //Función para obtener los valores que llegan de los botones e igualar el valor "b" a cada operador matematico
  value(value){
    if((this.b=="+")||(this.b=="-")||(this.b=="*")||(this.b=="/")||(this.b=="%") ){
      this.d=this.d+value;
      this.ver=this.ver+value;
      this.c=this.d;
    }
    else{
      this.ver=this.ver+value;
      this.b=value;
    }
  }
  //Función para obtener el valor de los operadores matematicos
  condicion(value){
    this.ver=this.ver+value;
    this.b=value;
  }
  //limpia todos los números del input el cual contiene los valores clickeados
  limpiar(){
    this.ver="";
    this.a="";
    this.b="";
    this.c="";
    this.d="";
  }
  //Almacena los datos cuando se realiza la suma
  Array=[];
  //Función el cual se hace el resultado por cada operación realizada
  resultado(){
    if(this.b=="+"){
      this.ver=this.ver+"="+(parseInt(this.a)+parseInt(this.c)).toString();
      this.ver=(parseInt(this.ver)+parseInt(this.c)).toString();
      this.Array.push(parseInt(this.ver)+parseInt(this.c));
      console.log(this.Array);
    }
    if(this.b=="-"){
      this.ver=this.ver+"="+(parseInt(this.a)-parseInt(this.c)).toString();
      this.ver=(parseInt(this.ver)-parseInt(this.c)).toString();
    }
    if(this.b=="*"){
      this.ver=this.ver+"="+(parseInt(this.a)*parseInt(this.c)).toString();
      this.ver=(parseInt(this.ver)*parseInt(this.c)).toString();
    }
    if(this.b=="/"){
      this.ver=this.ver+"="+(parseInt(this.a)/parseInt(this.c)).toString();
      this.ver=(parseInt(this.ver)/parseInt(this.c)).toString();
    }
    if(this.b=="%"){
      this.ver=this.ver+"="+(parseInt(this.a)%parseInt(this.c)).toString();
      this.ver=(parseInt(this.ver)%parseInt(this.c)).toString();
    }
  }
}
