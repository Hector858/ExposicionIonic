import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasComponent } from './mascotas/mascotas.component';

@NgModule({
  declarations: [MascotasComponent],
  imports: [
    CommonModule
  ],
  exports: [MascotasComponent]
})
export class PerrosModule { }
