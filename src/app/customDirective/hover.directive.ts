import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log("Hover INIT")
  }

  ngOnInit() {
  }
  @HostListener("mouseenter") onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, "margin", "30px 30px")
    this.renderer.setStyle(this.element.nativeElement, "padding", "30px 30px")
    this.renderer.setStyle(this.element.nativeElement, "transition", "0,5s")
  }
  @HostListener("mouseleave") onmouseleave() {
    this.renderer.setStyle(this.element.nativeElement, "margin", "3px 3px")
    this.renderer.setStyle(this.element.nativeElement, "padding", "3px 3px")
    this.renderer.setStyle(this.element.nativeElement, "transition", "0,5s")
  }

}
