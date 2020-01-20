import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  id: string = "";
  userForm = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
    phone: [''],
    birthday: [''],
    bio: [''],
    gender: [''],
    avatar: ['']
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(data => {
      this.userForm.setValue(data);
      // console.log(data);
      
    });

  }

  onUpdateUser() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.updateUser(parseInt(this.id), this.userForm.value).subscribe(
     () => alert('update successful !')
    )
  }
}
