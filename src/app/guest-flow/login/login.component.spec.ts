/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let nativeEle: HTMLElement;
  let formBuilder: FormBuilder;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  // add waitForAsync it mean we have ngOnInit already run before test === test ngOnit is run when component init
  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoginComponent);
    nativeEle = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.loginForm = formBuilder.group({
      username: new FormControl('username', [Validators.required]),
      password: new FormControl('Test!234', [Validators.required]),
    });
    fixture.detectChanges();
  }));

  it('should create', waitForAsync(() => {
    spyOn(component, 'createForm');
    expect(component).toBeTruthy();
  }));

  // it('should be run ngOnInit', () => {
  //   spyOn(component, 'ngOnInit')
  //   expect(component.ngOnInit).toHaveBeenCalled();
  // })

  it('should create', waitForAsync(() => {
    expect(component.loginForm).toBeTruthy();
  }));

  it('should content the text "Don\'t have account? Sign Up"', waitForAsync(() => {
    const spanContentText = nativeEle.querySelector('span').innerText;
    expect(spanContentText).toContain(`Don't have account? Sign Up`)
  }))

  it('should content form element', waitForAsync(() => {
    const formElement = nativeEle.querySelector('form');
    expect(formElement).toBeTruthy();
  }))

  it('should invalid form', waitForAsync(() => {
    component.loginForm.setValue({
      username: '',
      password: ''
    });
    expect(component.loginForm.invalid).toBeTrue();
  }))
});
