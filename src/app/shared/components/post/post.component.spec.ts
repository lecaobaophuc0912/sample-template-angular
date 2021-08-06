/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostComponent } from './post.component';
import { RandomUppperCasePipe } from '../../pipes/random-uppper-case.pipe';
import { HoverHightlightDirective } from '../../directives/hover-hightlight.directive';
import { Post } from '../../models/post';
import { Utils } from '../../utils/utils'

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  const mockPostData: Post = {
    id: 1,
    name: 'cerulean',
    year: 2000,
    color: '#98B2D1',
    pantone_value: '15-4020'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [PostComponent, RandomUppperCasePipe, HoverHightlightDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should component is empty Input post', waitForAsync(() => {
    component.postData = null;
    component.ngOnInit();
    fixture.detectChanges();
    const h2Element: DebugElement = fixture.debugElement.query(By.css('h2'));
    const postNameElement: DebugElement = fixture.debugElement.query(By.css('.post-name'));
    const postIdElement: DebugElement = fixture.debugElement.query(By.css('.post-id'));

    expect(h2Element.nativeElement.innerText).toEqual('');
    expect(postNameElement.nativeElement.innerText).toEqual('');
    expect(postIdElement).toBeNull();
    expect(component.getRandomIndexUpper()).toEqual([]);
  }));

  it('should component is match value Input post', waitForAsync(() => {
    component.postData = mockPostData;
    component.ngOnInit();
    fixture.detectChanges();

    const h2Element: DebugElement = fixture.debugElement.query(By.css('h2'));
    const postNameElement: DebugElement = fixture.debugElement.query(By.css('.post-name'));
    const postIdElement: DebugElement = fixture.debugElement.query(By.css('.post-id'));

    expect(h2Element.nativeElement.innerText).toEqual(mockPostData.pantone_value);
    expect(postNameElement.nativeElement.innerText.toLocaleLowerCase()).toEqual(mockPostData.name.toLocaleLowerCase());
    expect(postIdElement).not.toBeNull();
    expect(postIdElement.nativeElement.innerText).toEqual(mockPostData.id + 'd');
    spyOn(Utils, 'getRandomInt').and.returnValue(1);
    const randomIndexUpper = component.getRandomIndexUpper();
    expect(randomIndexUpper.length).toEqual(component.numberOfCharUpper);
    expect(Utils.getRandomInt).toHaveBeenCalledWith(0, mockPostData.name.length - 1);
  }));


  it('should be return right moonIcon', waitForAsync(() => {
    component.moonState = false;
    expect(component.stateOfMoon).toEqual(component.crescentMoon);
    component.moonState = true;
    expect(component.stateOfMoon).toEqual(component.fullMoonIcon);
  }));



  it('should be click on moonIcon when postData is match value', waitForAsync(() => {
    component.postData = mockPostData;
    component.moonState = false;
    fixture.detectChanges();
    const oldMoonState = component.moonState;
    const moonIconElement = fixture.debugElement.query(By.css('.rounded-circle'));
    moonIconElement.triggerEventHandler('click', null);
    spyOn(component.clickOnMoon, 'emit');
    component.onClickMoonIcon();
    expect(component.moonState).toEqual(!oldMoonState);
    expect(component.clickOnMoon.emit).toHaveBeenCalledOnceWith(component.postData);
  }));
});
