import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css']
})
export class CustomCarouselComponent {
  vehicles = [
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: 'https://www.webmotors.com.br/comprar/volkswagen/golf/14-tsi-highline-16v-gasolina-4p-automatico/4-portas/2015-2015/48437056',
      imageUrl: 'http://lorempixel.com.br/200/200',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },

    // Add more vehicle objects as needed
  ];

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    nav: true,
    navText: ['Anterior' ,  'Proximo'],
    center: true,
    items: 3,
    lazyLoad: true
  }

   constructor() { }

   ngOnInit(): void {
   }


}
