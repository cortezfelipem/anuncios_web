import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CustomCarouselModule } from './carousel/custom-carousel.module';
import { FeedModule } from './feed/feed.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule, 
    FeedModule,
    FooterModule,
    CarouselModule,
    CustomCarouselModule,
    // OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
