import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  divin:number = 0;
  divgros:number = 0;
  maginal:number = 0;
  divout:number = 0;

//////////////////////////////////

  comfeeb:number = 0;
  sharesb:number = 0;
  tcos:number = 0;
  acbb:number = 0;

///////////////////////////////////

  acbs:number = 0;
  tcb:number = 0;
  
  sharess:number = 0;

  comfees:number = 0;
  ppss:number = 0;
  tcs:number = 0;
  taxg:number = 0;

  gl:number = 0;

  gol:boolean = true;



  constructor(private data: DataService) { }

  
  calcgl(){
    this.tcb = this.acbs*this.sharess;
    this.tcs = (this.ppss*this.sharess)-this.comfees;
    this.gl = this.tcs-this.tcb;
    
    if(this.gl < 0){
      this.gol = false;
      this.gl *= -1;
    }
    else{
      this.taxg = Number((this.gl/2).toFixed(2));
      this.gol = true;
    }
  }

  inputnum(value : string, param : string) : void{
    if (param == 'divin') {
      this.divin = Number(value);
    } else if (param == 'marg') {
      this.maginal = (Number(value)/100);
    } else if (param == 'comfeeb') {
      this.comfeeb = Number(value);
    } else if (param == 'sharesb') {
      this.sharesb = Number(value);
    } else if (param == 'tcos') {
      this.tcos = Number(value);
    } else if (param == 'comfees') {
      this.comfees = Number(value);
    } else if (param == 'acb') {
      this.acbs = Number(value);
    } else if (param == 'sharess') {
      this.sharess = Number(value);
    } else if (param == 'ppss') {
      this.ppss = Number(value);
    }
    else{}
  }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("Calculator")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  calcdiv(){
    this.divgros = this.divin*1.38;
    this.divout = Number(((this.divgros*this.maginal)-(this.divgros*0.150198)).toFixed(2));
  }

  calcacb(){
    this.acbb =Number((((this.tcos+this.comfeeb)/this.sharesb)).toFixed(2));
  }

}
