import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    CustomCarouselComponent
  ],
  imports: [
    CommonModule,
    // OwlOptions,
    CarouselModule,
    // CarouselComponent,

  ],
  exports: [
    CustomCarouselComponent
  ]
})
export class CustomCarouselModule { }
