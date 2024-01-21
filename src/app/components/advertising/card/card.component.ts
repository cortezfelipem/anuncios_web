import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'ads-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class AdvertisingCardComponent {
  @Input() href: string = 'javascript:;';
  @Input() simple: boolean = false;
  @Input() categoryName!: string;
  @Input() imageUrl: string = '';
  @Input() imageTitle: string = '';
  @Input() imageAlt: string = '';
  @Input() height!: string | number;
  @Input() width!: string | number;
  @Input() images!: Array<ImageCard>;
  @Input() body!: BodyCard;
  @Input() options: OwlOptions = { items: 1, lazyLoad: true };
}

interface ImageCard {
  imageUrl: string;
  imageTitle: string;
  imageAlt: string;
}

interface BodyCard {
  name: string;
  description: string;
  value: number | null;
  cityName: string;
  uf: string;
  images: Array<ImageCard>
}
