import { Component } from '@angular/core';

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
  noWrapSlides = false;
  showIndicator = true;
  carouselOptions = {
    items: 5,
    loop: true,
    nav: true,
    dots: this.showIndicator,
  };
   constructor() { }

   ngOnInit(): void {
   }


}
