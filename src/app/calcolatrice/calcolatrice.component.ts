import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {
  memoValue:string = "";
  displayValue:any = "";
  result:number = 0;
  blockEqual = false; //realmente a true
  blockOperation = false; //realmente a true
  number01:any = "";
  number02:any = "";
  operando:string = "";
  operandoUse:string = "";


  clickButton(event : any){
    const labelDelBottone = event?.target.value;


    if( this.operando != "" ){
      if(this.number01 == ""){
        this.number01 = parseFloat(this.displayValue);
        this.displayValue="";
      }else if(this.number02 == ""){
        this.number02 = parseFloat(this.displayValue);
        this.displayValue="";
      }
      //this.operando = this.displayValue;
    }

    this.displayValue += labelDelBottone;


  }

  clickOperation(event:any){
    const operationBotton = event?.target.value;
    this.operando = operationBotton;
    console.log(this.operando);
  }


  cancelAll(){
    this.memoValue = "";
    this.displayValue= "";
    this.result = 0;
  }
}
