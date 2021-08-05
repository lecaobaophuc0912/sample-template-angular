/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomeComponent } from '../../dashboard/home/home.component';
import { Location } from '@angular/common';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let nativeEle: HTMLElement;
  let formBuilder: FormBuilder;
  let routerSpy: {
    navigate: Function
  };
  let spyLocation: Location
  const validValues = {
    username: 'test',
    password: 'testpass'
  };
  const invalidValues = {
    username: '',
    password: ''
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: HomeComponent },
        { path: 'sign-up', component: SignUpComponent },
      ]),
        ReactiveFormsModule,
      ],
      providers: [
        FormBuilder,
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
    routerSpy = {
      navigate: jasmine.createSpy('navigate'),
    };
    spyLocation = TestBed.inject(Location);
    fixture.detectChanges();
  }));

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should content the text "Don\'t have account? Sign Up"', waitForAsync(() => {
    const spanContentText = nativeEle.querySelector('span').innerText;
    expect(spanContentText).toContain(`Don't have account? Sign Up`)
  }));

  it('should be go to SignUp page when click Sign Up link', waitForAsync(async () => {
    const signUpSpan: HTMLElement = nativeEle.querySelector('.cursor-pointer.text-underline');
    signUpSpan.click();
    await fixture.whenStable();
    expect(spyLocation.path()).toEqual('/sign-up');
  }))

  it('should be ngOnInit', waitForAsync(() => {
    const createForm = spyOn(component, 'createForm');
    component.ngOnInit();
    expect(createForm).toHaveBeenCalled();
  }));

  it('should content form element', waitForAsync(() => {
    const formElement = nativeEle.querySelector('form');
    expect(formElement).toBeTruthy();
  }));

  it('should validate username element', waitForAsync(() => {
    let errors;
    // username
    const username = component.loginForm.get('username');
    username.setValue('');
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();

    username.setValue('test');
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors).toEqual({});
  }));

  it('should validate password element', waitForAsync(() => {
    let errors;
    // password
    const password = component.loginForm.get('password');
    password.setValue('');
    errors = password.errors || {};
    expect(errors['required']).toBeTrue();

    password.setValue('testpass');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors).toEqual({});
  }));

  it('should be call onLoginClick with form invalid', waitForAsync(() => {
    // Set value for invalid form
    component.loginForm.setValue(invalidValues)
    component.onLoginClick();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  }));

  it('should be call onLoginClick with form valid', waitForAsync(() => {
    // Set value for valid form
    component.loginForm.setValue(validValues);
    component.onLoginClick();
    routerSpy.navigate(['home']);
    expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['home']);
  }));

});
