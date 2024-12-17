import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: 'contador.component.html'
})
export class ContadorComponent {
  public contador:number = 10;

    incrementar():void
    {
      this.contador+=1
    }
  
    decrementar():void
    {
      this.contador-=1
    }
  
    resetear():void{
      this.contador=0
  
    }    
} 
