import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userservice: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  userForm = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    birthday: [''],
    bio: [''],
    gender: [''],
    avatar: ['']
  });

  addUser() {
    this.userservice.setUser(this.userForm.value).subscribe(
     () => console.log(this.userForm.value)
    )
  }


}
