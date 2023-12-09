import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdvertisingCardComponent } from './card/card.component';

@NgModule({
  declarations: [AdvertisingCardComponent],
  imports: [CarouselModule],
  exports: [AdvertisingCardComponent, CarouselModule],
})
export class AdvertisingModule {}
