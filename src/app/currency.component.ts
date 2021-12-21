import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //Update this template
  template: `<p>{{amount | currency: currencyCode}}</p>`
}) 
export class CurrencyComponent {
  @Input() amount: number;
  @Input() currencyCode: string;
}