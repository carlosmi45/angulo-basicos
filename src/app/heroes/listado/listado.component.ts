import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Superman', 'Ironman', 'Thor', 'Hulk'];

  heroeBorrado: string = '';

  get isBorrado(): boolean{
    return this.heroeBorrado != '';
}

  borrarHeroe(): void {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('El herroe borrado es: '+this.heroeBorrado);
  }
}
