import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

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

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  emitCharacter(index: number): void {
    console.log({ index });
    this.onDeleteCharacter.emit(index);
  }
}
