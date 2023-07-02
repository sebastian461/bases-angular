import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-Character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class AddCharacterComponent {
  /* Se usa el decorador @Output para usar el EventEmitter */
  @Output()
  /* Este objeto (propiedad) es un objeto genérico para emitir eventos */
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }
}
