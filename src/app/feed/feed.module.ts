import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { CustomCarouselModule } from '../carousel/custom-carousel.module';
import { CustomCardModule } from '../card/card.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CustomCarouselModule,
    CustomCardModule
  ]
})
export class FeedModule { }
