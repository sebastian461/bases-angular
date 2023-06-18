import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DBZMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [DBZMainPageComponent, ListComponent, FormComponent],
  exports: [DBZMainPageComponent],
  imports: [CommonModule],
})
export class DbzModule {}
