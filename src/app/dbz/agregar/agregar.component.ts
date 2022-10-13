import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) {

  }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.personajes.push(Object.assign({} , this.nuevo));
    // this.personajes.push(JSON.parse(JSON.stringify(this.nuevo)));
    console.log('Esto es una prueba!!!', this.nuevo);

    // Enviamos el componente
    // this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
