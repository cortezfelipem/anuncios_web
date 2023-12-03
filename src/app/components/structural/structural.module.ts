import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MainContainer } from './main/main-container.component';
import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, MainContainer, FooterComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [],
})
export class StructuralModule {}
