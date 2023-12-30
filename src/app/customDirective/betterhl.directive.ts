import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterhl]'
})
export class BetterhlDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  @HostBinding("style.backgroundColor") background: string = 'transparent';

}
