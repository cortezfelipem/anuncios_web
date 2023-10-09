import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';



@NgModule({
  declarations: [
    MenuSuperiorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuSuperiorComponent 
  ]
})
export class HeaderModule { }
