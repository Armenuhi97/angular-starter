import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyList } from '../models/my-list.model';
import { Todo } from '../models/todo.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public isShowLoading: boolean = false;
  public registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.registrationForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void { }

  public register() {
    if (this.registrationForm.valid) {
      this.isShowLoading = true;
      this.registrationForm.disable();
      setTimeout(() => {
        let user = this.userService.getUser(this.registrationForm.value);
        if (!user) {
          this.isShowLoading = false;
          let usersList = this.userService.getUsersList();
          let lastId = usersList.values[usersList.values.length - 1].id;
          let newUser = Object.assign({}, this.registrationForm.value, { id: lastId + 1, todoList: new MyList<Todo>([]) });
          this.userService.activeUser = newUser;
          this.userService.addUser(newUser);
          this.router.navigateByUrl('/home');
        } else {
          this.isShowLoading = false;
          this.registrationForm.enable();
        }
      }, 3000);
    }

  }


}
