import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { first, forkJoin } from 'rxjs';
import { Category, Offer } from 'src/app/interfaces/home';
import { HomeService } from 'src/app/services/home.service';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit {
  options: OwlOptions = {
    loop: true,
    center: false,
    lazyLoad: true,
    autoHeight: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 5,
      },
    },
  };

  categories: Array<Category> = [];
  offers: Array<Offer> = [];

  body = {
    images: [
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
      {
        imageUrl: 'https://picsum.photos/200',
        imageTitle: 'TESTE',
        imageAlt: 'TESTE',
      },
    ],
    value: 3940.50,
    name: 'Nelore',
    description: 'Boi da raça Nelore com pelagem malhada. Manso e de excelente genética para reprodução.',
    cityName: 'São Paulo',
    uf: 'SP',
  };

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed() {
    forkJoin({
      categories: this.homeService.getAllCategories(),
      offers: this.homeService.getAllOffers(),
    })
      .pipe(first())
      .subscribe((resp) => {
        this.categories = resp.categories;
        this.offers = resp.offers;
      });
  }
}
