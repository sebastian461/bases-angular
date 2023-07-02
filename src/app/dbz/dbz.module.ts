/* FormsModule es para usar las directivas ng en los formularios */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DBZMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/form/form.component';

@NgModule({
  declarations: [DBZMainPageComponent, ListComponent, AddCharacterComponent],
  exports: [DBZMainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
