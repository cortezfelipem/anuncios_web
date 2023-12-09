import { Component, Input } from '@angular/core';
@Component({
  selector: 'ads-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class AdvertisingCardComponent {
  @Input() href: string = 'javascript:()';
  @Input() categoryName!: string;
  @Input() imageUrl: string = '';
  @Input() imageTitle: string = '';
  @Input() imageAlt: string = '';
  @Input() height!: string | number;
  @Input() width!: string | number;
}
