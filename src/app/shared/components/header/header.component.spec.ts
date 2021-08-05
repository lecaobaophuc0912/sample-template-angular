import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { MockLocalStorage } from '../../mock-unit-test/services/mock-local-storage.spec';
const mockLocalStorage = new MockLocalStorage()

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    mockLocalStorage.clear();
    fixture.detectChanges();
  });


  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should check token have value', waitForAsync(() => {
    mockLocalStorage.setItem('token', 'fakeTokenValue');
    spyOnProperty(component, 'isLogged').and.callFake(() => {
      return mockLocalStorage.getItem('token') || null;
    });
    expect(component.isLogged).toEqual('fakeTokenValue');
  }));
});
