import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'custom-card',
  templateUrl: './card.component.html'
})
export class CustomCardComponent {
  @Input() model!: string;
  @Input() description!: string;
  @Input() value!: number;
  @Input() yaer!: number;
  @Input() local!: number;
  @Output() like: EventEmitter<number> = new EventEmitter();
}
