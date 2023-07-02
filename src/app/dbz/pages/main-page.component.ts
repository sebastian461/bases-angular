/* 
Este es un componente principal que agrupara al resto de componentes
*/
import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class DBZMainPageComponent {
  /* Aquí se encontraba toda la lógica que ahora está en dbz.service.ts
  porque el servicio permite la inyección de dependencias, por lo general para centralizar la data
  */

  /* Todo componente de TS tiene por defecto un constructor, a través del contructor
  se realiza la inyección de dependencias, en este caso el servicio
  */

  constructor(public dbzservice: DbzService) {}
}
