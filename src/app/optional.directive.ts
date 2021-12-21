import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[optionalIngredient]',
})
export class OptionalIngredientDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') onClick() {
    console.log(this.elRef.nativeElement.attributes['Class']);
    if (this.elRef.nativeElement.attributes['class']) {
      this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    } else {
      this.renderer.setAttribute(
        this.elRef.nativeElement,
        'class',
        'strikethrough'
      );
    }
  }
}
