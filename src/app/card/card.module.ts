import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomCardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomCardComponent],
  exports: [CustomCardComponent],
})
export class CustomCardModule {}
