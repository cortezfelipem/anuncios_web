import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConfig } from 'src/assets/url.config';
import { Category, Offer } from '../interfaces/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Array<Category>>(urlConfig.home.categories)
  }

  getAllOffers() {
    return this.http.get<Array<Offer>>(urlConfig.home.offers)
  }
}
