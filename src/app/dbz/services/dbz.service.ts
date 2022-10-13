import { Injectable } from "@angular/core";
import { Personaje } from '../interface/dbz.interface';

@Injectable()
export class DbzService {

  constructor() {
    console.log('Servicio inicializado')
  }

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    },
    {
      nombre: 'Krillin',
      poder: 700
    }
  ]

  get personajes(): Personaje[] {
    // return Object.assign({} , this._personajes);
    // return JSON.parse(JSON.stringify(this._personajes));
    return [...this._personajes];
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    console.log('Main page component: ', argumento);
    this._personajes.push(argumento);
  }

}