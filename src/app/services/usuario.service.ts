import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {
      usuario: 'daniel41',
      nombre: 'Daniel',
      apellido: 'Seiler',
      sexo: 'Masculino',
    },
    {
      usuario: 'jperez',
      nombre: 'Juan',
      apellido: 'Perez',
      sexo: 'Masculino',
    },
    {
      usuario: 'jgomez',
      nombre: 'Jorge',
      apellido: 'Gomez',
      sexo: 'Masculino',
    },
    {
      usuario: 'jrodriguez',
      nombre: 'Juana',
      apellido: 'Rodriguez',
      sexo: 'Femenino',
    },
    {
      usuario: 'mtina1',
      nombre: 'Martina',
      apellido: 'Lopez',
      sexo: 'Femenino',
    },
    {
      usuario: 'fina2',
      nombre: 'Gimena',
      apellido: 'Fina',
      sexo: 'Femenino',
    },
    {
      usuario: 'robert123',
      nombre: 'Roberto',
      apellido: 'Thompson',
      sexo: 'Masculino',
    },
    {
      usuario: 'gabii22',
      nombre: 'Gabriel',
      apellido: 'Reyes',
      sexo: 'Masculino',
    },
    {
      usuario: 'aricapo',
      nombre: 'Ariel',
      apellido: 'Lopez',
      sexo: 'Masculino',
    },
  ];
  constructor() {}

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
