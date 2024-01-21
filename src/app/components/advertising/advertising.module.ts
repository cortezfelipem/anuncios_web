import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdvertisingCardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AdvertisingCardComponent],
  imports: [
    CarouselModule,
    CommonModule
  ],
  exports: [AdvertisingCardComponent, CarouselModule],
})
export class AdvertisingModule {}
