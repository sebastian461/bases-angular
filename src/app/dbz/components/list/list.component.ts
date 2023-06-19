import { Component, Input } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  /* 
  Esto es un decorador que le dice al componente hijo que va a recibir algo del componente padre
  En caso de no recibir algo se puede definir el valor por defecto
  */
  @Input()
  public characterList: Character[] = [];
}
