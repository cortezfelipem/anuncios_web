import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    CustomCarouselComponent
  ],
  imports: [
    CommonModule,
    // OwlOptions,
    CarouselModule.forRoot(),
    // CarouselComponent,
    
  ],
  exports: [
    CustomCarouselComponent
  ]
})
export class CustomCarouselModule { }
