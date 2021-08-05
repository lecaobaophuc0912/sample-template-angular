import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHightlight]'
})

export class HoverHightlightDirective {

  @Input() hightLightColor: string = '#ffffff';

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.background = this.hightLightColor + 'CC';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.background = null;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) { }

}
