/* tslint:disable:no-unused-variable */

import { Component, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverHightlightDirective } from './hover-hightlight.directive';

@Component({
  template: `
   <div appHoverHightlight [hightLightColor]="'#ff0000'"></div>
  `
})
class MockDirectiveComponent { }

function dispatchEvent(el, eventType) {
  var event = document.createEvent('MouseEvents');
  event.initEvent(eventType, true, true);
  el.dispatchEvent(event)
}

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


});
