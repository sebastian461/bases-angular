/* 
Se puede agrupar los componentes que uno quiera y crear un modulo para declararlos y exportarlos 
Cuando se crea un nuevo modulo se requiere importar CommonModule para las directivas ng
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
