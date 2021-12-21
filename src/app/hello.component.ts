import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Scrambled eggs ingredients:
             <p>2 eggs</p>
             <a><p optionalIngredient>1 table spoon of cream</p></a>
             <p optionalIngredient>100g of cheese</p>
             <p>salt</p>
           </div>`,
  styles: ['.strikethrough { text-decoration: line-through; }'],
})
export class HelloComponent {}
