import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string = 'iron'
  public edad:number = 40

  get capitalizacionNmae():string
  {
    return this.nombre.toLocaleUpperCase()
  }

  getheroesDescripcion():string
  {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void
  {
    this.nombre='capitan america'
  }

  cambiarEdad():void{
    this.edad=60
  }

  reset():void{
    this.nombre='iron'
    this.edad=40
  }
}
