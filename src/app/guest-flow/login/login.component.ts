import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group(
      {
        username: new FormControl('', [Validators.required]),
        password: ['', [Validators.required]],
      }
    )
  }

  onLoginClick() {
    if (this.loginForm.invalid) {
      console.log('invalid');
      return;
    }
    this.router.navigate(['home'])
    console.log('onLoginClick');
  }
}
