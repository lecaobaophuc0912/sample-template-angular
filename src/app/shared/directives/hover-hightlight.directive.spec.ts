/* tslint:disable:no-unused-variable */

import { Component, DebugElement, ElementRef } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverHightlightDirective } from './hover-hightlight.directive';

@Component({
  template: `
   <div appHoverHightlight [hightLightColor]="'#ff0000'"></div>
  `
})
class MockDirectiveComponent { }

describe('Directive: HoverHightlight', () => {
  let fixture: ComponentFixture<MockDirectiveComponent>;
  let divElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MockDirectiveComponent, HoverHightlightDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(MockDirectiveComponent);
    divElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  }))

  it('should create an instance', () => {
    const directive = new HoverHightlightDirective(fixture.debugElement.nativeElement);
    expect(directive).toBeTruthy();
  });

  it('should empty background when initial', () => {
    expect(divElement.nativeElement.style.background).toEqual('');
  });

  it('should have background #ff0000CC when mouseenter', () => {
    // because color #ff0000CC to RGBA is rgba(255, 0, 0, 0.8) so just compare 2 value
    divElement.triggerEventHandler('mouseenter', null);

    fixture.detectChanges();
    expect(divElement.nativeElement.style.background).toEqual('rgba(255, 0, 0, 0.8)');
  });

  it('should have background is null when mouseleave', () => {
    // because color #ff0000CC to RGBA is rgba(255, 0, 0, 0.8) so just compare 2 value
    divElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(divElement.nativeElement.style.background).toEqual('');
  });

  it('should onMouseEnter event call', waitForAsync(() => {
    const elemtRef = new ElementRef(document.createElement('div'));
    const directive = new HoverHightlightDirective(elemtRef);
    directive.hightLightColor = '#ff0000';

    const event = new MouseEvent('mouseenter', null);
    directive.elementRef.nativeElement.dispatchEvent(event);
    spyOn(directive, 'onMouseEnter').and.callThrough();
    directive.onMouseEnter();

    expect(directive.elementRef.nativeElement.style.background).toEqual('rgba(255, 0, 0, 0.8)');
    expect(directive.onMouseEnter).toHaveBeenCalled();
  }));

  it('should onMouseLeave event call', waitForAsync(() => {
    const elemtRef = new ElementRef(document.createElement('div'));
    const directive = new HoverHightlightDirective(elemtRef);
    directive.hightLightColor = '#ff0000';
    const eventMouseLeave = new MouseEvent('mouseleave', null);
    directive.elementRef.nativeElement.dispatchEvent(eventMouseLeave);
    spyOn(directive, 'onMouseLeave').and.callThrough();
    directive.onMouseLeave();

    expect(directive.elementRef.nativeElement.style.background).toEqual('');
    expect(directive.onMouseLeave).toHaveBeenCalled();
  }));




});
