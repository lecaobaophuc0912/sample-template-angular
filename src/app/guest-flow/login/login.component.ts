import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorLogin: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {

  }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group(
      {
        username: new FormControl('eve.holt@reqres.in', [Validators.required]),
        password: new FormControl('cityslicka', [Validators.required]),
      }
    );
  }

  onLoginClick() {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.userService.login(username, password).subscribe((res) => {
      if (res && res.token) {
        this.router.navigate(['home']);
        localStorage.setItem('token', res.token);
      } else {
        this.errorLogin = true;
      }
    }, error => {
      this.errorLogin = true;
    })

  }
}
