import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  value:string=""
  length:number;
  n1:number;
  n2:number;
  lastValue:string;
  answer:number;
  
  constructor() { }

  ngOnInit(): void {
  }

  funbtn(val:string){
    if (val=='+' || val=='-' || val=='*' || val=='/'){

      this.lastValue=val
      console.log(this.lastValue)
      
      this.n1=parseInt(this.value)
    
      console.log(this.n1);
      ;
    }
    else if(val=='='){

      this.n2=parseInt(this.value)

      console.log(this.n2);
      switch(this.lastValue){
        case  '+' :
          {
            this.answer=this.n1+this.n2
            this.value=this.answer.toString();
          }
          break;
          case '-':
            {
              this.answer=this.n1-this.n2
              this.value=this.answer.toString();
            } 
          break;
          case '*':
            {
              this.answer=this.n1*this.n2
              this.value=this.answer.toString();
            } 
          break;
          case '/':
            {
              this.answer=this.n1/this.n2
              this.value=this.answer.toString();
            }
          break;   
      } 
       
    }

    else {
      if(this.lastValue!=null)
      this.value=""

    this.value+=val;
    
    console.log(val);
    }

  }

}
