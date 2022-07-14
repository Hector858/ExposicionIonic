import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//IMPORTANDO COMPONENTE
import {SoliServicioComponent} from './soli-servicio/soli-servicio.component';
import {BotonComponent} from './boton/boton.component';


@NgModule({
  declarations: [SoliServicioComponent,BotonComponent], //declarando
  imports: [
    CommonModule
  ],
  exports: [SoliServicioComponent,BotonComponent]
})
export class ComponenteServicioModule { }
