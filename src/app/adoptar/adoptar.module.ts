import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule
  ],
  exports: [RegistroComponent]
})
export class AdoptarModule { }
