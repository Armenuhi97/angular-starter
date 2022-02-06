import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isShowLoading: boolean = false;
  public erroMessage: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void { }

  public login() {
    if (this.loginForm.valid) {
      this.erroMessage = '';
      this.isShowLoading = true;
      this.loginForm.disable();
      setTimeout(() => {
        let user = this.userService.getUser(this.loginForm.value);
        if (user) {
          this.isShowLoading = false;
          this.userService.activeUser = user;
          this.router.navigateByUrl('/home');
        } else {
          this.isShowLoading = false;
          this.loginForm.enable();
          this.erroMessage = "This user doesn't exist";
        }
      }, 3000);
    }
  }

}
