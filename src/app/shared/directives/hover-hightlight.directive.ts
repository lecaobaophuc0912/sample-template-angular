import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverHightlight]'
})

export class HoverHightlightDirective implements OnInit {

  @Input() hightLightColor: string = '#ffffff';

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.background = this.hightLightColor + 'CC';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.background = '';
  }

  constructor(public elementRef: ElementRef<HTMLElement>) { }

  ngOnInit() {

  }
}
