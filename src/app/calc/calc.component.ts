import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  memoValue:string = "";
  displayValue:any = "";
  numero:number= 0;
  result:number = 0;
  operator:string ="";
  blockEqual = false; //devono partire true da sistemare dopo
  blockOperation = false; //devono partire true da sistemare dopo
  add:string = "+";
  clickButton(event:any){
    const labelDelBottone = event?.target.value;

    if(labelDelBottone == "+" || labelDelBottone == "-" || labelDelBottone == "/" || labelDelBottone == "*" || labelDelBottone == "="){


      if(this.result == 0){
        this.result = parseFloat(this.displayValue);
        this.memoValue += this.displayValue;
        this.displayValue = "";
        this.operator += labelDelBottone;

      }else if(this.numero == 0){
        this.numero = parseFloat(this.displayValue);
        this.memoValue += this.displayValue;
        this.displayValue = "";
      }

      if(this.result != 0 && this.numero != 0){
        console.log("sono nell'if di entrambi settati");
        if(this.operator.includes("+")){
          this.result += this.numero ;
          console.log("sono nell'addizione");
        }else if (this.operator.includes("-")){
          this.result -= this.numero ;
          console.log("sono nella sottrazione");
        }else if (this.operator.includes("/")){
          this.result = this.result / this.numero ;
          console.log("sono nella divisione");
        }else if (this.operator.includes("*")){
          this.result = this.result * this.numero ;
          console.log("sono nella moltiplicazione");
        }
        this.numero = 0;
        this.operator = "";
        this.operator = labelDelBottone;
      }

      if(labelDelBottone == "="){
        this.memoValue += this.operator;
        this.displayValue = this.result.toString();
        this.numero = 0;
        this.operator = "";
      }else{
        this.memoValue += this.operator;
        this.displayValue = "";
      }

    }else{
      this.displayValue += labelDelBottone;
    }

  }




  cancelAll(){
    this.memoValue = "";
    this.displayValue= "";
    this.operator="";
    this.numero = 0;
    this.result = 0;

  }

  /*
  clickButton(event : any){
    const labelDelBottone = event?.target.value;
    if(isNaN(this.displayValue) ){
      this.displayValue = 0;
    }
    //console.log(labelDelBottone);
    if(labelDelBottone == "+"){
      //console.log("sono un più");
      if(this.blockEqual){
        this.memoValue = "";
        this.blockEqual = false;
      }
      this.somma(labelDelBottone);

    }else if(labelDelBottone == "="){
      this.equal(labelDelBottone);

    }else if(labelDelBottone == "-"){
      this.sub(labelDelBottone);
    }else{

      if(this.blockEqual){
        this.memoValue = "";
        this.displayValue = "";
        this.blockEqual = false;
      }

      if(this.blockOperation){
        this.blockOperation = false;
      }
      this.displayValue += labelDelBottone;
    }
    //console.log("display = " + this.displayValue);
  }

  somma(labelDelBottone:any){

    this.result += parseFloat(this.displayValue);
    //console.log("risultato = " + this.result);
    this.memoValue += this.displayValue;
    this.displayValue = "";
    this.operator += labelDelBottone;
    this.blockOperation =  true;
  }
  sub(labelDelBottone:any){
    this.result = this.result - parseFloat(this.displayValue);
    //console.log("risultato = " + this.result);
    this.memoValue += this.displayValue;
    this.displayValue = "";
    this.memoValue += labelDelBottone;
    this.blockOperation =  true;
  }
  equal(labelDelBottone:any){
    this.result += parseFloat(this.displayValue);
    //console.log("risultato = " + this.result);
    this.displayValue += labelDelBottone;
    this.memoValue += this.displayValue;
    this.displayValue = "";
    this.displayValue = this.result.toString();
    this.result = 0;
    this.blockEqual = true;
  }


  cancelAll(){
    this.memoValue = "";
    this.displayValue= "";
    this.result = 0;
  }
  */
}
