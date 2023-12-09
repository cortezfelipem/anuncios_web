import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage {
  options: OwlOptions = {
    loop: true,
    center: false,
    lazyLoad: true,
    autoHeight: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 5
      },
    }
  };
}
