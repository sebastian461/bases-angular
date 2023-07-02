import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

/* Se instalo una librería externa para generar ID en el objeto Character */
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 8000,
    },
    {
      id: uuid(),
      name: 'Nappa',
      power: 7000,
    },
  ];

  onNewCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
