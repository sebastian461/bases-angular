/* 
Este es un componente principal que agrupara al resto de componentes
*/
import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class DBZMainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 9000,
    },
    {
      name: 'Piccolo',
      power: 8000,
    },
    {
      name: 'Nappa',
      power: 7000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
