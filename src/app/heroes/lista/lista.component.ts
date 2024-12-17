import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-lista',
  standalone: false,
  
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public nombreHeroes:string[] = ['spiderman','ironman','hulk','thor']
  public nameBorardo?:string

  borrarHeroe():void
  {
    this.nameBorardo= this.nombreHeroes.pop()

  }
}
